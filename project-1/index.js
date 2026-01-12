
// let slides = document.querySelectorAll(".slide");
// let index = 0;

// function showSlide() {
//   slides.forEach(slide => slide.classList.remove("active"));
//   slides[index].classList.add("active");
//   index++;

//   if (index === slides.length) {
//     index = 0;
//   }
// }

// setInterval(showSlide, 3000); // 3 seconds





  let qty = 2;
  const unitPrice = 60;
  const shippingCharge = 50;

  function updateCart() {
    let subtotal = qty * unitPrice;
    document.getElementById("price").innerText = subtotal;
    document.getElementById("subtotal").innerText = subtotal;
    document.getElementById("total").innerText = subtotal + shippingCharge;
    document.getElementById("qty").innerText = qty;
  }

  function increaseQty() {
    qty++;
    updateCart();
  }

  function decreaseQty() {
    if (qty > 1) {
      qty--;
      updateCart();
    }
  }

  function removeItem() {
    document.getElementById("cart-item").remove();
    document.getElementById("subtotal").innerText = 0;
    document.getElementById("total").innerText = 0;
  }

  updateCart();

