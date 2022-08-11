-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Aug 10, 2022 at 11:37 AM
-- Server version: 10.1.9-MariaDB
-- PHP Version: 5.6.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `yamaha_makan`
--

-- --------------------------------------------------------

--
-- Table structure for table `m_admin`
--

CREATE TABLE `m_admin` (
  `ID_admin` int(11) NOT NULL,
  `NamaAdmin` varchar(255) DEFAULT NULL,
  `UserAdmin` varchar(255) DEFAULT NULL,
  `PassAdmin` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `m_admin`
--

INSERT INTO `m_admin` (`ID_admin`, `NamaAdmin`, `UserAdmin`, `PassAdmin`) VALUES
(1, 'administrator', 'admin', '90b9aa7e25f80cf4f64e990b78a9fc5ebd6cecad');

-- --------------------------------------------------------

--
-- Table structure for table `m_karyawan`
--

CREATE TABLE `m_karyawan` (
  `ID_Karyawan` int(11) NOT NULL,
  `NikKaryawan` varchar(255) DEFAULT NULL,
  `NamaKaryawan` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `m_karyawan`
--

INSERT INTO `m_karyawan` (`ID_Karyawan`, `NikKaryawan`, `NamaKaryawan`) VALUES
(1, '12345', 'sudirman'),
(2, '23456', 'cahyono'),
(3, '34567', 'supri'),
(4, '45678', 'citra'),
(5, '56789', 'mahmudi');

-- --------------------------------------------------------

--
-- Table structure for table `m_makan_masuk`
--

CREATE TABLE `m_makan_masuk` (
  `ID_Makan` int(11) NOT NULL,
  `ID_Karyawan` int(11) DEFAULT NULL,
  `NoInputMakan` varchar(100) DEFAULT NULL,
  `TglMakan` varchar(255) DEFAULT NULL,
  `JenisMakan` varchar(255) DEFAULT NULL,
  `JumlahMakan` varchar(255) DEFAULT NULL,
  `NamaSupplier` varchar(255) DEFAULT NULL,
  `Keperluan` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `m_makan_masuk`
--

INSERT INTO `m_makan_masuk` (`ID_Makan`, `ID_Karyawan`, `NoInputMakan`, `TglMakan`, `JenisMakan`, `JumlahMakan`, `NamaSupplier`, `Keperluan`) VALUES
(1, 12345, 'MKN-220810075648', '2022-08-10', 'fsa', 'sf                    ', 'sf', 'sf'),
(2, 23456, 'MKN-220810080406', '2022-08-10', 'fadsf', 'sfa                    ', 'sdgf', 'sdf'),
(3, 23456, 'MKN-220810080710', '2022-08-10', 'gdsg', 'sgs                    ', 'sdg', 'sdg'),
(4, 12345, 'MKN-220810113326', '2022-08-10', 'pecel', '30 pesanan                    ', 'ahmadi', 'catring');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `m_admin`
--
ALTER TABLE `m_admin`
  ADD PRIMARY KEY (`ID_admin`);

--
-- Indexes for table `m_karyawan`
--
ALTER TABLE `m_karyawan`
  ADD PRIMARY KEY (`ID_Karyawan`) USING BTREE;

--
-- Indexes for table `m_makan_masuk`
--
ALTER TABLE `m_makan_masuk`
  ADD PRIMARY KEY (`ID_Makan`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `m_admin`
--
ALTER TABLE `m_admin`
  MODIFY `ID_admin` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `m_karyawan`
--
ALTER TABLE `m_karyawan`
  MODIFY `ID_Karyawan` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `m_makan_masuk`
--
ALTER TABLE `m_makan_masuk`
  MODIFY `ID_Makan` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
