
<?php
$input=json_decode(file_get_contents("php://input"),true);

if (!array_key_exists("Location", $input)){
   echo ('Address is not set');
}
else{
	$address = $input['Location'];

if(array_key_exists("mintemp", $input) && array_key_exists("maxtemp", $input)){
	$mintemp = $input['mintemp'];
	$maxtemp = $input['maxtemp'];

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

   $sql = "UPDATE ecoswitch.admintemp SET MinTemp = '$mintemp', MaxTemp = '$maxtemp' WHERE Address = '$address'";

   if ($conn->query($sql) === TRUE) {
      echo "Admin Temp Range has been updated";
   } else {
      echo "Error: " . $sql . " => " . $conn->error;
      } 
   $conn->close();
} 
   elseif(array_key_exists("maxtemp", $input)) {
	$maxtemp = $input['maxtemp'];
	
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
   
      $sqlmax = "UPDATE ecoswitch.admintemp SET MaxTemp = '$maxtemp' WHERE Address = '$address'";;
   
      if ($conn->query($sqlmax) === TRUE) {
         echo "Max Temp for room has been updated";
      } else {
         echo "Error: " . $sqlmax . " => " . $conn->error;
         } 
      $conn->close();

      }elseif (array_key_exists("mintemp", $input)) {
	$mintemp = $input['mintemp'];
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
   
         $sqlmin = "UPDATE ecoswitch.admintemp SET MinTemp = '$mintemp' WHERE Address = '$address'";;
   
         if ($conn->query($sqlmin) === TRUE) {
            echo "Min Temp for room has been updated";
         }else{
            echo "Error: " . $sqlmin . " => " . $conn->error;
            } 
         $conn->close();
      }
         else{
            echo "temperature is not set";
         }
}
?>


