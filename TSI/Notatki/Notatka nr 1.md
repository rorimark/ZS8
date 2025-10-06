# Notatka - Analiza plików HTML (format Markdown)

**Kompletna, przygotowana na kartkówkę** - wyjaśnienia, przykłady i poprawki.

---

# Struktura dokumentu HTML

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

- `<!DOCTYPE html>` - deklaruje HTML5.
- `<html lang="pl">` - język dokumentu (ważne dla SEO i czytników ekranowych).
- `<meta charset="utf-8">` - kodowanie znaków.
- `<meta name="viewport">` - responsywność na urządzeniach mobilnych.
- `<title>` - tytuł zakładki przeglądarki.

---

# Tekst i semantyka

- Nagłówki: `<h1>` ... `<h6>` - używaj hierarchicznie (najważniejszy `<h1>`).
- Akapit: `<p>...</p>`.
- Złamanie linii: `<br/>` - używać oszczędnie.
- Pogrubienie/pochylenie:
  - Semantyczne: `<strong>` (ważne), `<em>` (emfaza).
  - Formatowanie bez semantyki: `<b>`, `<i>` - istnieją, ale lepiej używać semantycznych wersji.
- Indeksy: `<sup>` (górny indeks), `<sub>` (dolny indeks).
- Dekoracje: `<u>` (podkreślenie), `<s>`/`<del>` (przekreślenie).

**Przykład:**

```html
<p>
  <strong>E = MC<sup>2</sup></strong>
</p>
<p><em>To jest kursywa</em></p>
```

---

# Listy

- Nieuporządkowana: `<ul>` + `<li>`.
- Numerowana: `<ol>` + `<li>`.
  - Atrybut `type` (`1`, `a`, `A`, `i`, `I`) - styl numeracji.
  - `start` - wartość startowa.
  - `reversed` - odliczanie w dół.
- Zagnieżdżanie: wstawiaj listę wewnątrz `<li>`.

**Poprawne zagnieżdżenie:**

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

---

# Tabele

- Struktura: `<table>`, wiersze: `<tr>`, komórki: `<td>` (dane) i `<th>` (nagłówek).
- `colspan` i `rowspan` - łączenie kolumn/wierszy.
- Używaj `<caption>` (tytuł) oraz logicznych bloków: `<thead>`, `<tbody>`, `<tfoot>`.
- Dla dostępności stosuj `<th scope="col">` lub `scope="row"`.

**Przykład:**

```html
<table>
  <caption>
    Plan zajęć
  </caption>
  <thead>
    <tr>
      <th>Godz</th>
      <th>Poniedziałek</th>
      <th>Wtorek</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>18:00</td>
      <td>Karate</td>
      <td>Pianino</td>
    </tr>
    <tr>
      <td>20:00</td>
      <td colspan="2">Basen i Sauna</td>
    </tr>
  </tbody>
</table>
```

---

# Obrazy i mapy obrazkowe

- `<img src="..." alt="opis" width="..." height="...">`
  - `alt` - obowiązkowy dla dostępności.
  - Unikaj przestarzałych `hspace`, `vspace`, `align` - stosuj CSS (`margin`, `float`).
- Mapy obrazkowe:

```html
<img src="auto.png" usemap="#car-map" alt="Samochód" />
<map name="car-map">
  <area
    shape="rect"
    coords="187,213,322,395"
    href="https://example.com"
    alt="ZS8"
  />
  <area
    shape="circle"
    coords="370,427,35"
    href="https://example.com/301"
    alt="Harmonogram"
  />
</map>
```

---

# Elementy przestarzałe (co znalazłeś w plikach) i ich zamienniki

**Przestarzałe:** `<font>`, `bgcolor`, `align`, `border` (w tabelach), `hspace`, `<marquee>`.  
**Zamień na CSS.**

Przykład - zamiast:

```html
<p align="center">
  <font color="red"><b>Tekst</b></font>
</p>
```

Użyj:

```html
<p class="center-red"><strong>Tekst</strong></p>

<style>
  .center-red {
    text-align: center;
    color: red;
    font-family: Arial, sans-serif;
    font-weight: 700;
  }
</style>
```

