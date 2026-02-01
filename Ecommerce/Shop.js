const dealsData = [
  {
    id: 1,
    img: "./image-file2/png-1.webp",
    title: "Men's Sports Shoes",
    description: "Comfortable running shoes",
    price: "₹ 899",
  },
  {
    id: 2,
    img: "./image-file2/png-2.webp",
    title: "Pendants & Lockets",
    description: "Elegant jewelry pieces",
    price: "₹ 500",
  },
  {
    id: 3,
    img: "./image-file2/png-3.webp",
    title: "Bean Bag",
    description: "Soft & cozy",
    price: "₹ 999",
  },
  {
    id: 4,
    img: "./image-file2/png-4.webp",
    title: "TV Unit",
    description: "Stylish living room",
    price: "₹ 1999",
  },
  {
    id: 5,
    img: "./image-file2/png-5.webp",
    title: "Apple iPhone 16",
    description: "Latest model",
    price: "₹ 55,899",
  },
  {
    id: 6,
    img: "./image-file2/png-6.webp",
    title: "True Wireless",
    description: "High quality earbuds",
    price: "₹ 759",
  },
  {
    id: 7,
    img: "./image-file2/png-7.webp",
    title: "Wrist Watches",
    description: "Stylish analog watch",
    price: "₹ 499",
  },
  {
    id: 8,
    img: "./image-file2/png-8.webp",
    title: "Speakers",
    description: "Portable bluetooth speaker",
    price: "₹ 699",
  },
];

const dealsContainer = document.getElementById("deals");

dealsData.map((deal) => {
  dealsContainer.innerHTML += `
    <div class="deal-card" onclick="dealClick(${deal.id})">
      <img src="${deal.img}" alt="${deal.title}">
      <div class="deal-info">
        <h4>${deal.title}</h4>
        <p class="description">${deal.description}</p>
        <p class="price">${deal.price}</p>
      </div>
    </div>
  `;
});

// function dealClick(id) {
//   console.log("Clicked Product ID:", id);
//   alert("Clicked Product ID: " + id);
// }

let products = [];

/* ---------- LocalStorage Helpers ---------- */
function saveProducts() {
  localStorage.setItem("productData", JSON.stringify(products));
}

function loadProducts() {
  products = JSON.parse(localStorage.getItem("productData")) || [];
}

/* ---------- Add Product ---------- */
function addProduct() {
  // Get values
  const title = document.getElementById("title").value.trim();
  const description = document.getElementById("description").value.trim();
  const price = document.getElementById("price").value;
  // const color = document.getElementById("color").value.trim();
  // const rating = document.getElementById("rating").value;
  const imageInput = document.getElementById("image-file");

  // Error elements
  const titleError = document.getElementById("title-error");
  const descriptionError = document.getElementById("description-error");
  const priceError = document.getElementById("price-error");
  const imageError = document.getElementById("image-error");

  // Clear previous errors
  titleError.textContent = "";
  description.textContent = "";
  priceError.textContent = "";
  imageError.textContent = "";

  let isValid = true;

  // Validation
  if (!title) {
    titleError.textContent = "Title is required";
    isValid = false;
  }
  if (!description) {
    descriptionError.textContent = "Description is required";
    isValid = false;
  }

  if (!price || price <= 0) {
    priceError.textContent = "Valid price is required";
    isValid = false;
  }

  if (imageInput.files.length === 0) {
    imageError.textContent = "Product image is required";
    isValid = false;
  }

  // Stop if form is invalid
  if (!isValid) return;

  // File reader
  const reader = new FileReader();
  reader.onload = function () {
    const product = {
      productId: Date.now(),
      title,
      description,
      price: Number(price),
      // color,
      // rating,
      image: reader.result,
    };

    products.push(product);
    saveProducts();
    showProducts();
    clearForm();
  };

  reader.readAsDataURL(imageInput.files[0]);
}

/* ---------- Show Products ---------- */
function showProducts() {
  const container = document.getElementById("productCards");
  container.innerHTML = "";
  products.forEach((p) => {
    const div = document.createElement("div");
    div.className = "product-card";
    div.innerHTML = `
      <h3>${p.title}</h3>
      <p>${p.description}</p>
      
      // <p>Price: ₹${p.price}</p>
      <img src="${p.image}" width="150"><br>
      <button onclick="addToCart(${p.productId})">Add to Cart</button>
    `;
    container.appendChild(div);
  });
}

/* ---------- Add to Cart ---------- */
function addToCart(productId) {
  let cart = JSON.parse(localStorage.getItem("cartData")) || [];
  const product = products.find((p) => p.productId === productId);

  cart.push({
    cartId: Date.now(),
    ...product,
  });

  localStorage.setItem("cartData", JSON.stringify(cart));
  // alert("Product Cart मध्ये add झाला ✅");
}

/* ---------- Clear Form ---------- */
function clearForm() {
  document.getElementById("title").value = "";
  document.getElementById("description").value = "";
  document.getElementById("price").value = "";
  // document.getElementById("color").value = "";
  // document.getElementById("rating").value = "";
  document.getElementById("image-file").value = "";
}

/* ---------- Initialize ---------- */
window.onload = function () {
  loadProducts();
  showProducts();
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
