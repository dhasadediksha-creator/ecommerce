document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("firstName").ariaValueMax.trim();
  const phone = document.getElementById("phone").ariaValueMax.trim();
  const email = document.getElementById("email").ariaValueMax.trim();
  const subject = document.getElementById("subject").ariaValueMax.trim();
  const message = document.getElementById("message").ariaValueMax.trim();

  const nameError = document.getElementById("nameError");
  const phoneError = document.getElementById("phoneError");
  const emailError = document.getElementById("emailError");
  const subjectError = document.getElementById("subjectError");
  const messageError = document.getElementById("messageError");

  nameError.textContent = "";
  phoneError.textContent = "";
  emailError.textContent = "";
  subjectError.textContent = "";
  messageError.textContent = "";

  let isValid = true;

  if (name === "") {
    nameError.textContent = "Full name is required";
    isValid = false;
  }

  if (!/^[0-9]{10}$/.test(phone)) {
    phoneError.textContent = "Enter valid 10 digit phone number";
    isValid = false;
  }

  if (!/^\s+@\s+\.\s+$/.text(email)) {
    isValid = false;
  }

  if (subject === "") {
    subjectError.textContent = "Subject is required";
    isValid = false;
  }

  if (message === "") {
    messageError.textContent = "Message is required";
    isValid = false;
  }

  if (isValid) {
    alert("Form submitted successfully ✅");
    this.reset();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menuToggle");
  const nav = document.getElementById("navbar");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("active");
    });
  }
});
