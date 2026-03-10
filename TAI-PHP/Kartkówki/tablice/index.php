<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>Tablice PHP</h1>
    </header>
    <main>
        <!-- zadanie 1 -->
        <section class="zadanie">
            <div class="tresc">
                <div class="naglowek">
                    <h2>Zadanie 1</h2>
                </div>
                <div class="polecenie"> 
                    <p> Proszę stworzyć 10 elementową tablicę o nazwie <i><b>$zadania</b></i> i wypełnić ją liczbami trzycyfrowymi. 
                        Tablicę w postaci tabeli wyświetlić na ekranie
                    </p>
                </div>

            </div>
            <br>
            <div class="odp">
            Wygenerowana tablica:
            <?php
                //realizacja zadania 1 
                include "zadanie1.php";
            ?>
            </div>
        </section>
        <br>
         <!-- zadanie 2 -->
         <section class="zadanie">
            <div class="tresc">
                <div class="naglowek">
                    <h2>Zadanie 2</h2>
                </div>
                <div class="polecenie"> 
                    <p>
                        Proszę znaleźć najmniejszą i największą liczbę w tablicy 
                        z pierwszego zadania, tj. tablicy o nazwie <i><b>$zadania</b></i>
                        Do szukania wartości największej i najmniejszej 
                        nie wolno korzystać z funkcji wbudowanych języka PHP.
                        Przeglądanie pętli powinno być zrobione za pomocą pętli <i><b>foreach</b></i>.
                        Wyniki należy  wyświetlić na ekranie.
                    </p>
                </div>
            </div>
            <br>
            <div class="odp">
            Najmniejsza liczba  w tablicy z zadania1:
            <?php
                include "zadanie2a.php";
            ?>
            <br>Największa liczba  w tablicy z zadania1:
            <?php
                include "zadanie2b.php";
            ?>
            </div>
        </section>
        <br>
         <!-- zadanie 3 -->
         <section class="zadanie">
            <div class="tresc">
                <div class="naglowek">
                    <h2>Zadanie 3</h2>
                </div>
                <div class="polecenie"> 
                    <p>
                    Proszę utworzyć tablicę asocjacyjną o nazwie <i><b>$asocjacyjna</b></i> 
                    i wypełnić ją W PĘTLI, tak  aby kluczami były wartości 
                    z tablicy <i><b>$klucze</b></i>, zdefiniowanej w pliku  <i>zadanie3.php</i>, 
                    natomiast wartościami liczby z tablicy <i><b>$zadania</i></b>. 
                    Za pomocą funkcji PHP przeznaczonej do wyświetlania na ekranie informacji o typie i wartości  zmiennych 
                    należy wyświetlić tablicę na ekranie.
                    </p>
                </div>
            </div>
            <br>
            <div class="odp">
            
            <?php
                //realizacja zadania 3 
                include "zadanie3.php";
            ?>
            </div>
        </section>
    </main>
    
</body>
</html>