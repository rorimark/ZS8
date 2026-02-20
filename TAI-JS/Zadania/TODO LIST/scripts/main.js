const taskForm = document.querySelector("#task-form");
const taskInp = document.querySelector("#task-input");
const taskSubmitBtn = document.querySelector("#task-submit");
const taskHolder = document.querySelector(".task-holder");
const taskList = document.querySelector(".task-list");

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (taskInp.value.trim() === "") return;

  const li = document.createElement("li");
  li.classList.add("task");
  li.textContent = taskInp.value;

  taskHolder.appendChild(li);
  console.log("Added task: ", li.innerText);

  taskInp.value = "";
});

taskHolder.addEventListener("click", (e) => {
  if (!e.target.classList.contains("task")) return;

  if (e.target.style.textDecoration === "line-through") {
    e.target.style.textDecoration = "none";
    e.target.style.color = "black";
  } else {
    e.target.style.textDecoration = "line-through";
    e.target.style.color = "rgb(101, 101, 101)";
  }
});
