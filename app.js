let add = document.getElementById("add");
let task = document.getElementById("task");
let list = document.getElementById("task-list");
let currentTodo = null;
add.addEventListener("click", () => {
  if (add.innerHTML === '<i class="fa-solid fa-plus"></i> Add') {

    list.innerHTML += `
      <div class="main">
        <li>${task.value}</li>
        <div>
          <button class="editDeleteBtn" onclick="edit(this)">
            <i class="fa-solid fa-pen"></i>
          </button>
          <button class="editDeleteBtn" onclick="deleted(this)">
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>`;

    task.value = "";

  } else {

    currentTodo.innerText = task.value;
    task.value = "";

    add.innerHTML = '<i class="fa-solid fa-plus"></i> Add';
  }
});

function edit(element) {
  currentTodo = element.parentNode.parentNode.firstElementChild;
  task.value = currentTodo.innerText;

  add.innerHTML = '<i class="fa-solid fa-check"></i>';
}

function deleted(element) {
  element.parentNode.parentNode.remove();
  task.value = "";
}
