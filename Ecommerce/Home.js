// import React, { useState, useEffect, useRef } from "react";

// const images = [
//   "https://images.unsplash.com/photo-1678491282134-07c8f7c7d5f8?auto=format&fit=crop&w=1200&q=80",
//   "https://images.unsplash.com/photo-1682685792535-9f1a9f5e93bc?auto=format&fit=crop&w=1200&q=80",
//   "https://images.unsplash.com/photo-1677649128437-0b15de3d1f3b?auto=format&fit=crop&w=1200&q=80",
//   "https://images.unsplash.com/photo-1682316231276-2a774c1a8f26?auto=format&fit=crop&w=1200&q=80",
//   "https://images.unsplash.com/photo-1682171472384-2e15f93dca37?auto=format&fit=crop&w=1200&q=80",
// ];

// const HeroSlider = () => {
//   const [index, setIndex] = useState(0);
//   const intervalRef = useRef(null);
//   const intervalTime = 3000; // 3 seconds

//   // Next slide function
//   const nextSlide = () => {
//     setIndex((prev) => (prev + 1) % images.length);
//     resetTimer();
//   };

//   // Reset timer
//   const resetTimer = () => {
//     clearInterval(intervalRef.current);
//     intervalRef.current = setInterval(() => {
//       setIndex((prev) => (prev + 1) % images.length);
//     }, intervalTime);
//   };

//   // Auto-slide effect
//   useEffect(() => {
//     intervalRef.current = setInterval(() => {
//       setIndex((prev) => (prev + 1) % images.length);
//     }, intervalTime);

//     return () => clearInterval(intervalRef.current);
//   }, []);

//   return (
//     <div
//       className="relative w-full h-[500px] overflow-hidden cursor-pointer"
//       onClick={nextSlide} // click anywhere → next image
//     >
//       {/* Images */}
//       {images.map((img, i) => (
//         <img
//           key={i}
//           src={img}
//           alt={`Slide ${i}`}
//           className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700
//             ${i === index ? "opacity-100 z-10" : "opacity-0 z-0"}`}
//         />
//       ))}

//       {/* Optional Next / Prev Buttons */}
//       <button
//         onClick={(e) => {
//           e.stopPropagation();
//           setIndex((prev) => (prev - 1 + images.length) % images.length);
//           resetTimer();
//         }}
//         className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 z-20"
//       >
//         &#10094;
//       </button>

//       <button
//         onClick={(e) => {
//           e.stopPropagation();
//           setIndex((prev) => (prev + 1) % images.length);
//           resetTimer();
//         }}
//         className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 z-20"
//       >
//         &#10095;
//       </button>
//     </div>
//   );
// };

// export default HeroSlider;
let slides = document.querySelectorAll(".slide");
let index = 0;
let interval = 3000; // 3 seconds

function showSlide(i) {
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[i].classList.add("active");
}

// Next slide
function nextSlide() {
  index = (index + 1) % slides.length;
  showSlide(index);
}

// Previous slide
function prevSlide() {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
}

// Auto slide timer
let sliderTimer = setInterval(nextSlide, interval);

// Arrow buttons
document.querySelector(".next").addEventListener("click", () => {
  nextSlide();
  resetTimer();
});

document.querySelector(".prev").addEventListener("click", () => {
  prevSlide();
  resetTimer();
});

// Reset timer on manual click
function resetTimer() {
  clearInterval(sliderTimer);
  sliderTimer = setInterval(nextSlide, interval);
}

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
    description: "Elegant jewlery pieces",
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
    title: "Apple iphone 16",
    description: "Latest model",
    price: "₹ 55,899",
  },
  {
    id: 6,
    img: "./image-file2/png-6.webp",
    title: "True Wireless",
    description: "Hight Quality earbuds",
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
    description: "Portable bluthooth speaker",
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

function dealClick(id) {
  console.log(`You clicked Deal ${id}`);
  alert(`You clicked Deal ${id}`);
}

const recentData = [
  {
    id: 9,
    img: "./image-file2/png-9.webp",
    title: "Portable laptoptable",
    price: "₹ 399",
  },
  {
    id: 10,
    img: "./image-file2/png-10.webp",
    title: "Floor lamp",
    price: "₹ 399",
  },
  {
    id: 11,
    img: "./image-file2/png-11.webp",
    title: "Galaxy s24 5G",
    price: "₹ 399",
  },
  {
    id: 12,
    img: "./image-file2/png-12.webp",
    title: "LG core i3",
    price: "₹ 399",
  },
  {
    id: 13,
    img: "./image-file2/png-13.webp",
    title: "praiz analog watch",
    price: "₹ 399",
  },
  {
    id: 14,
    img: "./image-file2/png-14.webp",
    title: "Propoo crafit",
    price: "₹ 399",
  },
  {
    id: 15,
    img: "./image-file2/png-15.webp",
    title: "Drop top decor",
    price: "₹ 399",
  },
  {
    id: 16,
    img: "./image-file2/png-16.webp",
    title: "Litre oven toster grill",
    price: "₹ 399",
  },
];

const recentContainer = document.getElementById("recentlyViewed");

recentData.map((item) => {
  recentContainer.innerHTML += `
    <div class="recent-card">
      <img src="${item.img}" alt="${item.title}">
      <div class="recent-info">
        <h4>${item.title}</h4>
        <p>${item.price}</p>
      </div>
    </div>
  `;
});
