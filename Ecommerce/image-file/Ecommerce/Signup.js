function signup() {
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let phone = document.getElementById("phone").value.trim();
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;
  let pin = document.getElementById("pin").value.trim();

  // Regex
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let phoneRegex = /^[0-9]{10}$/;
  let pinRegex = /^[0-9]{6}$/;
  let passwordRegex = /^(?=.*\d).{6,}$/;

  if (name.length < 3) {
    alert("Name must be at least 3 characters");
    return;
  }

  if (!emailRegex.test(email)) {
    alert("Enter valid email");
    return;
  }

  if (!phoneRegex.test(phone)) {
    alert("Phone must be 10 digits");
    return;
  }

  if (!passwordRegex.test(password)) {
    alert("Password must be 6+ chars & contain 1 number");
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  if (!pinRegex.test(pin)) {
    alert("Pin must be 6 digits");
    return;
  }

  let user = { name, email, phone, password, pin };

  sessionStorage.setItem("user", JSON.stringify(user));
  alert("Signup Successful");

  window.location.href = "Signin.html";
}
