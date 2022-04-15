//Library imports
#include <Arduino.h>
#include <WiFi.h>
#include <string>
#include "esp_wpa2.h" //wpa2 library for connections to Enterprise networks
#include <HTTPClient.h>
#include "DHT.h"
#include <Preferences.h>
#include <stdio.h>
#include <Stepper.h>
#include <WebServer.h>
#include "EcoswitchClient.h"
#include "EcoswitchMain.h"
#include "EcoswitchAdmin.h"

//DHT sensor
uint8_t DHTPin = 13;
#define DHTTYPE DHT22

//Declaration of global variables
#define USE_SERIAL Serial
int counter = 0;
String ID = "12345"; //Device ID number
float target_temp = 23;   //Target temperature for heating, in Celcius
int wifi_success = 2;
Preferences saved_data;
int rounds = 0;
float Tf;
float Ti;
float Td;
int serverLock;
bool lock;
int stepsize = 15;
bool runserver = false;

char* webssid = "EcoSwitch";
char* webpassword = "12345678";
IPAddress local_ip(192,168,1,1);
IPAddress gateway(192,168,1,1);
IPAddress subnet(255,255,255,0);
WebServer webserver(80);
String winame;
String pass;
String user;
bool continueSetup = false;
bool desiredLocal = false;
WiFiClient clien;

//Initialization for DHT sensor
DHT dht(DHTPin, DHTTYPE);

const int stepsPerRevolution = 100;

// Motor Driver Pins
#define IN1 27
#define IN2 26
#define IN3 25
#define IN4 33
#define DCMOTORDRIVERL298_PIN_ENA  32
// initialize the stepper library
Stepper myStepper(stepsPerRevolution, 27, 26, 25, 33);

//Webserver Pages and Handlers

//---------------------------------------------------------
void handleNotFound() {
  webserver.send(404, "text/plain", "Page not found ...");
}

//---------------------------------------------------------
void handleSave() {
  String str = "Settings Saved ... Now Connecting to Wifi...\r\n";
 
  if (webserver.args() > 0 ) {
      winame = webserver.arg(0);
      pass = webserver.arg(1);
      saved_data.putString("SSID", winame);
      saved_data.putString("WifiPassword", pass);
      if (webserver.args() > 1){
        user = webserver.arg(2);
        saved_data.putString("WifiUsername", user);
      }
      continueSetup = true;
  
  }
  webserver.send(200, "text/plain", str.c_str());
}

//---------------------------------------------------------
void handleExample() {
  webserver.send(200, "text/html", EXAMPLE_HTML);
}


//---------------------------------------------------------
void handleEnterprise() {
  webserver.send(200, "text/html", ENTERPRISE_HTML);
}

//---------------------------------------------------------
void handleReset() {
  String str = "Factory Reset Initiated...\r\n";

  webserver.send(200, "text/plain", str.c_str());
  factory_reset();
}

//---------------------------------------------------------
void handleMain() {
  webserver.send(200, "text/html", MAIN_HTML);
}

//---------------------------------------------------------
void handleTemp() {
   // Read temperature as Celsius (the default)
   String t = String(dht.readTemperature());
  webserver.send(200, "text/plane", t);
}

//---------------------------------------------------------
void handleHumidity() {
   String h = String(dht.readHumidity());
  webserver.send(200, "text/plane", h);
}

//---------------------------------------------------------
void handleAdmin() {
  webserver.send(200, "text/html", ADMIN_HTML);
}

//---------------------------------------------------------
void handleChangeTemp() {
 String str = "Settings Saved\r\n";
  Td  = webserver.arg(0).toFloat();
  desiredLocal = true;
  webserver.send(200, "text/plain", str.c_str());
}



