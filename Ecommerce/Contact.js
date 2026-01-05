  document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let isValid = true;

  // inputs
  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const phone = document.getElementById("phone");
  const email = document.getElementById("email");
  const subject = document.getElementById("subject");
  const message = document.getElementById("message");

  const errors = document.querySelectorAll(".error");
  errors.forEach(err => err.innerText = "");

  // Full Name
  if (firstName.value.trim() === "") {
    firstName.nextElementSibling.innerText = "Full name required";
    isValid = false;
  }

  // Last Name
  if (lastName.value.trim() === "") {
    lastName.nextElementSibling.innerText = "Last name required";
    isValid = false;
  }

  // Phone (10 digit)
  if (!/^[0-9]{10}$/.test(phone.value)) {
    phone.nextElementSibling.innerText = "Enter valid 10 digit phone number";
    isValid = false;
  }

  // Email
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    email.nextElementSibling.innerText = "Enter valid email address";
    isValid = false;
  }

  // Subject
  if (subject.value.trim() === "") {
    subject.nextElementSibling.innerText = "Subject required";
    isValid = false;
  }

  // Message
  if (message.value.trim().length < 10) {
    message.nextElementSibling.innerText = "Message minimum 10 characters";
    isValid = false;
  }

  // Final submit
  if (isValid) {
    alert("Form submitted successfully ✅");
    this.reset();
  }
});