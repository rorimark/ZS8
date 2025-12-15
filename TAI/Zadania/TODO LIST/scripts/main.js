const taskForm = document.querySelector("#task-form");
const taskInp = document.querySelector("#task-input");
const taskSubmitBtn = document.querySelector("#task-submit");
const taskHolder = document.querySelector(".task-holder");
const taskList = document.querySelector(".task-list");

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const li = document.createElement("li");
  li.classList.add("task");
  li.innerHTML = `
  ${taskInp.value}
  `;

  taskList.appendChild(li);
  console.log("Added task: " + li.innerText);
});
