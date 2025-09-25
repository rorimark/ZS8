"use strict";

const cardsContainer = document.getElementById("cardsContainer");

const flowers = [
  {
    name: "Bukiet Bajeczny",
    price: "119,00 PLN",
    img: "./images/flowers/bukiet-bajeczny.webp",
  },
  {
    name: "Bukiet 100 lat",
    price: "125,00 PLN",
    img: "./images/flowers/bukiet-100-lat.webp",
  },
  {
    name: "Bukiet Delikatność",
    price: "179,00 PLN",
    img: "./images/flowers/bukiet-delikatnosc.webp",
  },
  {
    name: "Bukiet herbacianych róż",
    price: "125,00 PLN",
    img: "./images/flowers/bukiet-herbacianych-roz.webp",
  },
  {
    name: "Elegancja natury",
    price: "125,00 PLN",
    img: "./images/flowers/elegancja-natury.webp",
  },
  {
    name: "Goździkowy zawrót głowy",
    price: "119,00 PLN",
    img: "./images/flowers/gozdzikowy-zawrot-glowy.webp",
  },
  {
    name: "Kolorowe róże",
    price: "164,00 PLN",
    img: "./images/flowers/kolorowe-roze.webp",
  },
  {
    name: "Kwiatowa polana",
    price: "119,00 PLN",
    img: "./images/flowers/kwiatowa-polana.webp",
  },
  {
    name: "Miłosny list",
    price: "119,00 PLN",
    img: "./images/flowers/milosny-list.webp",
  },
  {
    name: "Pastelowe Marzenia",
    price: "119,00 PLN",
    img: "./images/flowers/pastelowe-marzenia.webp",
  },
  {
    name: "Siła Kobiecości",
    price: "129,00 PLN",
    img: "./images/flowers/sila-kobiecosci.webp",
  },
  {
    name: "Słodki pastel",
    price: "129,00 PLN",
    img: "./images/flowers/slodki-pastel.webp",
  },
  {
    name: "Słodki poranek",
    price: "119,00 PLN",
    img: "./images/flowers/slodki-poranek.webp",
  },
  {
    name: "Subtelne Trio",
    price: "119,00 PLN",
    img: "./images/flowers/subtelne-trio.webp",
  },
  {
    name: "Z nutą goździka",
    price: "129,00 PLN",
    img: "./images/flowers/z-nuta-gozdzika.webp",
  },
];

flowers.forEach((flower, index) => {
  const card = document.createElement("div");
  card.classList.add("card");
  //   card.id = `card${index + 1}`;

  card.innerHTML = `
    <div class="card-photo">
      <img src="${flower.img}" alt="${flower.name}">
    </div>
    <div class="card-name">
      <span>${flower.name}</span>
    </div>
    <div class="card-cost">
      <span>${flower.price}</span>
    </div>
    <div class="card-add-item">
      <img src="./images/cart-add.svg" alt="Add item to cart">
    </div>
  `;

  cardsContainer.appendChild(card);
});

function addToCart(flower) {
  let cart = JSON.parse(localStorage.getItem("cart") || []);
  const existing = cart.find((item) => item.name === flower.name);

  if (existing) {
    existing.quantity += 1;
  } else {
    flower.quantity = 1;
    cart.push(flower);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
}

document.querySelectorAll(".card-add-item").forEach((btn) => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".card");

    const flower = {
      name: card.querySelector(".card-name span").textContent,
      price: card.querySelector(".card-cost span").textContent,
      img: card.querySelector(".card-photo img").getAttribute("src"),
    };

    addToCart(flower);
  });
});

// TODO Добавсить логику обновления счетчика товаров в корзине, сделать страницу с корзиной, сделать футер
