function checkFlowers() {
  const flower = document.getElementById("kwiaty").value;
  const qty = document.getElementById("ile-sztuk").value;
  const addYes = document.getElementById("przyb-tak");
  const result = document.getElementById("wynik");

  let cost = 0;

  switch (flower) {
    case "r":
      cost = qty * 7.5;
      break;
    case "t":
      cost = qty * 3;
      break;
    case "s":
      cost = qty * 9.2;
      break;
    case "k":
      cost = qty * 4.5;
      break;
    case "l":
      cost = qty * 6;
      break;
    case "a":
      cost = qty * 8;
      break;
  }
  addYes.checked ? (cost += 5) : (cost += 0);

  wynik.innerHTML = cost;
  return cost;
}

function checkDates() {
  const time1 = document.getElementById("time1");
  const time2 = document.getElementById("time2");
  const day = document.getElementById("dzien");
  const costOfDelivery = document.getElementById("koszt-dostawy");

  let dayValue = +day.value;
  let time;
  let cost = 0;

  if (time1.checked) time = "r";
  if (time2.checked) time = "w";

  if (dayValue <= 5 && time === "r") cost = 4;
  if (dayValue <= 5 && time === "w") cost = 6;
  if (dayValue > 5 && time === "r") cost = 8;
  if (dayValue > 5 && time === "w") cost = 10;
  costOfDelivery.innerHTML = cost;

  return cost;
}

function sumAmount() {
  document.getElementById("to-pay").innerHTML = checkFlowers() + checkDates();
}
