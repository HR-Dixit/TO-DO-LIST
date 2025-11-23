// script.js

function addTask() {
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    // li element banate hain
    const li = document.createElement("li");
    li.textContent = taskText;

    // delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.style.marginLeft = "10px";
    deleteBtn.onclick = function () {
      taskList.removeChild(li);
    };

    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    // input clear karna
    taskInput.value = "";
  } else {
    alert("Please enter a task!");
  }
}