<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
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



    function zadanie4() {
        echo"<br/><br/>";
        echo"<b>Zadanie 4</b><br/>";

        $min_rand = 100;
        $max_rand = 999;

        $tab = [];
        for($i = 0; $i < 10; $i++) {
            $tab[] = rand($min_rand, $max_rand);
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

        

        return ["max_rand" => $max_rand, "tablica" => $tab, "min" => $min, "max" => $max, "avg" => $avg];
    }
    $res = zadanie4();

        function zadanie3() {
        global $res;
        $max_rand = $res["max_rand"];
        echo"<br/><br/>";
        echo"<b>Zadanie 3</b><br/>";
        echo "Największa liczba do wylosowania: " .  $max_rand . "<br>";
    }
    zadanie3();
   

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

    function zadanie7() {
        echo"<br/><br/>";
        echo"<b>Zadanie 7</b><br/>";

        $min = 10;
        $max = 99;
    
        $wiersz1 = [];
        for($i = 0; $i < 5; $i++) {
            $wiersz1[$i] = "<td>".rand($min, $max)."</td>";
        };

        $wiersz2 = [];
        for($i = 0; $i < 5; $i++) {
            $wiersz2[$i] = "<td>".rand($min, $max)."</td>";
        };

        $wiersz3 = [];
        for($i = 0; $i < 5; $i++) {
            $wiersz3[$i] = "<td>".rand($min, $max)."</td>";
        };

        $wiersz4 = []; 
        for($i = 0; $i < 5; $i++) {
            $wiersz4[$i] = "<td>".rand($min, $max)."</td>";
        };  

        $wiersz5 = [];
        for($i = 0; $i < 5; $i++) { 
            $wiersz5[$i] = "<td>".rand($min, $max)."</td>";
        };



        echo "<table>";
        echo "<tr><th></th><th>Kolumna 1</th><th>Kolumna 2</th><th>Kolumna 3</th><th>Kolumna 4</th><th>Kolumna 5</th></tr>";
        echo "<tr>";
            echo "<td>Wiersz 1</td>";
            foreach($wiersz1 as $td) {
                echo $td;
            }
        echo "</tr>";
        echo "<tr>";
            echo "<td>Wiersz 2</td>";
            foreach($wiersz2 as $td) {
                echo $td;
            }
        echo "</tr>";
        echo "<tr>";
            echo "<td>Wiersz 3</td>";
            foreach($wiersz3 as $td) {
                echo $td;
            }
        echo "</tr>";
        echo "<tr>";
            echo "<td>Wiersz 4</td>";
            foreach($wiersz4 as $td) {
                echo $td;
            }
        echo "</tr>";
        echo "<tr>";
            echo "<td>Wiersz 5</td>";
            foreach($wiersz5 as $td) {
                echo $td;
            }
        echo "</tr>";
        echo "</table>";

        return ["wiersz1" => $wiersz1, "wiersz2" => $wiersz2, "wiersz3" => $wiersz3, "wiersz4" => $wiersz4];
    }

    function zadanie8(){
        echo"<br/><br/>";
        echo"<b>Zadanie 8</b><br/>";

        global $zad7;
        // Do tabeli z poprzedniego zadania:
        // a) Podaj ile razy w tabeli pojawiła się liczba odpowiadająca Twojemu wiekowi
        // b) Podaj wiersz, w którym znajduje się wartość najmniejsza oraz tą wartość
        // c) Podaj kolumnę, w której znajduje się wartość największa oraz tą wartość
        // d) Podaj wiersz, w którym średnia liczb jest największa
        // e) Podaj średnią liczb w tabeli
        // f) Podaj ile razy w tabeli pojawiła się liczba większa od średniej
        // g) Podaj kolumnę, w której znajduje się najwięcej liczb parzystych (lub informację, że w tabeli w ogóle nie ma liczb parzystych)
        // Odpowiedzi do podpunktów umieść w liście punktowanej, gdzie każdemu punktowi listy odpowiada właściwy podpunkt zadania.
        // Listę umieść w panelu prawym obok wyświetlonej tabeli.Autor: Małogrzata Tokarek

        $wiek_qty = 0; // a
        $min_value = 0; //b
        $min_value_row = 0; //b
        $max_value = 0; //c
        $max_value_col = 0; //c
        $max_avg_row = 0; //d
        $avg_value = 0; //e
        $greater_than_avg_qty = 0; //f
        $max_even_qty = 0; //g

        $td_qty = 0;
        $full_value = 0;

        $max_avg = 0; //d

        $greater_than_avg = 0;

    foreach($zad7 as $td_key => $td_value) {
        $row_avg_helper = 0;
        
        $col = 1;
        foreach($td_value as $v) {
            $num = strip_tags($v);
            if ($num == 19) { // a
                $wiek_qty++;
            }

            if ($min_value == 0 || $num < $min_value) { // b
                $min_value = $num;
                $min_value_row = "$td_key";
            }

            if ($num > $max_value) { // c
                $max_value = $num;
                $max_value_col = $col;
            }

            $row_avg_helper += $num;


            $col++;

            $td_qty++;
            $full_value += $num; // e

        }

        $row_avg_helper = $row_avg_helper / 5;
        if ($row_avg_helper > $max_avg) { 
            $max_avg = $row_avg_helper;
            $max_avg_row = $td_key;
        }
    }

    $avg_value = $full_value / $td_qty; // e

    foreach($zad7 as $td_key => $td_value) {
        foreach($td_value as $v) {
            $num = strip_tags($v);
            if ($num > $avg_value){
                $greater_than_avg_qty++; // f
            }
          }
    }


    echo "<ul>";
        echo "<li>Liczba wystąpień wieku 19 w tabeli: $wiek_qty</li>";
        echo "<li>Wartość minimalna: $min_value (w wierszu $min_value_row)</li>";
        echo "<li>Wartość maksymalna: $max_value (w kolumnie $max_value_col)</li>";
        echo "<li>Największa średnia wartość znajduje się w wierszu: $max_avg_row (wynosi - $max_avg)</li>";
        echo "<li>Średnia liczb w tabeli: $avg_value</li>";
        echo "<li>Ilość liczb większych od średniej: $greater_than_avg_qty</li>";
        echo "<li>Kolumna w której znajduje się najwięcej liczb parzystych: $max_even_qty</li>";
    echo "</ul>";

    }

    echo "<div class=table>";
        echo "<div>";
            $zad7 = zadanie7();
        echo "</div>";
        echo "<div>";
            zadanie8();
        echo "</div>";
    echo "</div>";


    
    ?>

        
</body>
</html>