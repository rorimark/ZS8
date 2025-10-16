<?php
    $conn = new mysqli(hostname: "localhost",username: "root",password: "",database: "piekarnia");
?>

<!DOCTYPE html>
<html lang="pl">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>PIEKARNIA</title>
        <link rel="stylesheet" href="styles.css">
<style>
* {
    font-family: 'Verdana';
}

body {
    background: linear-gradient(Teal, AliceBlue);
    color: white;
    text-align: center;
    margin-left: 20px;
    margin-right: 20px;
}

img {
    width: 100%;
    display: block;
    position: fixed;
    top: 70px;
    z-index: -1;
}

a {
    font-size: 130%;
    padding: 30px;
    color: white;
}

header {
    background-color: rgba(160,82,45,0.6);
    padding: 10px;
    margin-top: 100px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
}

main {
    background-color: SandyBrown;
    padding: 30px;
}

footer {
    background-color: Sienna;
    padding: 30px;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
}

h1 {
    text-shadow: 2px 2px 5px #000;
}

table {
    margin: auto;
    width: 70%;
    background-color: Sienna;
}

table,td {
    border: 1px solid SandyBrown;
    border-collapse: collapse;
}
</style>
    </head>
    <body>
        <img src="wypieki.png" alt="Produkty naszej piekarni">
        <nav>
            <a href="kw1.png">KWERENDA1</a>
            <a href="kw2.png">KWERENDA2</a>
            <a href="kw3.png">KWERENDA3</a>
            <a href="kw4.png">KWERENDA4</a>
        </nav>

        <header>
            <h1>WITAMY</h1>
            <h4>NA STRONIE PIEKARNI</h4>
            <p>Od 31 lat oferujemy najwyższej jakości pieczywo. Naturalnie świeże, naturalnie smaczne. Pieczemy wyłącznie wypieki na naturalnym zakwasie bez polepszaczy i zagęstników. Korzystamy wyłącznie z najlepszych ziaren pochodzących z ekologicznych upraw położonych w rejonach zgierskim i ozorkowskim.</p>
        </header>

        <main>
            <h4>Wybierz rodzaj wypieków:</h4>
            <form action="piekarnia.php" method="post">
                <select name="rodzaj" id="rodzaj">
                    <?php
                        // Skrypt #1
                        $sql = "SELECT DISTINCT Rodzaj FROM wyroby ORDER BY Rodzaj DESC;";
                        $result = $conn->query($sql);
                        while($row = $result->fetch_assoc()) {
                            echo "<option value='" . $row["Rodzaj"] . "'>" . $row["Rodzaj"] . "</option>";
                        }
                    ?>
                </select>
                <input type="submit" value="Wybierz">
            </form>
            <table>
                <tr>
                    <th>Rodzaj</th>
                    <th>Nazwa</th>
                    <th>Gramatura</th>
                    <th>Cena</th>
                </tr>
                <?php
                    // Skrypt #2
                    if(isset($_POST["rodzaj"])) {
                        $rodzaj = $_POST['rodzaj'];
                        $sql = "SELECT Rodzaj, Nazwa, Gramatura, Cena FROM wyroby WHERE Rodzaj = '$rodzaj';";
                        $result = $conn->query($sql);
                        while($row = $result->fetch_assoc()) {
                            echo "<tr>";
                                echo "<td>" . $row["Rodzaj"] . "</td>";
                                echo "<td>" . $row["Nazwa"] . "</td>";
                                echo "<td>" . $row["Gramatura"] . "</td>";
                                echo "<td>" . $row["Cena"] . "</td>";
                            echo "</tr>";
                        }
                    }
                ?>
            </table>
        </main>

        <footer>
            <p>AUTOR: <a href="https://ee-informatyk.pl/" target="_blank" style="text-decoration: none;color: unset;">EE-INFORMATYK.PL</a></p>
            <p>Data: 18.04.2025</p>
        </footer>
    </body>
</html>

<?php

?>