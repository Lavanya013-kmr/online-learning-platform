document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const role = document.getElementById("role").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const user = users.find(u => u.email === email && u.password === password && u.role === role);

  if (user) {
    alert("Login successful!");
    if (role === "student") {
      window.location.href = "student.html";
    } else {
      window.location.href = "instructor.html";
    }
  } else {
    alert("Invalid email, password, or role!");
  }
});

