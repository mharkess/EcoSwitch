-- MariaDB dump 10.19  Distrib 10.5.15-MariaDB, for Win64 (AMD64)
--
-- Host: ecoswitch.ch2xtfqcrlc3.us-east-2.rds.amazonaws.com    Database: innodb
-- ------------------------------------------------------
-- Server version	10.5.13-MariaDB-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `innodb`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `innodb` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `innodb`;

--
-- Dumping routines for database 'innodb'
--

--
-- Current Database: `ecoswitchUsers`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `ecoswitchUsers` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `ecoswitchUsers`;

--
-- Table structure for table `StudentUsers`
--

DROP TABLE IF EXISTS `StudentUsers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `StudentUsers` (
  `Students` varchar(45) NOT NULL,
  `Address` varchar(45) DEFAULT NULL,
  `RoomNum` int(11) DEFAULT NULL,
  `DeviceID` int(11) DEFAULT 0,
  PRIMARY KEY (`Students`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `StudentUsers`
--

LOCK TABLES `StudentUsers` WRITE;
/*!40000 ALTER TABLE `StudentUsers` DISABLE KEYS */;
INSERT INTO `StudentUsers` VALUES ('asmith@bu.edu','25 Bay State Rd',106,73845),('bob@bu.edu','25 Bay State Rd',201,34926),('hsitu@bu.edu','67 Bay State Rd',204,24680),('john@bu.edu','25 Bay State Rd',103,16353),('kedeoliveira7@gmail.com','somewhere!',111,13579),('kevend@bu.edu','25 Bay State Rd',1,12345),('rbrown@bu.edu','305 Bay State Rd',103,93658),('rmc@bu.edu','107 Bay State Rd',201,23492),('Test1@bu.edu','Test1',101,NULL),('zwhite@bu.edu','25 Bay State Rd',106,73845);
/*!40000 ALTER TABLE `StudentUsers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'ecoswitchUsers'
--
/*!50003 DROP PROCEDURE IF EXISTS `addUser` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`admin`@`%` PROCEDURE `addUser`(IN `Addr` VARCHAR(45), IN `Room` INT(11), IN `student` VARCHAR(45) )
BEGIN
INSERT INTO ecoswitchUsers.StudentUsers (Students,Address,RoomNum) VALUES (student,Addr,room);
UPDATE 
    ecoswitchUsers.StudentUsers
SET DeviceID =
    (SELECT 
         DeviceID
     FROM 
         ecoswitch.devicetemprecent t
     WHERE 
         t.Address =  Addr
         AND t.RoomNum = Room)
WHERE Address = Addr AND RoomNum = Room;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Current Database: `tmp`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `tmp` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `tmp`;

--
-- Dumping routines for database 'tmp'
--

--
-- Current Database: `ecoswitch`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `ecoswitch` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `ecoswitch`;

--
-- Table structure for table `admintemp`
--

DROP TABLE IF EXISTS `admintemp`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `admintemp` (
  `Address` varchar(45) NOT NULL,
  `MinTemp` float DEFAULT 15.5,
  `MaxTemp` float DEFAULT 24.5,
  PRIMARY KEY (`Address`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admintemp`
--

LOCK TABLES `admintemp` WRITE;
/*!40000 ALTER TABLE `admintemp` DISABLE KEYS */;
INSERT INTO `admintemp` VALUES ('42 Bay State Rd',10,36),('530 Commonwealth Ave',20,23),('720 Commonwealth Ave',10,27);
/*!40000 ALTER TABLE `admintemp` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `devicetemprecent`
--

DROP TABLE IF EXISTS `devicetemprecent`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `devicetemprecent` (
  `DeviceID` int(11) NOT NULL,
  `RecentTemp` float DEFAULT NULL,
  `RecentHumidity` float DEFAULT NULL,
  `TargetTemp` float DEFAULT 22,
  `Address` varchar(45) DEFAULT NULL,
  `RoomNum` int(11) DEFAULT NULL,
  `AdminState` int(11) DEFAULT -1,
  PRIMARY KEY (`DeviceID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `devicetemprecent`
--

LOCK TABLES `devicetemprecent` WRITE;
/*!40000 ALTER TABLE `devicetemprecent` DISABLE KEYS */;
INSERT INTO `devicetemprecent` VALUES (5628,0,0,23,'123 Washington Ave',341,-1),(11111,0,0,23,'972 Washington St',201,-1),(12345,23.3,42.4,35,'25 Bay State Rd',105,-1),(12975,23.5,13.7,5,'602 Bay State Rd',101,-1),(13579,14.8,6.1,5,'57 Bay State Rd',102,-1),(16353,22,23.4,5,'25 Bay State Rd',103,-1),(16825,0,0,23,'W. Test Dr',756,-1),(23492,24.5,29.4,5,'107 Bay State Rd',201,-1),(24680,25.6,42.3,5,'67 Bay State Rd',204,-1),(34926,22,23.4,5,'25 Bay State Rd',201,-1),(45394,0,0,23,'395 Maple St.',357,-1),(46351,0,0,23,'E. Test Dr',164,-1),(49631,22,23.4,5,'25 Bay State Rd',204,-1),(69672,23.3,34.1,5,'234 Bay State Rd',203,-1),(73845,22,23.4,5,'25 Bay State Rd',106,-1),(93658,17.6,5.8,5,'305 Bay State Rd',103,-1),(94309,0,0,23,'Test Rd',390,-1),(789165,29.4,72.5,5,'45 Bay State Rd',202,-1);
/*!40000 ALTER TABLE `devicetemprecent` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `identification`
--

DROP TABLE IF EXISTS `identification`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `identification` (
  `DeviceID` int(11) NOT NULL,
  `Address` varchar(45) DEFAULT NULL,
  `RoomNum` int(11) DEFAULT NULL,
  PRIMARY KEY (`DeviceID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `identification`
--

LOCK TABLES `identification` WRITE;
/*!40000 ALTER TABLE `identification` DISABLE KEYS */;
INSERT INTO `identification` VALUES (12345,'530 Commonwealth Ave',432),(13579,'720 Commonwealth Ave',109),(24680,'42 Bay State Rd',203);
/*!40000 ALTER TABLE `identification` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `temphistory`
--

DROP TABLE IF EXISTS `temphistory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `temphistory` (
  `DeviceID` int(11) NOT NULL,
  `Temps` longtext DEFAULT '{}',
  PRIMARY KEY (`DeviceID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='Records history of temps/humidities of a room over a set period of time';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `temphistory`
--

LOCK TABLES `temphistory` WRITE;
/*!40000 ALTER TABLE `temphistory` DISABLE KEYS */;
INSERT INTO `temphistory` VALUES (5628,'{}'),(11111,'{}'),(12345,'{}'),(12975,'{}'),(13579,'{}'),(16825,'{}'),(23492,'{}'),(24680,'{}'),(45394,'{}'),(46351,'{}'),(69672,'{}'),(93658,'{}'),(94309,'{}'),(789165,'{}');
/*!40000 ALTER TABLE `temphistory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'ecoswitch'
--
/*!50003 DROP FUNCTION IF EXISTS `AddNewDevice` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`admin`@`%` FUNCTION `AddNewDevice`(`ID` INT, `Addres` VARCHAR(45), `Room` INT) RETURNS int(11)
    DETERMINISTIC
    SQL SECURITY INVOKER
    COMMENT 'Adds new device to database given DeviceID'
BEGIN
INSERT INTO ecoswitch.devicetemprecent
(DeviceID,RecentTemp,RecentHumidity,TargetTemp,Address,RoomNum)
VALUES(ID,0,0,23,Addres,Room);

INSERT INTO ecoswitch.temphistory
(DeviceID,Temps)
VALUES(ID,'{}');

RETURN(0);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP FUNCTION IF EXISTS `GenerateID` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`admin`@`%` FUNCTION `GenerateID`() RETURNS int(32)
    COMMENT 'Generates brand new Device ID from 100 - 1000000'
BEGIN

RETURN(SELECT FLOOR(RAND()*(1000000-100+1))+100);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP FUNCTION IF EXISTS `TempRecent_Call` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`admin`@`%` FUNCTION `TempRecent_Call`(`ID` INT(32)) RETURNS longtext CHARSET utf8mb4
    DETERMINISTIC
BEGIN
DECLARE F INT(32);
DECLARE G INT(32);
SELECT RecentTemp 
INTO F FROM devicetemprecent 
WHERE DeviceID = ID;

SELECT RecentHumidity
INTO G FROM devicetemprecent 
WHERE DeviceID = ID;

RETURN(JSON_OBJECT("Temp",F,"Humidity",G));
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP FUNCTION IF EXISTS `UpdateRecentTemp` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`admin`@`%` FUNCTION `UpdateRecentTemp`(`temp` FLOAT, `humid` FLOAT, `DevID` INT(32)) RETURNS int(11)
    DETERMINISTIC
    COMMENT 'Updates recent temp and humidity from device'
BEGIN
UPDATE ecoswitch.devicetemprecent
SET RecentTemp = temp, RecentHumidity = humid
WHERE DeviceID = DevID;

RETURN(0);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `AddDevice` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`admin`@`%` PROCEDURE `AddDevice`(`ID` INT, `Address` VARCHAR(45), `Room` INT)
BEGIN
INSERT INTO ecoswitch.devicetemprecent
(DeviceID,RecentTemp,RecentHumidity,TargetTemp,Address,RoomNum)
VALUES(ID,0,0,23,Address,Room);

INSERT INTO ecoswitch.temphistory
(DeviceID,Temps)
VALUES(ID,'{}');
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `DesiredRangeUpdate` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`admin`@`%` PROCEDURE `DesiredRangeUpdate`(IN `temp` INT(32), IN `ID` INT(32))
    MODIFIES SQL DATA
    SQL SECURITY INVOKER
    COMMENT 'Updates user''s desired temperature from app'
BEGIN
UPDATE ecoswitch.devicetemprecent
SET TargetTemp = temp
WHERE DeviceID = ID;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-29 15:25:49
