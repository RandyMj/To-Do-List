const addTaskInput = document.getElementById("addTaskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskListContainer = document.getElementById("list-container");
const actualDate = new Date().toDateString();

addTaskBtn.addEventListener("click", addNewTask);

function addNewTask() {
  if (!addTaskInput.value) {
    alert("Add a valid task!");
  } else {
    let createNewTask = document.createElement("div");
    createNewTask.classList.add("task_details");
    taskListContainer.append(createNewTask);
    createNewTask.innerHTML = `
      <div class="task">
      <p class="task_date">Creation Date: ${actualDate}</p>
      <p class="task_description">Task description: ${addTaskInput.value}</p>
      </div>
      
      <div class="checkDelete">
      <button class="checkBtn" id="checkBtn">
      <img src="./src/assets/check.svg" alt="" class="checkImg" />
      </button>
      <button class="deleteBtn" id="deleteBtn">
      <img src="./src/assets/delete.svg" alt="" class="deleteImg" />
      </button>
      </div>
      `;
    addTaskInput.value = "";
  }
}
