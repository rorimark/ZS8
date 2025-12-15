
CREATE DATABASE IF NOT EXISTS szkola DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_polish_ci;
USE szkola;

DROP TABLE IF EXISTS projekty;
DROP TABLE IF EXISTS uczniowie;
DROP TABLE IF EXISTS klasy;

CREATE TABLE klasy (
    id_klasy INT PRIMARY KEY AUTO_INCREMENT,
    nazwa VARCHAR(20),
    wychowawca VARCHAR(50)
) CHARACTER SET utf8mb4 COLLATE utf8mb4_polish_ci;

CREATE TABLE uczniowie (
    id_ucznia INT PRIMARY KEY AUTO_INCREMENT,
    imie VARCHAR(30),
    nazwisko VARCHAR(30),
    id_klasy INT,
    FOREIGN KEY (id_klasy) REFERENCES klasy(id_klasy)
) CHARACTER SET utf8mb4 COLLATE utf8mb4_polish_ci;

CREATE TABLE projekty (
    id_projektu INT PRIMARY KEY AUTO_INCREMENT,
    nazwa VARCHAR(50),
    id_ucznia INT,
    FOREIGN KEY (id_ucznia) REFERENCES uczniowie(id_ucznia)
) CHARACTER SET utf8mb4 COLLATE utf8mb4_polish_ci;

INSERT INTO klasy (nazwa, wychowawca) VALUES
('1A', 'Anna Nowak'),
('1B', 'Jan Kowalski'),
('2A', 'Ewa Wiśniewska'),
('2B', 'Marek Tomaszewski'),
('3A', 'Agnieszka Zielińska'),
('3B', 'Piotr Kaczmarek');

INSERT INTO uczniowie (imie, nazwisko, id_klasy) VALUES
('Kamil', 'Zieliński', 1),
('Ola', 'Nowak', 1),
('Marek', 'Kowalczyk', 2),
('Zosia', 'Mazur', 3),
('Bartek', 'Lewandowski', 2),
('Iga', 'Kubiak', 3),
('Tomek', 'Wiśniewski', 4),
('Paweł', 'Sikora', 4),
('Magda', 'Krawczyk', 5),
('Julia', 'Adamska', 5),
('Kuba', 'Wojciechowski', 1),
('Natalia', 'Lis', 2),
('Patryk', 'Ostrowski', 3),
('Karolina', 'Szymańska', 4),
('Adam', 'Piotrowski', 5),
('Ewelina', 'Dąbrowska', 6),
('Michał', 'Witkowski', 6),
('Damian', 'Król', 1),
('Justyna', 'Zając', 2),
('Filip', 'Grabowski', 3),
('Weronika', 'Pawlak', 4),
('Marta', 'Michalak', 5),
('Dominik', 'Czarnecki', 6),
('Aneta', 'Górska', 1),
('Robert', 'Majewski', 2),
('Mateusz', 'Sawicki', 3),
('Izabela', 'Domańska', 4),
('Emilia', 'Walczak', 5),
('Szymon', 'Baran', 6),
('Nina', 'Nowicka', 1);

INSERT INTO projekty (nazwa, id_ucznia) VALUES
('Strona WWW', 1),
('Baza danych', 3),
('Analiza danych', 5),
('Aplikacja mobilna', 7),
('Symulacja fizyczna', 9),
('Gra 2D', 10),
('Model sieci', 12),
('Program do rachunków', 15),
('System ocen', 2),
('Aplikacja pogodowa', 6),
('Sztuczna inteligencja', 8),
('Projekt ekologiczny', 14),
('Katalog książek', 16),
('Sieć neuronowa', 18),
('Analizator dźwięku', 19),
('Sklep internetowy', 20),
('Chat edukacyjny', NULL),
('Projekt sierocy', NULL),
('Analiza tekstu', NULL),
('Sterownik Arduino', NULL);

-- Przykład FULL OUTER JOIN (symulacja)
-- Pokaż wszystkich uczniów i projekty, także te bez dopasowania:
-- (można uruchomić w MySQL)
--
-- SELECT u.imie, u.nazwisko, p.nazwa AS projekt
-- FROM uczniowie u
-- LEFT JOIN projekty p ON u.id_ucznia = p.id_ucznia
-- UNION
-- SELECT u.imie, u.nazwisko, p.nazwa AS projekt
-- FROM uczniowie u
-- RIGHT JOIN projekty p ON u.id_ucznia = p.id_ucznia;
