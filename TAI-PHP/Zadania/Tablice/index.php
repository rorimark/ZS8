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

    // Funkcje pomocnicze
    function czyPierwsza($n) {
        if ($n < 2) return false;
        if ($n == 2) return true;
        if ($n % 2 == 0) return false;
        for ($i = 3; $i <= sqrt($n); $i += 2) {
            if ($n % $i == 0) return false;
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

    // Stałe dla zadania 4
    define('MIN_RAND', 100);
    define('MAX_RAND', 999);

    echo "<h1>Tablice - zadania</h1>";

    // ZADANIE 1
    function zadanie1() {
        echo "<br/><br/><b>Zadanie 1</b><br/>";
        $tab1 = array("Tablica 1");
        $tab2 = ["Tablica 2"];
        $tab3[0] = "Tablica 3";
        var_dump($tab1);
        var_dump($tab2);
        var_dump($tab3);
        echo "<br/>";
        foreach( $tab1 as $v ) echo $v . "<br>";
        foreach( $tab2 as $v ) echo $v . "<br>";
        foreach( $tab3 as $v ) echo $v . "<br>";
    }

    // ZADANIE 2
    function zadanie2() {
        echo "<br/><br/><b>Zadanie 2</b><br/>";
        $napis = "programuję w języku PHP";
        $tab = explode(" ", $napis);
        var_dump($tab);
        echo "<br/><br/><b>Tablica od początku do końca:</b><br/>";
        foreach($tab as $v) echo $v . "<br>";
        echo "<br/><b>Tablica od końca do początku:</b><br/>";
        for($i = count($tab) - 1; $i >= 0; $i--) echo $tab[$i] . "<br>";
    }

    // ZADANIE 3
    function zadanie3() {
        echo "<br/><br/><b>Zadanie 3</b><br/>";
        echo "Największa liczba do wylosowania: " . MAX_RAND . "<br>";
    }

    // ZADANIE 4
    function zadanie4() {
        echo "<br/><br/><b>Zadanie 4</b><br/>";
        $tab = [];
        for($i = 0; $i < 10; $i++) {
            $tab[] = rand(MIN_RAND, MAX_RAND);
        }
        var_dump($tab);
        echo "<br/>";
        foreach($tab as $v) echo $v . "<br>";
        echo "<br/>";

        $min = $tab[0];
        $max = $tab[0];
        foreach($tab as $v) {
            if($v < $min) $min = $v;
            if($v > $max) $max = $v;
        }
        $avg = array_sum($tab) / count($tab);

        echo "Minimalna wartość: " . $min . "<br>";
        echo "Maksymalna wartość: " . $max . "<br>";
        echo "Średnia wartość: " . $avg . "<br>";

        return ["max_rand" => MAX_RAND, "tablica" => $tab, "min" => $min, "max" => $max, "avg" => $avg];
    }

    // ZADANIE 5
    function zadanie5($tab) {
        echo "<br/><br/><b>Zadanie 5</b><br/>";
        echo "<b>Liczby pierwsze:</b><br/>";
        $found = false;
        foreach ($tab as $v) {
            if (czyPierwsza($v)) {
                echo $v . "<br>";
                $found = true;
            }
        }
        if (!$found) echo "Brak liczb pierwszych w tablicy.<br>";
    }

    // ZADANIE 6
    function zadanie6($data) {
        echo "<br/><br/><b>Zadanie 6</b><br/>";
        $min = $data["min"];
        $max = $data["max"];
        $wynik = nwd($min, $max);
        echo "Min: $min <br>";
        echo "Max: $max <br>";
        echo "NWD(min, max): $wynik <br>";
    }

    // ZADANIE 7
    function zadanie7() {
        echo "<br/><br/><b>Zadanie 7</b><br/>";
        $min = 10;
        $max = 99;
        $dane = [];
        for ($i = 1; $i <= 5; $i++) {
            $wiersz = [];
            for ($j = 0; $j < 5; $j++) {
                $wiersz[] = "<td>" . rand($min, $max) . "</td>";
            }
            $dane["wiersz$i"] = $wiersz;
        }
        echo "<table>";
        echo "<tr><th></th><th>Kolumna 1</th><th>Kolumna 2</th><th>Kolumna 3</th><th>Kolumna 4</th><th>Kolumna 5</th></tr>";
        for ($i = 1; $i <= 5; $i++) {
            echo "<tr>";
            echo "<th>Wiersz $i</th>";
            foreach ($dane["wiersz$i"] as $td) echo $td;
            echo "</tr>";
        }
        echo "</table>";
        return $dane;
    }

    // ZADANIE 8
    function zadanie8(){
        echo "<br/><br/><b>Zadanie 8</b><br/>";
        global $zad7;
        $age = 19;
        $age_count = 0;
        $min_value = null;
        $min_row = null;
        $max_value = null;
        $max_col = null;
        $total_sum = 0;
        $total_count = 0;
        $even_counts = [0, 0, 0, 0, 0];
        $row_sums = [];

        foreach($zad7 as $row_key => $row_data) {
            $row_sum = 0;
            $col_index = 1;
            foreach($row_data as $col => $cell) {
                $num = strip_tags($cell);
                if ($num == $age) $age_count++;
                if ($min_value === null || $num < $min_value) {
                    $min_value = $num;
                    $min_row = $row_key;
                }
                if ($num > $max_value) {
                    $max_value = $num;
                    $max_col = $col_index;
                }
                if ($num % 2 == 0) $even_counts[$col]++;
                $row_sum += $num;
                $total_sum += $num;
                $total_count++;
                $col_index++;
            }
            $row_sums[$row_key] = $row_sum;
        }

        $avg_total = $total_sum / $total_count;

        $max_avg_row = null;
        $max_avg_value = 0;
        foreach ($row_sums as $row_key => $row_sum) {
            $row_avg = $row_sum / 5;
            if ($row_avg > $max_avg_value) {
                $max_avg_value = $row_avg;
                $max_avg_row = $row_key;
            }
        }

        $greater_than_avg_count = 0;
        foreach($zad7 as $row_data) {
            foreach($row_data as $cell) {
                $num = strip_tags($cell);
                if ($num > $avg_total) $greater_than_avg_count++;
            }
        }

        $max_even = max($even_counts);
        if ($max_even == 0) {
            $max_even_info = "W tabeli nie ma liczb parzystych";
        } else {
            $max_even_col = array_search($max_even, $even_counts) + 1;
            $max_even_info = "Kolumna $max_even_col (liczba parzystych: $max_even)";
        }

        echo "<ul>";
            echo "<li>Liczba wystąpień wieku $age w tabeli: $age_count</li>";
            echo "<li>Wartość minimalna: $min_value (w wierszu $min_row)</li>";
            echo "<li>Wartość maksymalna: $max_value (w kolumnie $max_col)</li>";
            echo "<li>Największa średnia wartość znajduje się w wierszu: $max_avg_row (wynosi - $max_avg_value)</li>";
            echo "<li>Średnia liczb w tabeli: $avg_total</li>";
            echo "<li>Ilość liczb większych od średniej: $greater_than_avg_count</li>";
            echo "<li>Kolumna w której znajduje się najwięcej liczb parzystych: $max_even_info</li>";
        echo "</ul>";
    }

    function zadanie10(){
        echo "<br/><br/><b>Zadanie 10</b><br/>";

        $arr_sum = 0;
        $arr_avg = 0;
        $arr_min = 0;
        $arr_max = 0;

        $arr = [];
        $arr_length = 0;
        
        for ($i = 0; $i < 10; $i++) {
          $arr[$i] = rand(10,99);
        }
        
        foreach($arr as $value) {
            $arr_sum += $value; 
            $arr_length++;
            if ($arr_min == 0 || $value < $arr_min) $arr_min = $value;
            if ($arr_max == 0 || $value > $arr_max) $arr_max = $value;
        }

        $arr_avg = $arr_sum / $arr_length;
    
        var_dump($arr);
        echo "</br> Suma wylosowanych liczb: ". $arr_sum;
        echo " </br> Średnia wylosowanych liczb: ". $arr_avg;
        echo "</br> Najmniejsza z wylosowanych liczb: ". $arr_min;
        echo " </br> Największa z wylosowanych liczb: ". $arr_max;

    }

    function zadanie11(){
        echo "<br/><br/><b>Zadanie 11</b><br/>";

        $names = ["Mark", "Ola", "Marcin", "Ela", "Piotr"];

        echo "Imiona: <br/>";
        $i = 1;
        foreach($names as $name) {
            echo "$i: ". $name ."<br/>";
            $i++;
            if($i == count($names)+1) {
                $i=1;
            }
        }
        
        echo "<br/>Imiona wielkimi: <br/>";
        foreach($names as $name) {
            echo "$i: ". strtoupper($name) ."<br/>";
            $i++;
            if($i == count($names)+1) {
                $i=1;
            }
        }
        
        echo "<br/>Imiona małymi: <br/>";
        foreach($names as $name) {
            echo "$i: ". strtolower($name) ."<br/>";
            $i++;
            if($i == count($names)+1) {
                $i=1;
            }
        }
    }

    // WYWOŁANIA ZADAŃ
    zadanie1();
    zadanie2();
    zadanie3();
    $res = zadanie4();
    zadanie5($res["tablica"]);
    zadanie6($res);
    ?>

    <div class="table">
        <div>
            <?php $zad7 = zadanie7(); ?>
        </div>
        <div>
            <?php zadanie8(); ?>
        </div>
    </div>

    <?php 
        zadanie10(); 
        zadanie11(); 

    ?>

</body>

</html>