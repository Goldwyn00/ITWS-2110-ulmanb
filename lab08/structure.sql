-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 29, 2025 at 04:49 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `websyslab8`
--

-- --------------------------------------------------------

--
-- Table structure for table `courses`
--

CREATE TABLE `courses` (
  `crn` bigint(20) NOT NULL,
  `prefix` varchar(4) NOT NULL,
  `number` smallint(4) NOT NULL,
  `title` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `courses`
--

INSERT INTO `courses` (`crn`, `prefix`, `number`, `title`) VALUES
(10293578211, 'HASS', 4370, 'Advanced Juvenile Fiction Analysis'),
(28402839281, 'MATH', 6610, 'Advanced Addition'),
(49302092736, 'CSCI', 3920, 'Introduction to Looking things up on google'),
(64920182831, 'ITWS', 2000, 'Introduction to Restarting Your Computer');

-- --------------------------------------------------------

--
-- Table structure for table `grades`
--

CREATE TABLE `grades` (
  `id` int(11) NOT NULL,
  `crn` bigint(11) DEFAULT NULL,
  `rin` int(9) DEFAULT NULL,
  `grade` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `grades`
--

INSERT INTO `grades` (`id`, `crn`, `rin`, `grade`) VALUES
(1, 10293578211, 123456789, 97),
(2, 10293578211, 312398477, 75),
(3, 10293578211, 612986542, 99),
(4, 28402839281, 791230493, 88),
(5, 28402839281, 123456789, 77),
(6, 49302092736, 312398477, 100),
(7, 49302092736, 612986542, 74),
(8, 64920182831, 791230493, 70),
(9, 64920182831, 123456789, 91),
(10, 64920182831, 312398477, 71);

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `rin` int(9) NOT NULL,
  `rcsID` char(7) DEFAULT NULL,
  `first_name` varchar(100) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  `alias` varchar(100) NOT NULL,
  `phone` int(10) DEFAULT NULL,
  `street` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `zip` int(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`rin`, `rcsID`, `first_name`, `last_name`, `alias`, `phone`, `street`, `city`, `state`, `zip`) VALUES
(123456789, 'lowes', 'Steven', 'Lowe', 'Steve', 987234576, 'Duke', 'Americaville', 'Ohio', 1234),
(312398477, 'jenseng', 'Gabriella', 'Jensen', 'Gabriella', 2147483647, 'Carlton', 'Columbia', 'Kansas', 36478),
(612986542, 'mcguire', 'Elias', 'McGuire', 'Eli', 2147483647, 'Baker', 'Baleston', 'Colorado', 84572),
(791230493, 'dalem', 'Marilyn', 'Dale', 'Mary', 2147483647, 'Arlington', 'Davenport', 'Missouri', 17392);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `courses`
--
ALTER TABLE `courses`
  ADD PRIMARY KEY (`crn`);

--
-- Indexes for table `grades`
--
ALTER TABLE `grades`
  ADD PRIMARY KEY (`id`),
  ADD KEY `crn` (`crn`),
  ADD KEY `rin` (`rin`);

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`rin`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `grades`
--
ALTER TABLE `grades`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `grades`
--
ALTER TABLE `grades`
  ADD CONSTRAINT `grades_ibfk_1` FOREIGN KEY (`crn`) REFERENCES `courses` (`crn`),
  ADD CONSTRAINT `grades_ibfk_2` FOREIGN KEY (`rin`) REFERENCES `students` (`rin`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
