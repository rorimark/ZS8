const main = document.querySelector("main");

const images = [
  "./images/platek.png",
  "./images/zima1.jpg",
  "./images/zima2.jpg",
  "./images/zima3.jpg",
  "./images/zima4.jpg",
  "./images/zima5.jpg",
  "./images/zima6.jpg",
  "./images/zima7.jpg",
];

function platkiRender() {
  const header = document.querySelector("header");
  const footer = document.querySelector("footer");

  const deviceWidth = window.screen.width;

  header.style.display = "flex";
  header.style.flexDirection = "row";

  footer.style.display = "flex";
  footer.style.flexDirection = "row";

  for (let i = 0; i < deviceWidth; i += 70) {
    const img1 = document.createElement("img");
    img1.src = images[0];
    img1.style.width = "70px";
    img1.style.height = "70px";

    const img2 = img1.cloneNode(true);

    header.appendChild(img1);
    footer.appendChild(img2);
  }
}

let qu = 1;
let x = 100;
let y = 100;

main.addEventListener("click", () => {
  if (!(qu < images.length)) {
    qu = 1;
    while (main.firstChild) {
      main.removeChild(main.firstChild);
    }
    x = 100;
    y = 100;
  }

  const img = document.createElement("img");

  img.src = images[qu];
  img.style.width = "550px";
  img.style.height = "350px";
  img.style.position = "absolute";
  img.style.left = x + "px";
  img.style.top = y + "px";

  main.appendChild(img);

  qu++;
  x += 60;
  y += 40;
});

platkiRender();
