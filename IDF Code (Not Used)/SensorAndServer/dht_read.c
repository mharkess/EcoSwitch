// Code from ESP_Minatel on https://esp32.com/viewtopic.php?t=20794

#include <stdio.h>
#include <string.h>
#include <sys/param.h>
#include <freertos/FreeRTOS.h>
#include <freertos/task.h>
#include "esp_system.h"
#include "freertos/event_groups.h"
#include "nvs_flash.h"
#include "esp_wifi.h"
#include "esp_event.h"
#include "esp_log.h"
#include "esp_netif.h"

#include "addr_from_stdin.h"
#include "protocol_examples_common.h"
#include "DHT.h"

#include "lwip/err.h"
#include "lwip/sys.h"
#include "lwip/sockets.h"
#include <lwip/netdb.h>

// #define PORT 3000
// #define EXAMPLE_ESP_WIFI_SSID       "Sam"
// #define EXAMPLE_ESP_WIFI_PASS       "!Hall0ween!"
// #define EXAMPLE_ESP_MAXIMUM_RETRY   5

// #if defined(CONFIG_EXAMPLE_IPV4)
// #define HOST_IP_ADDR CONFIG_EXAMPLE_IPV4_ADDR
// #elif defined(CONFIG_EXAMPLE_IPV6)
// #define HOST_IP_ADDR CONFIG_EXAMPLE_IPV6_ADDR
// #else
// #define HOST_IP_ADDR "10.192.21.105"
// #endif

// /* FreeRTOS event group to signal when we are connected*/
// static EventGroupHandle_t s_wifi_event_group;

// //static const char *payload = "Hello from ESP32";

// /* The event group allows multiple bits for each event, but we only care about two events:
//  * - we are connected to the AP with an IP
//  * - we failed to connect after the maximum amount of retries */
// #define WIFI_CONNECTED_BIT BIT0
// #define WIFI_FAIL_BIT      BIT1

// static const char *TAG = "wifi station";

// static int s_retry_num = 0;

// static void event_handler(void* arg, esp_event_base_t event_base,
//                                 int32_t event_id, void* event_data)
// {
//     if (event_base == WIFI_EVENT && event_id == WIFI_EVENT_STA_START) {
//         esp_wifi_connect();
//     } else if (event_base == WIFI_EVENT && event_id == WIFI_EVENT_STA_DISCONNECTED) {
//         if (s_retry_num < EXAMPLE_ESP_MAXIMUM_RETRY) {
//             esp_wifi_connect();
//             s_retry_num++;
//             ESP_LOGI(TAG, "retry to connect to the AP");
//         } else {
//             xEventGroupSetBits(s_wifi_event_group, WIFI_FAIL_BIT);
//         }
//         ESP_LOGI(TAG,"connect to the AP fail");
//     } else if (event_base == IP_EVENT && event_id == IP_EVENT_STA_GOT_IP) {
//         ip_event_got_ip_t* event = (ip_event_got_ip_t*) event_data;
//         ESP_LOGI(TAG, "got ip:" IPSTR, IP2STR(&event->ip_info.ip));
//         s_retry_num = 0;
//         xEventGroupSetBits(s_wifi_event_group, WIFI_CONNECTED_BIT);
//     }
// }

// void wifi_init_sta(void)
// {
//     s_wifi_event_group = xEventGroupCreate();

//     ESP_ERROR_CHECK(esp_netif_init());

//     ESP_ERROR_CHECK(esp_event_loop_create_default());
//     esp_netif_create_default_wifi_sta();

//     wifi_init_config_t cfg = WIFI_INIT_CONFIG_DEFAULT();
//     ESP_ERROR_CHECK(esp_wifi_init(&cfg));

