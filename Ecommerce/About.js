// Demo testimonial data
const testimonialData = [
  {
    text: "He provided great insights into financial planning and compliance.",
    name: "Raj Mehta",
    role: "CA",
    img: "https://tse2.mm.bing.net/th/id/OIP.OlnxO753VRgHKDLLDzCKoAHaHw?pid=Api&P=0&h=180",
  },
  {
    text: "Excellent guidance on investment strategies.",
    name: "Anita Sharma",
    role: "Financial Advisor",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    text: "Very professional and detail-oriented.",
    name: "Vikram Singh",
    role: "Consultant",
    img: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    text: "Helped me save money while planning taxes efficiently.",
    name: "Priya Kapoor",
    role: "Entrepreneur",
    img: "https://randomuser.me/api/portraits/women/47.jpg",
  },
  {
    text: "Reliable and knowledgeable. Highly recommended!",
    name: "Rohit Verma",
    role: "Accountant",
    img: "https://randomuser.me/api/portraits/men/48.jpg",
  },
  {
    text: "Made complex financial concepts easy to understand.",
    name: "Sneha Reddy",
    role: "Investor",
    img: "https://randomuser.me/api/portraits/women/49.jpg",
  },
];

// Get the container where we want to display testimonials
const testimonialContainer = document.getElementById("testimonial-container");

// Render the testimonial cards
testimonialContainer.innerHTML = testimonialData
  .map(
    (item) => `
  <div class="testimonial-card">
    <p class="quote">“</p>
    <p class="text">${item.text}</p>
    <div class="profile">
      <div>
        <h4>${item.name}</h4>
        <span>${item.role}</span>
      </div>
      <img src="${item.img}" alt="${item.name}">
    </div>
  </div>
`
  )
  .join(""); // join() to convert array of strings into one string

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menuToggle");
  const nav = document.getElementById("navbar");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("active");
    });
  }
});
