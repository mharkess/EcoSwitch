//Library imports
#include <Arduino.h>
#include <WiFi.h>
#include <string>
#include "esp_wpa2.h" //wpa2 library for connections to Enterprise networks
#include <HTTPClient.h>
#include "DHT.h"
#include <Preferences.h>
#include <stdio.h>

//DHT sensor
uint8_t DHTPin = 4;
#define DHTTYPE DHT11

//Declaration of global variables
#define USE_SERIAL Serial
int counter = 0;
String ID = "12345"; //Device ID number
float target_temp = 23;   //Target temperature for heating, in Celcius
int wifi_success = 2;
Preferences saved_data;
DHT dht(DHTPin, DHTTYPE);


//Setup for wifi, only to be used once on "factory settings"
int wifi_setup(){

  delay(5000);
  USE_SERIAL.println();
  USE_SERIAL.println("Commencing Wifi Setup...");
  USE_SERIAL.println("Is the device going to be used in an enterprise setting? Y/N");
  String chooseWifi;
  String ssid;
  String wifi_username;
  String wifi_password;
  String continueConnect;

  while (true){
    if(USE_SERIAL.available() > 0){
      chooseWifi = USE_SERIAL.readString();
      break;
    }
  }
  
  //Setup for either Enterprise or Consumer Wifi
  if (chooseWifi[0] == 'y' || chooseWifi[0] == 'Y'){
    //Enterprise grade Wifi setup
    USE_SERIAL.println(chooseWifi);
    USE_SERIAL.println("Enterprise Wifi Setup...");
    USE_SERIAL.println("Wifi Network SSID: ");
    while (true){
      if (USE_SERIAL.available() > 0){
        ssid = USE_SERIAL.readStringUntil('\n');
        ssid.remove(ssid.length()-1, 1);
        break;
      }
    }
    USE_SERIAL.println("Wifi Network Username: ");
    while (true){
      if (USE_SERIAL.available()>0){
        wifi_username = USE_SERIAL.readStringUntil('\n');
        wifi_username.remove(wifi_username.length()-1, 1);
        break;
      }
    }
    USE_SERIAL.println("Wifi Network Password: ");
    while (true){
      if (USE_SERIAL.available()>0){
        wifi_password = USE_SERIAL.readStringUntil('\n');
        wifi_password.remove(wifi_password.length()-1, 1);
        break;
      }
    }
    WiFi.mode(WIFI_STA); //init wifi mode

    esp_wifi_sta_wpa2_ent_set_identity((uint8_t *)wifi_username.c_str(), strlen(wifi_username.c_str())); //provide identity
    esp_wifi_sta_wpa2_ent_set_username((uint8_t *)wifi_username.c_str(), strlen(wifi_username.c_str())); //provide username --> identity and username is same
    esp_wifi_sta_wpa2_ent_set_password((uint8_t *)wifi_password.c_str(), strlen(wifi_password.c_str())); //provide password
    esp_wifi_sta_wpa2_ent_enable();
    WiFi.begin(ssid.c_str()); //starts process to connect to wifi

     //save wifi credentials to memory
  saved_data.putString("SSID", ssid);
  saved_data.putString("WifiPassword", wifi_password);
  saved_data.putString("WifiUsername", wifi_username);
  
    
  }
  else if (chooseWifi[0] == 'N' || chooseWifi[0] == 'n'){
    USE_SERIAL.println("Consumer Wifi Setup...");

    //INSERT REGULAR SETUP OF WIFI HERE!!!!!
    USE_SERIAL.println("Wifi Network SSID: ");
     while (true){
      if (USE_SERIAL.available()>0){
        ssid = USE_SERIAL.readString();
        break;
      }
    }
    USE_SERIAL.println("Wifi Network Password: ");
    while (USE_SERIAL.available()){
      if (USE_SERIAL.available()>0){
        wifi_password = USE_SERIAL.readString();
        break;
      }
    }
    
    WiFi.begin(ssid.c_str(), wifi_password.c_str());
      //save wifi credentials to memory on success
    saved_data.putString("SSID", ssid);
    saved_data.putString("WifiPassword", wifi_password);
  
  }
  else{
    USE_SERIAL.println("Not a valid input");
    ESP.restart();
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

void wifi_quickstart(){ //skips setup process and connects to wifi with saved data
  
  //Lets the user reset device to original state
  delay(5000);
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
    WiFi.mode(WIFI_STA); //init wifi mode
    USE_SERIAL.println("Enterprise Wifi Quickstart...");
    String username = saved_data.getString("WifiUsername");
    esp_wifi_sta_wpa2_ent_set_identity((uint8_t *)username.c_str(), strlen(username.c_str())); //provide identity
    esp_wifi_sta_wpa2_ent_set_username((uint8_t *)username.c_str(), strlen(username.c_str())); //provide username --> identity and username is same
    esp_wifi_sta_wpa2_ent_set_password((uint8_t *)password.c_str(), strlen(password.c_str())); //provide password
    esp_wifi_sta_wpa2_ent_enable();
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


void factory_reset(){ //clears all saved data and restarts ESP32
  USE_SERIAL.print("Factory Reset Initiated...");
  saved_data.clear();
  ESP.restart();
}


void setup() {

  USE_SERIAL.begin(115200);
  USE_SERIAL.println("HELLO");
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
           }
          else{
            wifi_quickstart();
            wifi_success = 0;
   }
  }
         // Reading temperature or humidity takes about 250 milliseconds!
        // Sensor readings may also be up to 2 seconds 'old' (its a very slow sensor)
        float h = dht.readHumidity();
        // Read temperature as Celsius (the default)
        float t = dht.readTemperature();
        USE_SERIAL.print(h);
        USE_SERIAL.print("\n");
        USE_SERIAL.print(t);
        USE_SERIAL.print("\n");
        //int wifi_success;
        //wifi_success = wifi_setup();
        
        HTTPClient http;

        USE_SERIAL.print("[HTTP] begin...\n");
        // configure targeted server and url
        //URL Arguments for targeted PHP page
        String arguments = "?temperature=" + String(t) + "&humidity=" + String(h) + "&deviceID=" + String(ID);
        //Connects to targeted page
        http.begin("http://96.230.29.89:8080/device_dataUpdate.php" + arguments); //HTTP

        USE_SERIAL.print("[HTTP] GET...\n");
        // start connection and send HTTP header
        http.addHeader("Content-Type", "application/x-www-form-urlencoded");
        int httpCode = http.sendRequest("POST","message_sent=HELLO");

        // httpCode will be negative on error
        if(httpCode > 0) {
            // HTTP header has been send and Server response header has been handled
            USE_SERIAL.printf("[HTTP] POST... code: %d\n", httpCode);

            // file found at server
            if(httpCode == HTTP_CODE_OK) {
                String payload = http.getString(); //gets string message server sends back
                USE_SERIAL.println(payload);
            }
        } else {
            USE_SERIAL.printf("[HTTP] GET... failed, error: %s\n", http.errorToString(httpCode).c_str());

        http.end(); //ends HTTP connection
    }

    delay(12000); //Time between measurements (12 seconds)
}