//     esp_event_handler_instance_t instance_any_id;
//     esp_event_handler_instance_t instance_got_ip;
//     ESP_ERROR_CHECK(esp_event_handler_instance_register(WIFI_EVENT,
//                                                         ESP_EVENT_ANY_ID,
//                                                         &event_handler,
//                                                         NULL,
//                                                         &instance_any_id));
//     ESP_ERROR_CHECK(esp_event_handler_instance_register(IP_EVENT,
//                                                         IP_EVENT_STA_GOT_IP,
//                                                         &event_handler,
//                                                         NULL,
//                                                         &instance_got_ip));

//     wifi_config_t wifi_config = {
//         .sta = {
//             .ssid = EXAMPLE_ESP_WIFI_SSID,
//             .password = EXAMPLE_ESP_WIFI_PASS,
//             /* Setting a password implies station will connect to all security modes including WEP/WPA.
//              * However these modes are deprecated and not advisable to be used. Incase your Access point
//              * doesn't support WPA2, these mode can be enabled by commenting below line */
// 	     .threshold.authmode = WIFI_AUTH_WPA2_PSK,

//             .pmf_cfg = {
//                 .capable = true,
//                 .required = false
//             },
//         },
//     };
//     ESP_ERROR_CHECK(esp_wifi_set_mode(WIFI_MODE_STA) );
//     ESP_ERROR_CHECK(esp_wifi_set_config(WIFI_IF_STA, &wifi_config) );
//     ESP_ERROR_CHECK(esp_wifi_start() );

//     ESP_LOGI(TAG, "wifi_init_sta finished.");

//     /* Waiting until either the connection is established (WIFI_CONNECTED_BIT) or connection failed for the maximum
//      * number of re-tries (WIFI_FAIL_BIT). The bits are set by event_handler() (see above) */
//     EventBits_t bits = xEventGroupWaitBits(s_wifi_event_group,
//             WIFI_CONNECTED_BIT | WIFI_FAIL_BIT,
//             pdFALSE,
//             pdFALSE,
//             portMAX_DELAY);

//     /* xEventGroupWaitBits() returns the bits before the call returned, hence we can test which event actually
//      * happened. */
//     if (bits & WIFI_CONNECTED_BIT) {
//         ESP_LOGI(TAG, "connected to ap SSID:%s password:%s",
//                  EXAMPLE_ESP_WIFI_SSID, EXAMPLE_ESP_WIFI_PASS);
//     } else if (bits & WIFI_FAIL_BIT) {
//         ESP_LOGI(TAG, "Failed to connect to SSID:%s, password:%s",
//                  EXAMPLE_ESP_WIFI_SSID, EXAMPLE_ESP_WIFI_PASS);
//     } else {
//         ESP_LOGE(TAG, "UNEXPECTED EVENT");
//     }

//     /* The event will not be processed after unregister */
//     ESP_ERROR_CHECK(esp_event_handler_instance_unregister(IP_EVENT, IP_EVENT_STA_GOT_IP, instance_got_ip));
//     ESP_ERROR_CHECK(esp_event_handler_instance_unregister(WIFI_EVENT, ESP_EVENT_ANY_ID, instance_any_id));
//     vEventGroupDelete(s_wifi_event_group);
// }

// static const char *TAGSensor = "DHT";
// char *hum = "";
// char *temp = "";

// void DHT_task(void *pvParameter)
// {
//     setDHTgpio(5);
//     ESP_LOGI(TAGSensor, "Starting DHT Task\n\n");

//     while (1)
//     {
//         ESP_LOGI(TAGSensor, "=== Reading DHT ===\n");
//         int ret = readDHT();

//         errorHandler(ret);

//         float humVal = getHumidity() / 10.0;
//         float tempVal = getTemperature() / 10.0;

//         ESP_LOGI(TAGSensor, "Hum: %.2f, Temp: %.2f\n", humVal, tempVal);

//         char humArray[15] = { "Hum: "};
//         sprintf(humArray, "%f", humVal);
//         hum = &humArray[0];

//         char tempArray[15] = { "Temp: "};
//         sprintf(tempArray, "%f", tempVal);
//         temp = &tempArray[0];

