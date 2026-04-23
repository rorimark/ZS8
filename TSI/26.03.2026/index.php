<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="style.css">
    <title>26.03.2026</title>
</head>
<body>
    <header>
        <h1>Kup dziś samochód!</h1>
    </header>
    <main>
        <?php include('./initDb.php'); ?>
        <section><img src="./samochod.png" alt="samochód"><br/><b>Witamy w naszym komisie. Mamy szeroki wybór aut</b></section>
        <section><h3>Lista dostępnych samochodów</h3>
            <ul><?php include("./avCars.php"); ?></ul></section>
        <section><h3>Dziś polecamy Toyotę</h3>
            <?php include("./ourSugg.php");?></section>
    </main>
    <footer>
        <p><a href="#">zapytania</a> Autor: Mark Storchovyi</p>
    </footer>
    <?php include('./closeDbConn.php'); ?>

</body>
</html>