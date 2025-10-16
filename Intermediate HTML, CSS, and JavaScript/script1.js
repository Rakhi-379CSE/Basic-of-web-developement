// Contact Form Validation
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
  } else if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
  } else {
    alert("Thank you! Your message has been sent.");
    document.getElementById("contactForm").reset();
  }
});

// To-Do List
function addTodo() {
  const input = document.getElementById("todoInput");
  const taskText = input.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  const listItem = document.createElement("li");
  listItem.textContent = taskText;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "❌";
  deleteBtn.onclick = () => listItem.remove();

  listItem.appendChild(deleteBtn);
  document.getElementById("todoList").appendChild(listItem);

  input.value = "";
}