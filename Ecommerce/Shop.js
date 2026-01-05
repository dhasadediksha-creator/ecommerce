const dealsData = [
  {id:1, img:"./image-file2/png-1.webp", title:"Men's Sports Shoes", description:"Comfortable running shoes", price:"₹ 899"},
  {id:2, img:"./image-file2/png-2.webp", title:"Pendants & Lockets", description:"Elegant jewelry pieces", price:"₹ 500"},
  {id:3, img:"./image-file2/png-3.webp", title:"Bean Bag", description:"Soft & cozy", price:"₹ 999"},
  {id:4, img:"./image-file2/png-4.webp", title:"TV Unit", description:"Stylish living room", price:"₹ 1999"},
  {id:5, img:"./image-file2/png-5.webp", title:"Apple iPhone 16", description:"Latest model", price:"₹ 55,899"},
  {id:6, img:"./image-file2/png-6.webp", title:"True Wireless", description:"High quality earbuds", price:"₹ 759"},
  {id:7, img:"./image-file2/png-7.webp", title:"Wrist Watches", description:"Stylish analog watch", price:"₹ 499"},
  {id:8, img:"./image-file2/png-8.webp", title:"Speakers", description:"Portable bluetooth speaker", price:"₹ 699"}
];

const dealsContainer = document.getElementById("deals");

dealsData.map(deal => {
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

function dealClick(id){
    console.log("Clicked Product ID:", id);
    alert("Clicked Product ID: " + id);
}





// let products = JSON.parse(localStorage.getItem("shopProducts")) || [];
// let editIndex = null;

// const table = document.getElementById("productTable");

// function addProduct() {
//   const title = document.getElementById("title").value.trim();
//   const description = document.getElementById("description").value.trim();
//   const price = document.getElementById("price").value.trim();
//   const color = document.getElementById("color").value.trim();
//   const rating = document.getElementById("rating").value.trim();
//   const imageInput = document.getElementById("imageInput");

//   // VALIDATION
//   if (!title || !description || !price || !color || !rating) {
//     alert("All fields required");
//     return;
//   }

//   if (imageInput.files.length === 0 && editIndex === null) {
//     alert("Please select file");
//     return;
//   }

//   let imageURL = editIndex !== null
//     ? products[editIndex].image
//     : URL.createObjectURL(imageInput.files[0]);

//   const product = {
//     title,
//     description,
//     price,
//     color,
//     rating,
//     image: imageURL
//   };

//   if (editIndex === null) {
//     products.push(product);
//   } else {
//     products[editIndex] = product;
//     editIndex = null;
//     document.querySelector(".add-btn").innerText = "Add";
//   }

//   localStorage.setItem("shopProducts", JSON.stringify(products));
//   displayProducts();
//   clearForm();
// }

// function displayProducts() {
//   table.innerHTML = "";
//   products.forEach((p, index) => {
//     table.innerHTML += `
//       <tr>
//         <td><img src="${p.image}" width="60"></td>
//         <td>${p.title}</td>
//         <td>${p.description}</td>
//         <td>₹${p.price}</td>
//         <td>${p.color}</td>
//         <td>${p.rating}</td>
//         <td>
//           <button onclick="editProduct(${index})">Edit</button>
//           <button onclick="deleteProduct(${index})">Delete</button>
//         </td>
//       </tr>
//     `;
//   });
// }

// function editProduct(index) {
//   const p = products[index];
//   document.getElementById("title").value = p.title;
//   document.getElementById("description").value = p.description;
//   document.getElementById("price").value = p.price;
//   document.getElementById("color").value = p.color;
//   document.getElementById("rating").value = p.rating;

//   editIndex = index;
//   document.querySelector(".add-btn").innerText = "Update";
// }

// function deleteProduct(index) {
//   if (confirm("Delete product?")) {
//     products.splice(index, 1);
//     localStorage.setItem("shopProducts", JSON.stringify(products));
//     displayProducts();
//   }
// }

// function clearForm() {
//   document.getElementById("title").value = "";
//   document.getElementById("description").value = "";
//   document.getElementById("price").value = "";
//   document.getElementById("color").value = "";
//   document.getElementById("rating").value = "";
//   document.getElementById("imageInput").value = "";
// }

// function addToCart() {
//   if (products.length === 0) {
//     alert("Add product first");
//     return;
//   }
//   alert("Product added to cart");
//   window.location.href = "Home.html";
// }

// displayProducts();
let products = JSON.parse(localStorage.getItem("shopProducts")) || [];
let editIndex = null;

const cardsDiv = document.getElementById("productCards");

function addProduct(){
  const title = document.getElementById("title").value.trim();
  const description = document.getElementById("description").value.trim();
  const price = document.getElementById("price").value.trim();
  const color = document.getElementById("color").value.trim();
  const rating = document.getElementById("rating").value.trim();
  const imageInput = document.getElementById("image-file2");

  if(!title || !description || !price || !color || !rating || imageInput.files.length === 0){
    alert("All fields required");
    return;
  }

  const imageURL = URL.createObjectURL(imageInput.files[0]);

  const product = { title, description, price, color, rating, imageURL };

  if(editIndex === null){
    products.push(product);
  }else{
    products[editIndex] = product;
    editIndex = null;
    document.querySelector(".add-btn").innerText = "Add";
  }

  localStorage.setItem("shopProducts", JSON.stringify(products));
  displayProducts();
  clearForm();
}

function displayProducts(){
  cardsDiv.innerHTML = "";

  products.forEach((p,index)=>{
    cardsDiv.innerHTML += `
      <div class="product-card">
        <img src="${p.imageURL}">
        <div class="card-body">
          <h4>${p.title}</h4>
          <p>${p.description}</p>
          <p><b>₹${p.price}</b></p>
          <p>Color: ${p.color}</p>
          <p>Rating: ${p.rating}</p>
        </div>
        <div class="card-actions">
          <button onclick="editProduct(${index})">Edit</button>
          <button onclick="deleteProduct(${index})">Delete</button>
        </div>
      </div>
    `;
  });
}

function editProduct(index){
  const p = products[index];
  document.getElementById("title").value = p.title;
  document.getElementById("description").value = p.description;
  document.getElementById("price").value = p.price;
  document.getElementById("color").value = p.color;
  document.getElementById("rating").value = p.rating;

  editIndex = index;
  document.querySelector(".add-btn").innerText = "Update";
}

function deleteProduct(index){
  if(confirm("Delete this product?")){
    products.splice(index,1);
    localStorage.setItem("shopProducts", JSON.stringify(products));
    displayProducts();
  }
}

function clearForm(){
  document.getElementById("title").value="";
  document.getElementById("description").value="";
  document.getElementById("price").value="";
  document.getElementById("color").value="";
  document.getElementById("rating").value="";
  document.getElementById("image-file2").value="";
}

function addToCart(){
  if(products.length === 0){
    alert("No products added");
    return;
  }
  alert("Products added to cart");
  window.location.href = "Home.html";
}

displayProducts();
