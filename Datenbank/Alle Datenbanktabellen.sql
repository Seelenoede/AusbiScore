-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Erstellungszeit: 17. Sep 2020 um 08:30
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
  `Adresse` char(100) NOT NULL,
  `Ausbildungsstätte` char(100) NOT NULL,
  `Ausbildungsberuf` char(50) NOT NULL,
  `Ausbilder` char(50) NOT NULL,
  `Ausbildungszeitraum` char(100) NOT NULL,
  `ausbildende_Abteilung` char(50) NOT NULL,
  `UserName` char(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Daten für Tabelle `anmeldung`
--

INSERT INTO `anmeldung` (`UserID`, `Passwort`, `Vorname`, `Nachname`, `Geburtstag`, `Adresse`, `Ausbildungsstätte`, `Ausbildungsberuf`, `Ausbilder`, `Ausbildungszeitraum`, `ausbildende_Abteilung`, `UserName`) VALUES
(1, 'd404559f602eab6fd602ac7680dacbfaadd13630335e951f097af3900e9de176b6db28512f2e000b9d04fba5133e8b1c6e8df59db3a8ab9d60be4b97cc9e81db', 'Test', 'User', '2001-01-01', '', '', '0', '0', '0', '0', 'Testuser'),
(2, '887375daec62a9f02d32a63c9e14c7641a9a8a42e4fa8f6590eb928d9744b57bb5057a1d227e4d40ef911ac030590bbce2bfdb78103ff0b79094cee8425601f5', 'Admin', 'Admin', '9999-12-12', '', '', '0', '0', '0', '0', 'Admin'),
(3, '5adc61050db3e1f9e2935d88e5739ac218da4a53ef65fb398e303df7686a2ef425a676d69ff7f1a090e537e79df328214dfee2c885ece7c71f41f0f847d39ecd', 'Alexander', 'Haak', '0000-00-00', '', '', '0', '0', '0', '0', 'AlexH'),
(4, '6f0ac65fe01188660aad900bfe16c566ebf0e56c0a7d4a15bd831049108de80bd3a2fbf1a8b91662433a40458ec208a207cab073f190bd65b889e95e4fca8e09', 'Yamilka', 'Alvarez', '0000-00-00', '', '', '0', '0', '0', '0', 'YamilkaA'),
(5, '8262e2559049eb09af5dc637c6b1f8257b1f38349caf2f1c45d6dbbe2cd8acb07e56a740282320ea215b81ab4f5380a592aaf29529ec528ce165f9eb795ebb10', 'Paul-Meyer', 'Bussian', '0000-00-00', '', '', '0', '0', '0', '0', 'PaulMB'),
(6, 'e644d86de6d22696c171eaa8b325560a119e392adb4c0c232fae360b3e8f145593c2e16bf21e72b02f9e6d8dbc6cbed2aba7f45acfc684b96dd25a0507e7c3b1', 'Larissa', 'Kähl', '0000-00-00', '', '', '0', '0', '0', '0', 'LarissaK'),
(7, '307c8a9311ac6d988523a19cff8497c31c92c89809dda46875221c862cfef40e6d5860a6734b894d5d96be6c64beccb6c6ca2ce97e192efe4ab039d6cc71a631', 'Collin-Keanu', 'Reichl', '0000-00-00', '', '', '0', '0', '0', '0', 'Itachi');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `bericht`
--

CREATE TABLE `bericht` (
  `UserID` int(5) NOT NULL,
  `Datum` date NOT NULL,
  `Besonderes` char(200) NOT NULL,
  `Lernfeld` char(200) NOT NULL,
  `Stunden` char(100) NOT NULL,
  `Gesamte_Stunden` int(5) NOT NULL,
  `Eintrag` char(200) NOT NULL,
  `Tag` char(20) NOT NULL,
  `Ist_Vollständig` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `punktesystem`
--

CREATE TABLE `punktesystem` (
  `Gelernt` int(5) NOT NULL,
  `Anwendung` int(5) NOT NULL,
  `Kommunikation` int(5) NOT NULL,
  `Eigeninitiative` int(5) NOT NULL,
  `Motivation` int(5) NOT NULL,
  `Pünktlich` int(5) NOT NULL,
  `Täglich` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `score`
--

CREATE TABLE `score` (
  `Zielscore` int(5) NOT NULL,
  `Berichtsscore` int(5) NOT NULL,
  `Gesamtscore` int(5) NOT NULL,
  `Maxscore` int(5) NOT NULL,
  `Scored_Percent` int(5) NOT NULL,
  `Max_Percent` int(5) NOT NULL,
  `HighScore` int(5) NOT NULL,
  `BestScore` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `scoreboard`
--

CREATE TABLE `scoreboard` (
  `UserID` int(5) NOT NULL,
  `SVorname` char(20) NOT NULL,
  `SNachname` char(20) NOT NULL,
  `Highscore` int(5) NOT NULL,
  `Platz` int(5) NOT NULL,
  `Datum` date NOT NULL,
  `Weekly_Score` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `anmeldung`
--
ALTER TABLE `anmeldung`
  ADD PRIMARY KEY (`UserID`);

--
-- Indizes für die Tabelle `bericht`
--
ALTER TABLE `bericht`
  ADD PRIMARY KEY (`Datum`),
  ADD UNIQUE KEY `UserID` (`UserID`);

--
-- Indizes für die Tabelle `scoreboard`
--
ALTER TABLE `scoreboard`
  ADD PRIMARY KEY (`Weekly_Score`),
  ADD UNIQUE KEY `UserID` (`UserID`),
  ADD UNIQUE KEY `Datum` (`Datum`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