//         // -- wait at least 1 min before reading again ------------
//         // The interval of whole process must be beyond 2 seconds !!
//         vTaskDelay(60000 / portTICK_RATE_MS);
//     }
// }

// static void udp_client_task(void *pvParameters)
// {
//     char rx_buffer[128];
//     char host_ip[] = HOST_IP_ADDR;
//     int addr_family = 0;
//     int ip_protocol = 0;

//     while (1) {

//         struct sockaddr_in dest_addr;
//         dest_addr.sin_addr.s_addr = inet_addr(HOST_IP_ADDR);
//         dest_addr.sin_family = AF_INET;
//         dest_addr.sin_port = htons(PORT);
//         addr_family = AF_INET;
//         ip_protocol = IPPROTO_IP;

//         int sock = socket(addr_family, SOCK_DGRAM, ip_protocol);
//         if (sock < 0) {
//             ESP_LOGE(TAG, "Unable to create socket: errno %d", errno);
//             break;
//         }
//         ESP_LOGI(TAG, "Socket created, sending to %s:%d", HOST_IP_ADDR, PORT);

//         while (1) {

//             int err1 = sendto(sock, hum, strlen(hum), 0, (struct sockaddr *)&dest_addr, sizeof(dest_addr));
//             if (err1 < 0) {
//                 ESP_LOGE(TAG, "Error occurred during sending humidity: errno %d", errno);
//                 break;
//             }
//             ESP_LOGI(TAG, "Humidity sent");

//             int err2 = sendto(sock, temp, strlen(temp), 0, (struct sockaddr *)&dest_addr, sizeof(dest_addr));
//             if (err2 < 0) {
//                 ESP_LOGE(TAG, "Error occurred during sending temperature: errno %d", errno);
//                 break;
//             }
//             ESP_LOGI(TAG, "Temperature sent");

//             struct sockaddr_storage source_addr; // Large enough for both IPv4 or IPv6
//             socklen_t socklen = sizeof(source_addr);
//             int len = recvfrom(sock, rx_buffer, sizeof(rx_buffer) - 1, 0, (struct sockaddr *)&source_addr, &socklen);

//             // Error occurred during receiving
//             if (len < 0) {
//                 ESP_LOGE(TAG, "recvfrom failed: errno %d", errno);
//                 break;
//             }
//             // Data received
//             else {
//                 rx_buffer[len] = 0; // Null-terminate whatever we received and treat like a string
//                 ESP_LOGI(TAG, "Received %d bytes from %s:", len, host_ip);
//                 ESP_LOGI(TAG, "%s", rx_buffer);
//                 if (strncmp(rx_buffer, "OK: ", 4) == 0) {
//                     ESP_LOGI(TAG, "Received expected message, reconnecting");
//                     break;
//                 }
//             }

//             vTaskDelay(2000 / portTICK_PERIOD_MS);
//         }

//         if (sock != -1) {
//             ESP_LOGE(TAG, "Shutting down socket and restarting...");
//             shutdown(sock, 0);
//             close(sock);
//         }
//     }
//     vTaskDelete(NULL);
// }

// void app_main()
// {
//     //Initialize NVS
//     esp_err_t ret = nvs_flash_init();
//     if (ret == ESP_ERR_NVS_NO_FREE_PAGES)
//     {
//         ESP_ERROR_CHECK(nvs_flash_erase());
//         ret = nvs_flash_init();
//     }
//     ESP_ERROR_CHECK(ret);

//     ESP_LOGI(TAG, "ESP_WIFI_MODE_STA");
//     wifi_init_sta();

//     esp_log_level_set("*", ESP_LOG_INFO);

//     xTaskCreate(&DHT_task, "DHT_task", 2048, NULL, 5, NULL);
//     xTaskCreate(udp_client_task, "udp_client", 4096, NULL, 4, NULL);
// }
