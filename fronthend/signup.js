function showForm(type) {
  document.getElementById("studentForm").style.display = (type === "student") ? "block" : "none";
  document.getElementById("instructorForm").style.display = (type === "instructor") ? "block" : "none";
}

// Student registration
document.getElementById("studentForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const student = {
    role: "student",
    name: document.getElementById("studentName").value,
    email: document.getElementById("studentEmail").value,
    password: document.getElementById("studentPassword").value,
    roll: document.getElementById("studentRoll").value,
    dept: document.getElementById("studentDept").value,
    sem: document.getElementById("studentSem").value
  };

  let users = JSON.parse(localStorage.getItem("users")) || [];
  users.push(student);
  localStorage.setItem("users", JSON.stringify(users));

  alert("Student registered successfully!");
  document.getElementById("studentForm").reset();
});

// Instructor registration
document.getElementById("instructorForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const instructor = {
    role: "instructor",
    name: document.getElementById("instructorName").value,
    email: document.getElementById("instructorEmail").value,
    password: document.getElementById("instructorPassword").value,
    dept: document.getElementById("instructorDept").value
  };

  let users = JSON.parse(localStorage.getItem("users")) || [];
  users.push(instructor);
  localStorage.setItem("users", JSON.stringify(users));

  alert("Instructor registered successfully!");
  document.getElementById("instructorForm").reset();
});
