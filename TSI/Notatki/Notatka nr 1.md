# Notatka nr 1 - Witryny

## Spis treści
1. [Struktura dokumentu HTML](#struktura-dokumentu-html)
2. [Tekst i semantyka](#tekst-i-semantyka)
3. [Listy](#listy)
4. [Tabele](#tabele)
5. [Obrazy i mapy obrazkowe](#obrazy-i-mapy-obrazkowe)
6. [Elementy przestarzałe](#elementy-przestarzałe)
7. [Semantyczne tagi HTML5](#semantyczne-tagi-html5)

---

## Struktura dokumentu HTML

```html
<!DOCTYPE html>
<html lang="pl">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Tytuł strony</title>
  </head>
  <body>
    <!-- Zawartość -->
  </body>
</html>
```

- `<!DOCTYPE html>` – deklaruje HTML5.  
- `<html lang="pl">` – język dokumentu.  
- `<meta charset="utf-8">` – kodowanie znaków.  
- `<meta name="viewport">` – responsywność na urządzeniach mobilnych.  
- `<title>` – tytuł zakładki przeglądarki.  

---

## Tekst i semantyka

- Nagłówki: `<h1>` ... `<h6>` – używane hierarchicznie (najważniejszy `<h1>`).  
- Akapit: `<p>...</p>`.  
- Złamanie linii: `<br/>`.  
- Podział tematyczny: `<hr/>`.  

**Pogrubienie/pochylenie:**  
- Semantyczne: `<strong>` (ważne), `<em>` (emfaza).  
- Formatowanie bez semantyki: `<b>`, `<i>`, `<s>`, `<u>`.  

**Indeksy:** `<sup>` (górny indeks), `<sub>` (dolny indeks).

Przykład:

```html
<p><strong>E = MC<sup>2</sup></strong></p>
<p><em>To jest kursywa</em></p>
<p><u>To jest podkreślenie</u></p>
<p><s>To jest przekreślenie</s></p>
```
<img width="137" height="122" alt="image" src="https://github.com/user-attachments/assets/11d453ad-3340-4bde-8e76-f4dccabea2d4" />

---

## Listy

- Nieuporządkowana: `<ul>` + `<li>`.  
- Numerowana: `<ol>` + `<li>`.  
  - Atrybut `type` (1, a, A, i, I) – styl numeracji.  
  - `start` – wartość startowa.  
  - `reversed` – odliczanie w dół.  

Poprawne zagnieżdżenie:

```html
<ol>
  <li>
    Wejścia
    <ol>
      <li>Myszka</li>
      <li>Klawiatura</li>
    </ol>
  </li>
  <li>Wyjścia</li>
</ol>
```
<img width="133" height="70" alt="image" src="https://github.com/user-attachments/assets/1264232c-3f0c-4fbc-ab1d-743a5007d426" />

---

## Tabele

- Struktura: `<table>`, wiersze: `<tr>`, komórki: `<td>` i `<th>`.  
- `colspan` i `rowspan` – łączenie kolumn/wierszy.  
- `<caption>` – tytuł tabeli.  
- Bloki logiczne: `<thead>`, `<tbody>`, `<tfoot>`.  
- `cellspacing` – odstęp między komórkami.  
- `border` – grubość obramowania.  
- `bgcolor` – kolor tła tabeli.  

Przykład:

```html
<table border="1" cellspacing="0">
  <caption>Plan zajęć</caption>
  <tr>
    <th>Godz</th>
    <th>Poniedziałek</th>
    <th>Wtorek</th>
  </tr>
  <tr bgcolor="green">
    <td>18:00</td>
    <td>Karate</td>
    <td>Pianino</td>
  </tr>
  <tr>
    <td bgcolor="blue"><font color="white">20:00</font></td>
    <td colspan="2">Basen i Sauna</td>
  </tr>
</table>
```
<img width="196" height="87" alt="image" src="https://github.com/user-attachments/assets/3fae0a14-8044-46a4-a486-d07812c2f739" />

---

## Obrazy i mapy obrazkowe

```html
<img src="..." alt="opis" width="..." height="...">
```

- `alt` – opis alternatywny (dla czytników ekranowych i gdy obraz się nie załaduje).  
- `src` – ścieżka do obrazu (np. `./images/obraz.png` lub URL).  

### Mapy obrazkowe

Znacznik `<map>` definiuje **mapę obrazka (image map)** – obraz z klikalnymi obszarami.  
Atrybut `name` elementu `<map>` łączy się z `usemap` w `<img>`.  

**Atrybuty `<area>`:**  
- `alt` – tekst alternatywny.  
- `coords` – współrzędne obszaru (rozmiar, kształt i położenie).  

**Przykłady:**

`rect` - (prostokąt) Wartość to `x1,y1,x2,y2`, czyli współrzędne lewego górnego i prawego dolnego rogu prostokąta.

```html
<area shape="rect" coords="0,0,253,27" href="#" alt="tekst alternatywny">
```

`circle` - (okrąg) Wartość to `x,y,radius`, czyli współrzędne środka okręgu oraz jego promień.

```html
<area shape="circle" coords="130,136,60" href="#" alt="tekst alternatywny">
```

`poly` - (wielokąt) Wartość to `x1,y1,x2,y2,...,xn,yn`, czyli współrzędne kolejnych wierzchołków wielokąta.
Jeśli pierwszy i ostatni punkt nie są takie same, przeglądarka automatycznie zamknie kształt, łącząc je.

```html
<img src="auto.png" alt="Samochód" usemap="#samochod-mapa" />
<map name="samochod-mapa">
  <area shape="rect" coords="187,213,322,395" href="https://www.zs8.wroc.pl/" alt="ZS8"/>
  <area shape="poly" coords="326,210,498,106,675,210" href="http://planlekcji.zs8.wroc.pl/" alt="Plan lekcji"/>
  <area shape="circle" coords="370,427,35" href="https://www.zs8.wroc.pl/301-2/" alt="Harmonogram roku szkolnego"/>
</map>
```

---

## Elementy przestarzałe

Przestarzałe: `<font>`, `bgcolor`, `align`, `border`, `hspace`, `vspace`, `<marquee>`.

Przykład:

```html
<font face="Courier New"><p align="right">My first paragraph.</p></font>

<table border="2px" height="300" width="600">
  <tr align="left">
    <td bgcolor="red" rowspan="2">Maślanka</td>
    <td bgcolor="green">Maślanka</td>
    <td bgcolor="yellow">Maślanka</td>
    <td bgcolor="red">Maślanka</td>
  </tr>
  <tr align="center">
    <td bgcolor="green">Maślanka</td>
    <td bgcolor="yellow" rowspan="2" colspan="2">Maślanka</td>
  </tr>
  <tr align="right">
    <td bgcolor="green">Maślanka</td>
    <td bgcolor="red">Maślanka</td>
  </tr>
</table>
```
<img width="1919" height="1036" alt="image" src="https://github.com/user-attachments/assets/d1a2511c-1adb-41e2-959d-26f34c856faa" />

### Przykład animacji `<marquee>`
```html
<marquee behavior="alternate" direction="right" loop="2" scrollamount="100">TEKST</marquee>
```

---

## Semantyczne tagi HTML5

Zalecane: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`.

![document-outline-example-1](https://github.com/user-attachments/assets/855a41c0-0e08-4f29-b8f4-aceaf6fa154d)


