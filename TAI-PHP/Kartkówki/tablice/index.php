<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kartkówka - Tablice</title>

    <style>
    table {
        border-collapse: collapse;
    }

    td {
        border: 1px solid black;
    }
    </style>
</head>

<body>
    <?php
// Zadanie 1 - wpełnić tablicę $zadania 10 wylosowanymi liczbami 3 cyfrowymi i wyświetlić w postaci tabeli
$zadania = [];
for ($i = 0; $i < 10; $i++) {
    $zadania[$i] = rand(100, 999);
}

echo "<table>";
echo "<tr>";
foreach ($zadania as $wartość) {
    echo "<td>$wartość</td>";
}
echo "</tr>";
echo "</table>";

// Wypisać min i max z tablicy $zadania
$tab_min = $zadania[0];
$tab_max = $zadania[0];
foreach ($zadania as $wartość) {
    if ($wartość < $tab_min) {
        $tab_min = $wartość;
    }
    if ($wartość > $tab_max) {
        $tab_max = $wartość;
    }
}
echo "Wartość minimalna - $tab_min </br>";
echo "Wartość maksymalna - $tab_max </br>";

// Stworzyć tablice asocjacyjną ZA POMOCĄ PĘTLI wypełnion kluczami z $klucze i wartościami z $zadania i wypisać j za pomocą funkcji słuącej do wyświetlania informacji o zmiennej
$klucze = array("jeden", "dwa", "trzy", "cztery", "pięć", "sześć", "siedem", "osiem", "dziewięć", "dziesięć");

$asocjacyjna = [];

for( $i = 0; $i < 10; $i++) {
    $asocjacyjna[$klucze[$i]] = $zadania[$i];
}
var_dump($asocjacyjna);
?>
</body>

</html>