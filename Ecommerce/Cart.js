let cart = [];

/* ---------- Load Cart ---------- */
function loadCart() {
  cart = JSON.parse(localStorage.getItem("cartData")) || [];
  const container = document.getElementById("cartItems");
  container.innerHTML = "";
  let total = 0;

  cart.forEach((item) => {
    total += item.price;
    const div = document.createElement("div");

    div.className = "cart-card";
    div.innerHTML = `
    <img src="${item.image}" width="100">
      <h3>${item.title}</h3>
      <p>Price: ₹${item.price}</p>
      <button onclick="removeFromCart(${item.cartId})"> Remove</button>
    `;
    container.appendChild(div);
  });

  document.getElementById("totalPrice").innerText = total;
}

/* ---------- Remove Item ---------- */
function removeFromCart(cartId) {
  cart = cart.filter((i) => i.cartId !== cartId);
  localStorage.setItem("cartData", JSON.stringify(cart));
  loadCart();
}

/* ---------- Clear All ---------- */
function clearCart() {
  localStorage.removeItem("cartData");
  cart = [];
  loadCart();
}

/* ---------- Payment ---------- */
function goToPayment() {
  alert("Open the Payment Page ");
}

/* ---------- Initialize ---------- */
window.onload = function () {
  loadCart();
};

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menuToggle");
  const nav = document.getElementById("navbar");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("active");
    });
  }
});
