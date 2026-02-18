<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tablice - zadania</title>
</head>
<body>
    <?php 

    function czyPierwsza($n) {
        if ($n < 2) return false;
        if ($n == 2) return true;
        if ($n % 2 == 0) return false;

        for ($i = 3; $i <= sqrt($n); $i += 2) {
            if ($n % $i == 0) {
                return false;
            }
        }

    return true;
    }

    function nwd($a, $b) {
        while ($b != 0) {
            $temp = $b;
            $b = $a % $b;
            $a = $temp;
        }
        return $a;
    }
    echo "<h1>Tablice - zadania</h1>";

    function zadanie1() {
        echo"<br/><br/>";
        echo"<b>Zadanie 1</b><br/>";

        $tab1 = array("Tablica 1");
        $tab2 = ["Tablica 2"];
        $tab3[0] = "Tablica 3";

        var_dump($tab1);
        var_dump($tab2);
        var_dump($tab3);

        echo"<br/>";

        foreach( $tab1 as $v ) {
            echo $v . "<br>";
        }
        foreach( $tab2 as $v ) {
            echo $v . "<br>";
        }
        foreach( $tab3 as $v ) {
            echo $v . "<br>";
        }
    }
    zadanie1();

    function zadanie2() {
        echo"<br/><br/>";
        echo"<b>Zadanie 2</b><br/>";

        $napis = "programuję w języku PHP";
        $tab = explode(" ", $napis);

        var_dump($tab);
        echo"<br/>";
        
        echo"<br/>";
        echo"<b>Tablica od początku do końca:</b><br/>";
        foreach($tab as $v){
            echo $v . "<br>";
        };

        echo"<br/>";
        echo"<b>Tablica od końca do początku:</b><br/>";
        for($i = count($tab) - 1; $i >= 0; $i--) {
            echo $tab[$i] . "<br>";
        }

    }
    zadanie2();

    function zadanie3() {
    }
    zadanie3();

    function zadanie4() {
        echo"<br/><br/>";
        echo"<b>Zadanie 4</b><br/>";

        $min = 100;
        $max = 999;

        $tab = [];
        for($i = 0; $i < 10; $i++) {
            $tab[] = rand($min, $max);
        }

        var_dump($tab);
        echo"<br/>";

        foreach($tab as $v) {
            echo $v . "<br>";
        }

        echo "<br/>";

        $min = 0;
        $max = 0;

        $i = 0;
        $min = $tab[$i];
        $max = $tab[$i];
            
        foreach($tab as $v) {
            if($v < $min) {
                $min = $v;
            }
            if($v > $max) {
                $max = $v;
            }
        }

        $avg = 0;
                foreach($tab as $v) {
            $avg += $v;
        }
        $avg = $avg / count($tab);
        
        echo "Minimalna wartość: " . $min . "<br>";
        echo "Maksymalna wartość: " . $max . "<br>";
        echo "Średnia wartość: " . $avg . "<br>";

        

        return ["tablica" => $tab, "min" => $min, "max" => $max, "avg" => $avg];
    }
    $res = zadanie4();

    function zadanie5($tab) {
        echo"<br/><br/>";
        echo"<b>Zadanie 5</b><br/>";
        
        echo "<b>Liczby pierwsze:</b><br/>";

        $found = false;

        foreach ($tab as $v) {
            if (czyPierwsza($v)) {
                echo $v . "<br>";
                $found = true;
            }
        }

        if (!$found) {
            echo "Brak liczb pierwszych w tablicy.<br>";
        }
    }

    zadanie5($res["tablica"]);

    function zadanie6($data) {
        echo"<br/><br/>";
        echo"<b>Zadanie 6</b><br/>";

        $min = $data["min"];
        $max = $data["max"];

        $wynik = nwd($min, $max);

        echo "Min: $min <br>";
        echo "Max: $max <br>";
        echo "NWD(min, max): $wynik <br>";
    }

    zadanie6($res);
    
    ?>

        
</body>
</html>