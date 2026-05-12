-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 12 Lis 2024, 15:58
-- Wersja serwera: 10.4.24-MariaDB
-- Wersja PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `koty`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `koty`
--

CREATE TABLE `koty` (
  `id` int(11) NOT NULL,
  `imie` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `wiek` int(2) NOT NULL,
  `zdjecie` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Zrzut danych tabeli `koty`
--

INSERT INTO `koty` (`id`, `imie`, `wiek`, `zdjecie`) VALUES
(1, 'Silver', 7, 'z1'),
(2, 'Kitty', 1, 'z2'),
(3, 'Filemon', 12, 'z3'),
(4, 'Kawosz', 8, 'z4'),
(5, 'Mruczek', 13, 'z5'),
(6, 'Jimmy', 1, 'z6'),
(7, 'Luna', 14, 'z7'),
(8, 'Ginger', 1, 'z8');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `koty`
--
ALTER TABLE `koty`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT dla zrzuconych tabel
--

--
-- AUTO_INCREMENT dla tabeli `koty`
--
ALTER TABLE `koty`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
