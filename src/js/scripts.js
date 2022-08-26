const addTaskInput = document.getElementById("addTaskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskListContainer = document.getElementById("list-container");
const actualDate = new Date().toDateString();

addTaskBtn.addEventListener("click", addNewTask);
// let currentTasks = [];

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
      <button onclick="completedTask()" class="checkBtn" id="checkBtn">
      <img src="./src/assets/check.svg" alt="" class="checkImg" />
      </button>
      <button onclick="deletedTask()" class="deleteBtn" id="deleteBtn">
      <img src="./src/assets/delete.svg" alt="" class="deleteImg" />
      </button>
      </div>
      `;
    addTaskInput.value = "";
    // currentTasks.push(createNewTask);
  }
}

// Function to check and delete tasks. They are called in the html attribute "onclick". Check previous innerHtml in the addNewTasks function.
function completedTask() {
  console.log("Completed");
  // Find the button of the task to check.
  // for (i = 0; i < currentTasks.length; i++) {
  //   let findBtn = document.querySelector(".checkBtn");
  //   findBtn.classList.add([i]);
  //   console.log(findBtn);
  // let validation = findBtn.classList.contains(`${[i]}`);
  // if(currentTasks[i] == findBtn.classList.contains) {}
  // }
}

function deletedTask() {
  console.log("Deleted");
}

// let taskInContainer = document.querySelector(".task_details");
// taskInContainer.setAttribute("class", "inactive");
// taskInContainer.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
