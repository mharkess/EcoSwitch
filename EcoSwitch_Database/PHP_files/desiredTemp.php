<?php header('Content-Type: application/json');   
$test= json_decode(file_get_contents("php://input"),true); 
$devID = $test['deviceID']; 
$address = $test['desiredTemp'];
$servername = "ecoswitch.ch2xtfqcrlc3.us-east-2.rds.amazonaws.com";
$username = "admin";
$password = "Password12";
$dbname = "ecoswitch";

 // Create connection
   $conn = new mysqli($servername, $username, $password, $dbname);
   // Check connection
   if ($conn->connect_error) {
      die("Connection failed: " . $conn->connect_error);
   }

   $sql = "UPDATE ecoswitch.devicetemprecent SET TargetTemp = '$address' WHERE DeviceID = '$devID'";   
if ($conn->query($sql) === TRUE) {
      echo "User Preference updated";
   } else {
      echo "Error: " . $sql . " => " . $conn->error;
   } 
   $conn->close();

?>