**Dlaczego?**

- Separacja treści (HTML) od wyglądu (CSS).
- Lepsza dostępność i utrzymanie kodu.

---

# Animacje - zamiast `<marquee>`

- `<marquee>` jest przestarzałe. Użyj CSS `@keyframes` i `animation`.

**Przykład prostego ruchu:**

```html
<div class="ticker">TEKST</div>

<style>
  @keyframes pendulum {
    0% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(200px);
    }
    100% {
      transform: translateX(0);
    }
  }
  .ticker {
    display: inline-block;
    animation: pendulum 2s infinite alternate;
  }
</style>
```

---

# Semantyczne tagi HTML5 (ułatwiają strukturę i SEO)

- Zamiast wielu `<div>` używaj: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`.

---

# Dostępność (a11y) - najważniejsze zasady

- Każdy `<img>` ma `alt`.
- Tabele z nagłówkami (`<th>` + `scope`).
- Linki opisowe (nie „kliknij tutaj”).
- Utrzymuj logiczną kolejność nagłówków (`h1` → `h2` → `h3`).
- Unikaj migających animacji lub daj opcję ich zatrzymania.
- Dbaj o kontrast kolorów tekstu/tła.

---

# Najczęstsze błędy do zapamiętania

1. Użycie `<font>` zamiast CSS.
2. Inline `align`, `bgcolor`, `border` zamiast stylów.
3. Brak `alt` w obrazkach.
4. Niepoprawne zagnieżdżenie list (np. `<ul>` bez `<li>`).
5. Używanie `<marquee>` zamiast CSS.
6. Brak semantycznych nagłówków i elementów HTML5.

---

# Krótkie zasady do kartkówki (mnemotechnika)

- **HTML = struktura**, **CSS = wygląd**, **JS = zachowanie**.
- **Semantyka ponad wyglądem** (używaj `strong`, `em`, `header`, `nav` itd.).
- **Przestarzałe → zamień na CSS** (`font`, `bgcolor`, `align`, `marquee`).

---

# Praktyczne zadania (ćwiczenia) - z odpowiedziami

1. **Co robi `colspan="2"` w `<td>`?**

   > Łączy komórkę tak, aby zajmowała dwie kolumny (poziomo).

2. **Jak zastąpić `<font face="Verdana" size="4">Tekst</font>`?**

   ```html
   <p class="verdana">Tekst</p>
   <style>
     .verdana {
       font-family: Verdana, sans-serif;
       font-size: 1.25rem;
     }
   </style>
   ```

3. **Dlaczego `alt` jest ważne?**

   > Bo opisuje obraz dla czytników ekranowych i gdy obraz nie załaduje się.

4. **Co to jest `usemap` w `<img>`?**
   > Łączy obraz z mapą obrazkową (`<map name="...">`), która definiuje klikane obszary.

---

# Gotowy poprawiony fragment (przykład modernizacji)

Oryginał:

```html
<font face="Courier New">adasdfasdfasuii</font>
<p align="right">My first paragraph.</p>
```

Poprawione:

```html
<p style="font-family: 'Courier New', monospace;">adasdfasdfasuii</p>
<p class="text-right">My first paragraph.</p>

<style>
  .text-right {
    text-align: right;
  }
</style>
```

---

# Szybka checklista przed sprawdzianem

- [ ] Wiesz co robi `<!DOCTYPE html>`?
- [ ] Rozróżniasz `<b>` vs `<strong>` i `<i>` vs `<em>`?
- [ ] Potrafisz użyć `colspan` / `rowspan`?
- [ ] Wiesz, dlaczego unikać `<font>` i używać CSS?
- [ ] Znasz podstawy dostępności (`alt`, `th scope`)?
- [ ] Potrafisz zamienić `<marquee>` na animację CSS?
- [ ] Umiesz zagnieździć listę poprawnie?

---

# Co mogę zrobić dalej

- wygenerować tę notatkę jako plik `.md` (zapisane poniżej),
- albo przekształcić jedną z Twoich stron na **poprawny HTML5 + CSS** (zachowując treść).
