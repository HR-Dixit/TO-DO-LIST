// script.js
function addTask() {
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const li = document.createElement("li");

    // task text span
    const span = document.createElement("span");
    span.textContent = taskText;

    // EDIT button
    const editBtn = document.createElement("button");
    editBtn.textContent = "✏️";
    editBtn.style.marginLeft = "10px";
    editBtn.onclick = function () {
      const newTask = prompt("Edit your task:", span.textContent);
      if (newTask !== null && newTask.trim() !== "") {
        span.textContent = newTask.trim();
      }
    };

    // DELETE button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.style.marginLeft = "5px";
    deleteBtn.onclick = function () {
      taskList.removeChild(li);
    };

    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = "";
  } else {
    alert("Please enter a task!");
  }
}