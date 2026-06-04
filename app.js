let addTask = document.getElementById("addTask");
let task = document.getElementById("task");
let list = document.getElementById("task-list");

addTask.addEventListener("click", () => {
    list.innerHTML += `<div class="main"><li>${task.value}</li><div>
  <button onclick="edit(this)">edit</button>
  <button onclick="deleted(this)"><i class="fa-solid fa-trash"></i></button></div></div>`;
  task.value = " ";
});

function edit(element) {
    element.addEventListener("click", () => {
        task.value=element.parentNode.parentNode.firstChild.innerText;
        addTask.innerHTML = "Edit"
    })
}

function deleted(element){
    element.addEventListener("click", () => {
        element.parentNode.parentNode.innerHTML= " ";
    })
}
