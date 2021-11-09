<html>
<head> <h1> Device Data Update Test </h1> <head>
<body>
<?php

if(isset($_GET["temperature"])) {
   $temperature = $_GET["temperature"]; // get temperature value from HTTP GET
   $humidity = $_GET["humidity"]; //gets humidity value from HTTP GET
   $deviceID = $_GET["deviceID"]; //gets deviceID value from HTTP GET

   $servername = "127.0.0.1";
   $username = "admin";
   $password = "**********";
   $dbname = "ecoswitch";

   // Create connection
   $conn = new mysqli($servername, $username, $password, $dbname);
   // Check connection
   if ($conn->connect_error) {
      die("Connection failed: " . $conn->connect_error);
   }

   $sql = "UPDATE ecoswitch.devicetemprecent SET RecentTemp = $temperature,RecentHumidity = $humidity WHERE DeviceID = $deviceID";

   if ($conn->query($sql) === TRUE) {
      echo "New record created successfully";
   } else {
      echo "Error: " . $sql . " => " . $conn->error;
   }

   $conn->close();
} else {
   echo "temperature is not set";
}
?>
</body>
</html>
