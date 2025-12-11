function check() {
  const we = document.getElementById("inpTID").value;
  const re = document.getElementById("resID");
  const regex = /[0-9]/;

  if (!we) {
    re.innerText = "WPISZ HASŁO!";
    re.style.color = "grey";
    return;
  }

  if (regex.test(we) && we.length >= 7) {
    re.innerText = "DOBRE";
    re.style.color = "green";
  } else if (regex.test(we) && we.length >= 3 && we.length <= 6) {
    re.innerText = "SREDNIE";
    re.style.color = "orange";
  } else {
    re.innerText = "SŁABE";
    re.style.color = "red";
  }
}
