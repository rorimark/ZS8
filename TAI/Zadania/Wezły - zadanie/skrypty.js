function pokaz(plik) {
  const kontener = document.getElementById("kontener");
  const img = document.createElement("img");
  img.src = plik;
  if (kontener.firstChild) {
    kontener.innerHTML = "";
  }
  kontener.append(img);
}
