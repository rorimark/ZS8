const addDiv = document.getElementById("add-div");
const main = document.getElementById("main");


const images = ["./images/pan.png", "./images/pani.png"];

addDiv.addEventListener("click", () => {
  const pan = document.getElementById("pan").checked;
  const pani = document.getElementById("pani").checked;
  const klasa = document.getElementById("klasa").value;

  const div = document.createElement("div");
  const p = document.createElement("p");
  const img = document.createElement("img");

  p.innerText = `${document.getElementById("tekst").value}  ${klasa}`;
  if (pan) {
    img.setAttribute("src", `${images[0]}`);
  } else if (pani) {
    img.setAttribute("src", `${images[1]}`);
  }

  div.appendChild(p);
  div.appendChild(img);
  main.appendChild(div);
});
