const firstNum = document.getElementById("first_number");
const secondNum = document.getElementById("second_number");
const eqls = document.getElementById("eqls");

const listOption = document.getElementById("listOption");
const option = document.getElementById("listOption").value;

const result = document.getElementById("res");

function zadanie() {
  switch (option) {
    case "+":
      result.innerText = `${firstNum + secondNum}`;
      break;
    case "-":
      result.innerText = `${firstNum + secondNum}`;
      break;
    case "*":
      result.innerText = `${firstNum + secondNum}`;
      break;
    case "/":
      result.innerText = `${firstNum + secondNum}`;
      break;
  }
}
