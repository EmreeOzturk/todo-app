const form = document.querySelector("form");
const input = document.querySelector("#txtTaskName");
const btnAddNewTask = document.querySelector("#btnAddNewTask");
const btnDeleteAll = document.querySelector("#btnDeleteAll");
const taskList = document.querySelector("#task-list");
const items = [
  "Todo1",
  "Todo2",
  "Todo3",
  "Todo4",
  "Todo5",
  "Todo6",
  "Todo7",
  "Todo8",
  "Todo9",
  "Todo10",
];
function addAll() {
  items.forEach(function (item) {
    const link = document.createElement("a");
    const newItem = document.createElement("li");
    newItem.innerHTML = item;
    link.innerHTML = '<i class="fas fa-times"></i>';
    link.setAttribute("href", "#");
    link.className = "delete-item float-right";
    newItem.className = "list-group-item list-group-item-secondary";
    newItem.appendChild(link);
    taskList.appendChild(newItem);
  });
}
addAll();

form.addEventListener("submit", addNewItem);
function addNewItem(e) {
  e.preventDefault();
  if (input.value === "") {
    alert("Please enter a task");
  } else {
    const link = document.createElement("a");
    const newItem = document.createElement("li");
    const newItem2 = document.createElement("i");
    newItem2.className = "fas fa-times";
    newItem.innerHTML = input.value;
    link.appendChild(newItem2);
    link.setAttribute("href", "#");
    link.className = "delete-item float-right";
    newItem.className = "list-group-item list-group-item-secondary";
    newItem.appendChild(link);
    taskList.appendChild(newItem);
    input.value = "";
  }
}

taskList.addEventListener("click", deleteItem);
function deleteItem(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    if (confirm("Are you sure you want to delete this task?")) {
      e.target.parentElement.parentElement.remove();
    }
  }
}

btnDeleteAll.addEventListener("click", (e) => {
  taskList.innerHTML = "";
});
