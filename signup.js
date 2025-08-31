function showForm(type) {
  document.getElementById("studentForm").style.display = (type === "student") ? "block" : "none";
  document.getElementById("instructorForm").style.display = (type === "instructor") ? "block" : "none";
}

// Save Student Data
document.getElementById("studentForm")?.addEventListener("submit", function(e) {
  e.preventDefault();

  const student = {
    name: document.getElementById("studentName").value,
    email: document.getElementById("studentEmail").value,
    password: document.getElementById("studentPassword").value,
    roll: document.getElementById("studentRoll").value,
    dept: document.getElementById("studentDept").value,
    sem: document.getElementById("studentSem").value,
    role: "student"
  };

  let students = JSON.parse(localStorage.getItem("students")) || [];
  students.push(student);
  localStorage.setItem("students", JSON.stringify(students));

  alert("Student registered successfully ✅");
  window.location.href = "login.html";
});

// Save Instructor Data
document.getElementById("instructorForm")?.addEventListener("submit", function(e) {
  e.preventDefault();

  const instructor = {
    name: document.getElementById("instructorName").value,
    email: document.getElementById("instructorEmail").value,
    password: document.getElementById("instructorPassword").value,
    dept: document.getElementById("instructorDept").value,
    role: "instructor"
  };

  let instructors = JSON.parse(localStorage.getItem("instructors")) || [];
  instructors.push(instructor);
  localStorage.setItem("instructors", JSON.stringify(instructors));

  alert("Instructor registered successfully ✅");
  window.location.href = "login.html";
});
