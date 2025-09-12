function oblicz() {
  const input = document.getElementById("data-urodzenia").value;
  if (!input) {
    document.getElementById("wynik").innerHTML = "Wpisz datę!";
    return;
  }

  const wynik = document.getElementById("wynik");

  const dataUrodzenia = new Date(input);
  const today = new Date();

  const roznica = today - dataUrodzenia;
  const dni = Math.floor(roznica / (1000 * 60 * 60 * 24));

  const wiek = today.getFullYear() - dataUrodzenia.getFullYear();

  if (wiek > 18) {
    wynik.innerHTML = `Osoba pełnoletnia. <br>Przeżyła ${dni} dni.`;
  } else {
    wynik.innerHTML = `Osoba nieletnia. <br>Przeżyła ${dni} dni.`;
  }
}
