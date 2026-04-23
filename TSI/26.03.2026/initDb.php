<?php
$conn = mysqli_connect("127.0.0.1:3306", "root", "rootpass123", "auto");

if (!$conn) {
    exit("Blad polaczenia z baza danych.");
}
?>