//---------------------------------------------------------------------------------------------------------------------------------
//Setup for wifi, only to be used once on "factory settings"
int wifi_setup(){

  delay(3000);
  String continueConnect;

  WiFi.softAP(webssid, webpassword);
  Serial.println("");
  WiFi.softAPConfig(local_ip, gateway, subnet);

  webserver.on("/", handleExample);
  webserver.on("/save", handleSave);
  webserver.onNotFound(handleNotFound);
  webserver.on("/enterprise", handleEnterprise);
  webserver.begin();
  Serial.println("Web server has started");
  while (true){
    webserver.handleClient();
    if (continueSetup){
      webserver.close();
      break;
    }
  }
  
  
    WiFi.mode(WIFI_AP_STA); //init wifi mode
     if(saved_data.getString("WifiUsername", "") == ""){
    //INITIATE CONSUMER GRADE SETUP
    WiFi.begin(winame.c_str(), pass.c_str());
  }else{
    esp_wifi_sta_wpa2_ent_set_identity((uint8_t *)user.c_str(), strlen(user.c_str())); //provide identity
    esp_wifi_sta_wpa2_ent_set_username((uint8_t *)user.c_str(), strlen(user.c_str())); //provide username --> identity and username is same
    esp_wifi_sta_wpa2_ent_set_password((uint8_t *)pass.c_str(), strlen(pass.c_str())); //provide password
    esp_wpa2_config_t config = WPA2_CONFIG_INIT_DEFAULT();
    esp_wifi_sta_wpa2_ent_enable(&config);
    WiFi.begin(winame.c_str()); //starts process to connect to wifi
  }
  USE_SERIAL.println("Connecting...");
  while (WiFi.status() != WL_CONNECTED) { //Retry connection if failed to connect to wifi
    delay(500);
    USE_SERIAL.print(".");
    counter++;
    if(counter>=60){ //after 30 seconds timeout - reset board
       USE_SERIAL.println("Connection Timeout, Continue Trying? Y/N");
       while (true){
        if (USE_SERIAL.available()>0){
          continueConnect = USE_SERIAL.readString();
        }
        if (continueConnect[0] == 'N' || continueConnect[0] == 'n'){
          USE_SERIAL.println("Clearing Memory...");
          saved_data.clear();
          ESP.restart();
        }
       }
    }
  }
  USE_SERIAL.println("");
  USE_SERIAL.println("WiFi connected");
  USE_SERIAL.println("IP address set: "); 
  USE_SERIAL.println(WiFi.localIP()); //print LAN IP

  return 0;
    
}
//-----------------------------------------------------------------------------------------------------------------------
void wifi_quickstart(){ //skips setup process and connects to wifi with saved data
  
  //Lets the user reset device to original state
  delay(3000);
  USE_SERIAL.println("Would you like a factory reset? Y/N");
  String fr;
  while (true){
      if (USE_SERIAL.available() > 0){
        fr = USE_SERIAL.readStringUntil('\n');
      }
      if (fr[0] == 'y' || fr[0] == 'Y'){
        factory_reset();
      }
      if (fr[0] == 'n' || fr[0] == 'N'){
        break;
      }
    }

    //Setup for wifi
  USE_SERIAL.println("Wifi Quickstart Setup...");
  String ssid;
  String password;
  ssid = saved_data.getString("SSID");
  password = saved_data.getString("WifiPassword");
  
  if(saved_data.getString("WifiUsername", "") == ""){
    //INITIATE CONSUMER GRADE SETUP
    USE_SERIAL.println("Consumer Wifi Quickstart...");
    WiFi.begin(ssid.c_str(),password.c_str());
  }
  else{
    WiFi.mode(WIFI_AP_STA); //init wifi mode
    USE_SERIAL.println("Enterprise Wifi Quickstart...");
    String username = saved_data.getString("WifiUsername");
    esp_wifi_sta_wpa2_ent_set_identity((uint8_t *)username.c_str(), strlen(username.c_str())); //provide identity
    esp_wifi_sta_wpa2_ent_set_username((uint8_t *)username.c_str(), strlen(username.c_str())); //provide username --> identity and username is same
    esp_wifi_sta_wpa2_ent_set_password((uint8_t *)password.c_str(), strlen(password.c_str())); //provide password
    esp_wpa2_config_t config = WPA2_CONFIG_INIT_DEFAULT();
    esp_wifi_sta_wpa2_ent_enable(&config);
    WiFi.begin(ssid.c_str()); //starts process to connect to wifi
  }
  while (WiFi.status() != WL_CONNECTED) { //Retry connection if failed to connect to wifi
    delay(500);
    USE_SERIAL.print(".");
    counter++;
    if(counter>=60){ //after 30 seconds timeout - reset board
      ESP.restart();
    }
  }
  USE_SERIAL.println("");
  USE_SERIAL.println("WiFi connected");
  USE_SERIAL.println("IP address set: "); 
  USE_SERIAL.println(WiFi.localIP()); //print LAN IP

}

