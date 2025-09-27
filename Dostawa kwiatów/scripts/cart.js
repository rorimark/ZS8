"use strict";

const items = document.querySelector(".items");
const itemsQty = document.querySelector(".items-qty");
const subtotal = document.querySelector(".subtotal");
const deliveryTime = document.getElementById("delivery-time");
const deliveryDate = document.getElementById("delivery-date");
const delivery = document.querySelector(".delivery");
const total = document.querySelector(".total");
const cartCount = document.querySelector(".cart-count");

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

function deliveryCount() {
  const timeValue = deliveryTime.value;
  const dateValue = deliveryDate.value;

  if (!timeValue || !dateValue) return 0;

  console.log(dateValue);
  console.log(timeValue);

  const date = new Date(dateValue);
  const dateDay = +date.getDay();
  const [hours, minutes] = timeValue.split(":").map(Number);

  let price = 0;

  if (dateDay === 0 || dateDay === 6) {
    price = 10;
  }
  if (hours >= 9 && hours < 19) {
    price += 10;
  } else {
    price += 20;
  }

  return price;
}

function totalCount() {
  return (parseFloat(subtotalCount()) + parseFloat(deliveryCount())).toFixed(2);
}

function updateSummary() {
  itemsQty.innerHTML = itemsQtyCount();
  cartCount.innerHTML = itemsQtyCount();
  subtotal.innerHTML = `${subtotalCount()} PLN`;
  delivery.innerHTML = `${deliveryCount()} PLN`;
  total.innerHTML = `${totalCount()} PLN`;
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

  deliveryTime.addEventListener("input", updateSummary);
  deliveryDate.addEventListener("input", updateSummary);
}
