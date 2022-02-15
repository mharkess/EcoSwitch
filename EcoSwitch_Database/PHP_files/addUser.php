<?php
header('Content-Type: application/json');

$test= json_decode(file_get_contents("php://input"),true);
$email = $test['Email'];
$address = $test['Location'];
$room = $test['RoomNumber'];

$servername = "ecoswitch.ch2xtfqcrlc3.us-east-2.rds.amazonaws.com";
$username = "admin";
$password = "Password12";
$dbname = "ecoswitchUsers";

 // Create connection
   $conn = new mysqli($servername, $username, $password, $dbname);
   // Check connection
   if ($conn->connect_error) {
      die("Connection failed: " . $conn->connect_error);
   }

   $sql = "INSERT INTO ecoswitchUsers.StudentUsers (Students,Address,RoomNum) VALUES ('$email','$address','$room')";   
if ($conn->query($sql) === TRUE) {
      echo "Userlist updated";
   } else {
      echo "Error: " . $sql . " => " . $conn->error;
   } 
   $conn->close();

?>
