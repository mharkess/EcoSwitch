
<?php
header('Content-Type: application/json; charset=UTF-8');
//header('Access-Control-Allow-Origin: *');
//header('Access-Control-Methods: GET');
//header('Access-Control-Allow-Headers: X-Requested-With');

if(isset($_GET["deviceID"])) {
   $deviceID = $_GET["deviceID"]; //gets deviceID value from HTTP GET

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

	$resultB = mysqli_query($conn, "SELECT * FROM ecoswitch.devicetemprecent WHERE DeviceID = $deviceID"); 
	?>
<?php		
	while($row = mysqli_fetch_array($resultB)){
		$dataArray -> DeviceID = $row['DeviceID']; 
		$dataArray -> Temp =   $row['RecentTemp'];
		$dataArray -> Humidity = $row['RecentHumidity'];
}
	$dataJSON = json_encode($dataArray);
	echo $dataJSON;
	$conn->close();
} else {
   echo "Device ID not set";
}
?>