//----------------------------------------------------------------------------------------------------
void UserConnected(WiFiEvent_t event, WiFiEventInfo_t info){
  runserver = true;
}
void UserDisconnected(WiFiEvent_t event, WiFiEventInfo_t info){
  runserver = false;
}
//----------------------------------------------------------------------------------------------------
void factory_reset(){ //clears all saved data and restarts ESP32
  USE_SERIAL.print("Factory Reset Initiated...");
  saved_data.clear();
  ESP.restart();
}
//-----------------------------------------------------------------------------------------------------
void dialAlgorithm(float Ti, float Tf, float Td, int rounds, bool lock) {
  if (saved_data.getInt("DialState", -1) == -1){ //assumes dials inital state is 0 (off)
    saved_data.putInt("DialState", 0);
  }
  int state = saved_data.getInt("DialState");
  float temp_slope = (rounds*5) *(Tf - Ti); //Linear approximation of temp change over 1 min 
  if (lock){ //locks device in off position
    for (int i = state; i > 0; i--){
      myStepper.step(-stepsize);
      delay(1000);
    }
    saved_data.putInt("DialState", 0);
    Serial.println("DEVICE IS LOCKED! Contact Administrator for details.");
    return;
  }
  if (Td < Tf){
    //Increase Dial Position (Decrease Temp)
    Serial.println("Predicted Temp: " + String(Tf + (5 *temp_slope)));
    if (state == 0){
      Serial.println("Current Dial State: " + String(state));
      return;
    }
    if(state < 3 && ((Tf+ (5 *temp_slope)) > Td)){
      myStepper.step(stepsize);
      delay(1000);
      state++;
      saved_data.putInt("DialState", state);
      Serial.println("Current Dial State: " + String(saved_data.getInt("DialState")));
      return;
    }
    if (state == 3 && ((Tf+ (5*temp_slope)) > Td)){ //if on lowest setting: State 3, will move to State 0 to turn off
      for (int i = state; i > 0; i--){
        myStepper.step(-stepsize);
        Serial.println("Current Dial State: " + String(i-1));
        delay(1000);
      }
      saved_data.putInt("DialState", 0);
      return;
    }
  }
  if(Td > Tf){
    //Decrease Dial Position (Increase Temp)
    if(state > 1 && (Tf+ (5*temp_slope) < Td)){ //predicts temp for the next minute
      myStepper.step(-stepsize);
      delay(1000);
      state--;
      saved_data.putInt("DialState", state);
      Serial.println("Current Dial State: " + String(state));
      return;
    }
    if (state == 0 && ((Tf+ (5*temp_slope)) < Td)){ //if off: State 0, will move to State 3 to turn on
      for (int i = state; i < 3; i++){
        myStepper.step(stepsize);
        Serial.println("Current Dial State: " + String(i+1));
        delay(1000);
      }
      saved_data.putInt("DialState", 3);
      return;
    }
  }
  Serial.println("Current Dial State: " + String(saved_data.getInt("DialState")));
  return;
}

//------------------------------------------------------------------------------------------------
void setup() {
  USE_SERIAL.begin(115200);
  // set the speed at 5 rpm
  myStepper.setSpeed(30);
  delay(10);
  //intiates process to save important data to flash memory
  saved_data.begin("Ecoswitch_data",false);
  
  dht.begin();
}


