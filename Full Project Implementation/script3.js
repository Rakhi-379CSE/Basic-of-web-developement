const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function loadTasks() {
  taskList.innerHTML = "";
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((task, i) => {
    const div = document.createElement("div");
    div.className = "task";
    div.innerHTML = `
      <span>${task}</span>
      <button onclick="deleteTask(${i})">❌</button>
    `;
    taskList.appendChild(div);
  });
}

function addTask() {
  const task = taskInput.value.trim();
  if (task) {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    taskInput.value = "";
    loadTasks();
  }
}

function deleteTask(index) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  loadTasks();
}

const productList = document.getElementById("productList");
const categoryFilter = document.getElementById("categoryFilter");
const sortFilter = document.getElementById("sortFilter");

const products = [
  { name: "JavaScript Book", category: "Books", price: 499 },
  { name: "Headphones", category: "Electronics", price: 899 },
  { name: "CSS Guide", category: "Books", price: 299 },
  { name: "Smartphone", category: "Electronics", price: 6999 },
];

function displayProducts() {
  const selectedCategory = categoryFilter.value;
  const selectedSort = sortFilter.value;

  let filtered = [...products];
  if (selectedCategory !== "All") {
    filtered = filtered.filter(p => p.category === selectedCategory);
  }

  if (selectedSort === "priceAsc") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (selectedSort === "priceDesc") {
    filtered.sort((a, b) => b.price - a.price);
  }

  productList.innerHTML = "";
  filtered.forEach(p => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <h4>${p.name}</h4>
      <p>Category: ${p.category}</p>
      <p>Price: ₹${p.price}</p>
    `;
    productList.appendChild(div);
  });
}

categoryFilter.addEventListener("change", displayProducts);
sortFilter.addEventListener("change", displayProducts);

loadTasks();
displayProducts();