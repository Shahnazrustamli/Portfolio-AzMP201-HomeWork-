// let box = document.querySelectorAll(".boxes")

// box.forEach(elem => {
//    elem.addEventListener("click", ()=>{
//     elem.classList.toggle("active")
//    })
// })

// let boxes = document.querySelectorAll(".boxes");

// boxes.forEach(box => {
//     let text = box.querySelector(".text");
//     box.addEventListener("click", function () {
//         text.classList.toggle("active");
//     });
// });


const addTodo = document.querySelector(".addTodo")
const addTodoInput = document.querySelector(".addTodoInput")
const todoBox = document.querySelector(".todoBox")
const deleteAll = document.querySelector(".deleteAll")
deleteAll.addEventListener("click", function () {
    todoBox.innerHTML = ""
})
addTodo.addEventListener('submit', function (e) {
    e.preventDefault()
    createTodo()
    addTodoInput.value = "";
})

function createTodo() {
    let todoItem = document.createElement("div");
    let todoItemText = document.createElement("p");
    let deletebtn = document.createElement("button");
    let editBtn = document.createElement("editBtn")

    todoItem.className = "todoItem";
    todoItemText.className = "todoItemText";
    deletebtn.className = "deleteBtn"
    editBtn.className = "editBtn"

    todoItemText.innerText = addTodoInput.value;
    deletebtn.innerText = "Delete"
    editBtn.innerText="Edit"

    todoItem.append(todoItemText, deletebtn, editBtn);
    todoBox.append(todoItem);

    deletebtn.addEventListener("click", function (e) {
        e.target.parentElement.remove()
    })

    editBtn.addEventListener("click", function (e) {
        
    })
}