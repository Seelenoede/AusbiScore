-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Erstellungszeit: 14. Sep 2020 um 12:10
-- Server-Version: 10.1.36-MariaDB
-- PHP-Version: 7.2.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Datenbank: `projekt ausbiscore`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `anmeldung`
--

CREATE TABLE `anmeldung` (
  `UserID` int(5) NOT NULL,
  `Passwort` varchar(10000) NOT NULL,
  `Vorname` char(20) NOT NULL,
  `Nachname` char(20) NOT NULL,
  `Geburtstag` date NOT NULL,
  `UserName` char(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Daten für Tabelle `anmeldung`
--

INSERT INTO `anmeldung` (`UserID`, `Passwort`, `Vorname`, `Nachname`, `Geburtstag`, `UserName`) VALUES
(1, 'd404559f602eab6fd602ac7680dacbfaadd13630335e951f097af3900e9de176b6db28512f2e000b9d04fba5133e8b1c6e8df59db3a8ab9d60be4b97cc9e81db', 'Test', 'User', '2001-01-01', 'Testuser');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `bericht`
--

CREATE TABLE `bericht` (
  `UserID` int(5) NOT NULL,
  `Datum` date NOT NULL,
  `DatVB` date NOT NULL,
  `Besonderes` char(200) NOT NULL,
  `Lernfeld` char(200) NOT NULL,
  `Stunden` char(10) NOT NULL,
  `Eintrag` char(200) NOT NULL,
  `Tag` char(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
