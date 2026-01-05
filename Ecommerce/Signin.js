function signin() {
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value;

  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let storedUser = JSON.parse(sessionStorage.getItem("user"));

  if (!email || !password) {
    alert("All fields required");
    return;
  }

  if (!emailRegex.test(email)) {
    alert("Enter valid email");
    return;
  }

  if (!storedUser) {
    alert("User not found. Please signup");
    return;
  }

  if (email === storedUser.email && password === storedUser.password) {
    alert("Signin successful");
    window.location.href = "Home.html";
  } else {
    alert("Invalid email or password");
  }
}
