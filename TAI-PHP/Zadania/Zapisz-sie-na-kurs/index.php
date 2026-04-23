<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<form action="" method="POST">
    <h1>Zapisz się na kurs IT</h1>
<table>
    <tr>
        <td><label for="name">Imię i nazwisko</label></td>
        <td><input type="text" name="name" id="name"></td>
    </tr>
    <tr>
        <td><label for="course">Imię i nazwisko</label></td>
        <td>
            <select id="course" name="course">
                <option value="php">Programowanie PHP (800 zł)</option>
                <option value="sql">Bazy danych SQL (600 zł)</option>
                <option value="network">Bezpieczeństwo sieci (1200 zł)</option>
            </select>
        </td>
    </tr>
    <tr>
        <td>Dodatki:</td>
    </tr>
    <tr>
        <td>
            <input type="checkbox" id="certification" name="certification">
            <label for="certification">Certyfikat imienny (150 zł)</label>
        </td>
    </tr>
    <tr>
        <td>
            <input type="checkbox" id="print-material" name="print-material">
            <label for="print-material">Materiały drukowane (50 zł)</label>
        </td>
    </tr>
    <tr>
        <td>
            <input type="checkbox" id="e-learning" name="e-learning">
            <label for="e-learning">Dostęp do e-learinngu (100 zł)</label>
        </td>
    </tr>
    <tr>
        <td>
            <label for="rabat">Kod rabatowy:</label>
        </td>
        <td>
            <input type="text" id="rabat" name="rabat">
        </td>
    </tr>
    <tr>
        <td>
            <input type="submit" value="Podsumuj zgłoszenie" id="submit">
        </td>
    </tr>
</table>
</form>

<?php

$name = 0;
$course = 0;
$certification = 0;
$printMaterial = 0;
$eLearning = 0;
$rabat = 0;

if(isset($_POST['name'])){
    $name = $_POST['name'];
}
if(isset($_POST['course'])){
    $course = $_POST['course'];
}
if (isset($_POST['certification'])) {
    $certification = $_POST['certification'];
}
if (isset($_POST['print-material'])) {
    $printMaterial = $_POST['print-material'];
}
if (isset($_POST['e-learning'])) {
    $eLearning = $_POST['e-learning'];
}
if (isset($_POST['rabat'])) {
    $rabat = $_POST['rabat'];
}

$tab = ["sdfg", 12345, "swdef"];
echo $name.$course.$certification.$printMaterial.$eLearning;
echo COuNt($tab);
?>

</body>
</html>