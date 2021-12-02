
#include <Arduino.h>

#include <WiFi.h>
#include <string>
#include "esp_wpa2.h" //wpa2 library for connections to Enterprise networks
#include <HTTPClient.h>
#include "DHT.h"

//DHT sensor
uint8_t DHTPin = 4;
#define DHTTYPE DHT11

#define USE_SERIAL Serial
//Wifi login credentials
#define EAP_IDENTITY "USERNAME" //wifi username
#define EAP_PASSWORD "PASSWORD" //Wifi user password
const char* ssid = "SSID"; // SSID of Wifi network
int counter = 0;
String ID = "12345"; //Device ID number


DHT dht(DHTPin, DHTTYPE);

void setup() {

  USE_SERIAL.begin(115200);
  delay(10);
  Serial.println();
  Serial.print("Connecting to network: ");
  Serial.println(ssid);
  WiFi.disconnect(true);  //disconnect form wifi to set new wifi connection
  WiFi.mode(WIFI_STA); //init wifi mode
  esp_wifi_sta_wpa2_ent_set_identity((uint8_t *)EAP_IDENTITY, strlen(EAP_IDENTITY)); //provide identity
  esp_wifi_sta_wpa2_ent_set_username((uint8_t *)EAP_IDENTITY, strlen(EAP_IDENTITY)); //provide username --> identity and username is same
  esp_wifi_sta_wpa2_ent_set_password((uint8_t *)EAP_PASSWORD, strlen(EAP_PASSWORD)); //provide password
  esp_wifi_sta_wpa2_ent_enable();
  WiFi.begin(ssid); //connect to wifi
  while (WiFi.status() != WL_CONNECTED) { //Retry connection if failed to connect to wifi
    delay(500);
    Serial.print(".");
    counter++;
    if(counter>=60){ //after 30 seconds timeout - reset board
      ESP.restart();
    }
  }
  USE_SERIAL.println("");
  USE_SERIAL.println("WiFi connected");
  USE_SERIAL.println("IP address set: "); 
  USE_SERIAL.println(WiFi.localIP()); //print LAN IP
  dht.begin();
}


void loop() {

    // wait for WiFi connection
    if((WiFi.status() == WL_CONNECTED)) {

         // Reading temperature or humidity takes about 250 milliseconds!
        // Sensor readings may also be up to 2 seconds 'old' (its a very slow sensor)
        float h = dht.readHumidity();
        // Read temperature as Celsius (the default)
        float t = dht.readTemperature();
        USE_SERIAL.print(h);
        USE_SERIAL.print("\n");
        USE_SERIAL.print(t);
        USE_SERIAL.print("\n");
        
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
        }

        http.end(); //ends HTTP connection
    }

    delay(12000); //Time between measurements (12 seconds)
}
