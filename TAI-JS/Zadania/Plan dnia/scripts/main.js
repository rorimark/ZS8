function termin() {
  const data = new Date(document.getElementById("data").value);
  const kiedy = document.getElementById("kiedy");
  const naglowek = document.createElement("h2");
  let dzien = data.getDay();

  switch (dzien) {
    case 0:
      dzien = "Niedziela";
      break;
    case 1:
      dzien = "Poniedziałek";
      break;
    case 2:
      dzien = "Wtorek";
      break;
    case 3:
      dzien = "Środa";
      break;
    case 4:
      dzien = "Czwartek";
      break;
    case 5:
      dzien = "Piątek";
      break;
    case 6:
      dzien = "Sobota";
      break;
    default:
      return;
  }

  naglowek.innerHTML = dzien;

  if (kiedy.firstChild) {
    kiedy.removeChild(kiedy.firstChild);
  }
  kiedy.appendChild(naglowek);
}

function wprowadz() {
  const co = document.getElementById("co");
  const rodzaj = document.getElementById("rodzaj").value;
  const czas = document.getElementById("czas").value;
  const opis = document.getElementById("opis").value;

  const div = document.createElement("div");
  const img = document.createElement("img");
  const spanCzas = document.createElement("span");
  const spanOpis = document.createElement("span");

  const images = [
    "",
    "./images/praca.png",
    "./images/przyjazn.png",
    "./images/porzadki.png",
    "./images/trening.png",
    "./images/bal.png",
  ];

  if (!rodzaj || !czas || !opis) {
    alert("Podaj wszystkie dane!!!");
    return;
  }

  img.src = images[rodzaj];
  spanCzas.innerText = czas;
  spanOpis.innerText = opis;

  // switch (rodzaj) {
  //   case 6:
  //     rodzaj = "";
  //     break;
  //   case 1:
  //     rodzaj = "Praca/Nauka";
  //     break;
  //   case 2:
  //     rodzaj = "Spotkanie z przyjaciółmi";
  //     break;
  //   case 3:
  //     rodzaj = "Obowiązki domowe";
  //     break;
  //   case 4:
  //     rodzaj = "Trening";
  //     break;
  //   case 5:
  //     rodzaj = "Impreza";
  //     break;
  // }

  div.append(img, czas, " - ", opis);
  co.append(div);
}

function zapisz() {}
function drukuj() {}