void loop() {
                                                                                                                                           
         
         //Wifi Setup (doesn't work in setup() function, so must be added here
         while (wifi_success > 1){
          if (saved_data.getString("SSID", "NA") == "NA"){
           wifi_success = wifi_setup(); 
           WiFi.softAP(webssid, webpassword);
           Serial.println("");
            WiFi.softAPConfig(local_ip, gateway, subnet);

            
            webserver.onNotFound(handleNotFound);
            webserver.on("/admin", handleAdmin);
            webserver.on("/readTemp", handleTemp);
            webserver.on("/readHumidity", handleHumidity);
            webserver.on("/reset", handleReset);
            webserver.on("/", handleMain);
            webserver.on("/changeTemp", handleChangeTemp);
            webserver.begin();
            Serial.println("Web server has Restarted");
           }
          else{
            wifi_quickstart();
            wifi_success = 0;
            WiFi.softAP(webssid, webpassword);
            Serial.println("");
            WiFi.softAPConfig(local_ip, gateway, subnet);

            
            
            webserver.onNotFound(handleNotFound);
            webserver.on("/", handleMain);
            webserver.on("/admin", handleAdmin);
            webserver.on("/readTemp", handleTemp);
            webserver.on("/readHumidity", handleHumidity);
            webserver.on("/reset", handleReset);
            webserver.on("/changeTemp", handleChangeTemp);
            webserver.begin();
            Serial.println("Web server has Restarted");
   }
  }
          WiFi.onEvent(UserConnected, SYSTEM_EVENT_STA_CONNECTED);
          while (runserver){
            webserver.handleClient();
            WiFi.onEvent(UserDisconnected,SYSTEM_EVENT_STA_DISCONNECTED);
            //if(!clien.available()){
              //break;
            //}
          }
          
         // Reading temperature or humidity takes about 250 milliseconds!
        // Sensor readings may also be up to 2 seconds 'old' (its a very slow sensor)
        float h = dht.readHumidity();
        // Read temperature as Celsius (the default)
        float t = dht.readTemperature();
          // Check if any reads failed and exit early (to try again).
        if (isnan(h) || isnan(t)) {
          Serial.println(F("Failed to read from DHT sensor!"));
          t = 0;
          h = 0;
        }
        USE_SERIAL.print("Current Humidity is: "+ String(h) + "%");
        USE_SERIAL.print("\n");
        USE_SERIAL.print("Current Temperature is: " + String(t) + "C");
        USE_SERIAL.print("\n");
        //int wifi_success;
        //wifi_success = wifi_setup();
        
        HTTPClient https;

        USE_SERIAL.print("[HTTPS] begin...\n");
        // configure targeted server and url
        //URL Arguments for targeted PHP page
        String arguments = "?temperature=" + String(t) + "&humidity=" + String(h) + "&deviceID=" + String(ID);
        //Connects to targeted page
        https.begin("https://3.12.233.95/device_dataUpdate.php" + arguments); //HTTPS

        USE_SERIAL.print("[HTTP] GET...\n");
        // start connection and send HTTP header
        https.addHeader("Content-Type", "application/x-www-form-urlencoded");
        int httpCode = https.sendRequest("GET","message_sent=HELLO");

        // httpCode will be negative on error
        if(httpCode > 0) {
            // HTTP header has been send and Server response header has been handled
            USE_SERIAL.printf("[HTTP] POST... code: %d\n", httpCode);

            // file found at server
            if(httpCode == HTTP_CODE_OK) {
                String payload = https.getString(); //gets string message server sends back
                int seperator = payload.indexOf(" ");
                if (saved_data.getFloat("serverDesired",-99.9) != payload.substring(0,seperator).toFloat()){
                  desiredLocal = false;
                }
                if (!desiredLocal){
                Serial.println("Desired Temp is: " + String(payload.toFloat()) +" C");
                Td = payload.substring(0,seperator).toFloat();
                saved_data.putFloat("serverDesired", Td);
                }else{
                  Serial.println("Desired Temp is: " + String(Td) +" C");
                }
                serverLock = payload.substring(seperator + 1, payload.length() - 1).toInt();
                if (serverLock == 0){
                  lock = true;
                }
                else{
                  lock = false;
                }
                
            }
        } else {
            USE_SERIAL.printf("[HTTP] GET... failed, error: %s\n", https.errorToString(httpCode).c_str());

        https.end(); //ends HTTP connection
    }
    if (rounds == 0){
      Ti = t;
    }
    if (rounds >= 2){ //executes every ~1 min
      Tf = t;
      dialAlgorithm(Ti,Tf,Td,rounds,lock);
      rounds = 0;
    }else{
      rounds += 1;
    }

    Serial.println("--------------------------------------------------------------------------------------------------------");
    delay(3000); //Time between measurements (6 seconds)
}
