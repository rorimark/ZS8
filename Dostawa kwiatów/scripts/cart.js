"use strict";

const items = document.querySelector(".items");
const itemsQty = document.querySelector(".items-qty");
const subtotal = document.querySelector(".subtotal");
const delivery = document.querySelector(".delivery");
const total = document.querySelector(".total");

let cart = JSON.parse(localStorage.getItem("cart") || "[]");

renderCart();

function renderCart() {
  items.innerHTML = "";
  cart.forEach((element, index) => {
    const item = document.createElement("div");
    item.classList.add("cart-item");

    item.innerHTML = `
      <img src='${element.img}' alt="${element.name}" class="cart-item-img" />
      <div class="cart-item-details">
        <span class="cart-item-name">${element.name}</span>
        <span class="cart-item-price">${element.price}</span>
        <div class="cart-item-quantity" data-index="${index}">
          <button class="qty-btn minus">-</button>
          <span class="qty">${element.quantity}</span>
          <button class="qty-btn plus">+</button>
        </div>
      </div>
      <button class="remove-btn">✖</button>
    `;

    items.appendChild(item);
  });

  attachEventListeners();
  updateSummary();
}

function itemsQtyCount() {
  return cart.reduce((sum, item) => sum + item.quantity, 0);
}

function subtotalCount() {
  return cart
    .reduce((sum, item) => {
      let price = parseFloat(item.price.replace(",", "."));
      return sum + price * item.quantity;
    }, 0)
    .toFixed(2)
    .replace(".", ",");
}

function updateSummary() {
  itemsQty.innerHTML = itemsQtyCount();
  subtotal.innerHTML = `${subtotalCount()} PLN`;
}

function changeQty(index, delta) {
  cart[index].quantity += delta;
  if (cart[index].quantity < 1) cart[index].quantity = 1;

  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

function attachEventListeners() {
  document.querySelectorAll(".qty-btn.minus").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const index = +btn.closest(".cart-item-quantity").dataset.index;
      changeQty(index, -1);
    });
  });

  document.querySelectorAll(".qty-btn.plus").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const index = +btn.closest(".cart-item-quantity").dataset.index;
      changeQty(index, 1);
    });
  });

  document.querySelectorAll(".remove-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const index = [...btn.parentElement.parentElement.children].indexOf(
        btn.parentElement
      );
      removeItem(index);
    });
  });
}

// TODO: Добавить логику для счетчика товаров в корзине, для посчета цены доставки, для выбора даты и времени доставки а также для подсчета итоговой цены
