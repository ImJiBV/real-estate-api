-- MariaDB dump 10.19-11.3.2-MariaDB, for Win64 (AMD64)
--
-- Host: 127.0.0.1    Database: houselisting_dbase
-- ------------------------------------------------------
-- Server version	11.3.2-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `houselisting`
--

DROP TABLE IF EXISTS `houselisting`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `houselisting` (
  `hlNo` varchar(255) NOT NULL,
  `houseImage` varchar(255) NOT NULL,
  `houseName` varchar(255) NOT NULL,
  `totalCarCapacity` int(11) NOT NULL,
  `totalBaths` int(11) NOT NULL,
  `totalPax` int(11) NOT NULL,
  `createdAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  `deletedAt` datetime(6) DEFAULT NULL,
  PRIMARY KEY (`hlNo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `houselisting`
--

/*!40000 ALTER TABLE `houselisting` DISABLE KEYS */;
/*!40000 ALTER TABLE `houselisting` ENABLE KEYS */;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `userNo` varchar(255) NOT NULL,
  `roleNo` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `middleName` varchar(255) DEFAULT NULL,
  `lastName` varchar(255) NOT NULL,
  `password` longtext NOT NULL,
  `createdBy` varchar(255) NOT NULL,
  `updatedBy` varchar(255) DEFAULT NULL,
  `createdAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `deletedAt` datetime(6) DEFAULT NULL,
  PRIMARY KEY (`userNo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES
('UN-00001','RN-00001','Cicero_Johns70@gmail.com','Bertha',NULL,'Schultz','$2b$10$pmHceQUStG8hP2L.fL2A5u6BFf0TzaQPG0TDKI6tiEpJirywVt95C','UN-00001',NULL,'2024-11-13 03:17:45.066440','2024-11-13 03:17:45.066440',NULL),
('UN-00002','RN-00001','Daisha_Sanford@yahoo.com','Catalina',NULL,'Bins','$2b$10$MKcf2kvn1rcUCecNVH0F5u97Nn3bg/zKtBiuL.Deq0EUv4gRAJsxe','UN-00001',NULL,'2024-11-13 03:26:05.313213','2024-11-13 03:26:05.313213',NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;

--
-- Dumping routines for database 'houselisting_dbase'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-11-13 10:27:10
