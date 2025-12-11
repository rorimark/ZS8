const cont = document.querySelector(".container");

function rand(min, max) {
  return ~~(Math.random() * (max - min) + min);
}

function fallingStar() {
  const star = document.createElement("img");

  star.src = "./images/gwiazdka.png";
  star.classList.add("star");

  const fromLeft = rand(5, 95);
  star.style.left = fromLeft + "vw";

  const delay = rand(0, 15);
  star.style.animationDuration = delay + "s";

  const fallingTime = rand(50, 150);
  star.style.animationDuration = fallingTime + "s";

  const size = rand(1, 4);
  star.style.width = size + "vh";
  star.style.height = size + "vh";

  cont.appendChild(star);
}

for (i = 0; i <= 10; i++) {
  fallingStar();
}
