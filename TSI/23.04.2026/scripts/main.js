const container = document.getElementById("container");
container.style.display = "flex";
container.style.gap = "8px";

const images = [
  "2_of_clubs.png",
  "3_of_clubs.png",
  "4_of_clubs.png",
  "5_of_clubs.png",
  "6_of_clubs.png",
  "7_of_clubs.png",
  "8_of_clubs.png",
  "9_of_clubs.png",
  "10_of_clubs.png",
  "jack_of_clubs.png",
  "queen_of_clubs.png",
  "king_of_clubs.png",
  "ace_of_clubs.png",
];

for (let i = 0; i < 5; i++) {
  const j = Math.floor(Math.random() * images.length);

  [images[i], images[j]] = [images[j], images[i]];
}

for (let i = 0; i < 5; i++) {
  const img = document.createElement("img");
  img.src = `./images/${images[i]}`;
  img.alt = images[i];
  img.style.width = 250 + "px";
  container.appendChild(img);
}
