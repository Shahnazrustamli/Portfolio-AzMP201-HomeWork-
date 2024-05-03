const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
    box.addEventListener('click', function () {
        const text = this.nextElementSibling;
        const plusIcon = this.querySelector('#plus-circle');
        const minusIcon = this.querySelector('#minus-circle');

        if (text.style.display === 'block') {
            text.style.display = 'none';
            this.style.backgroundColor = '#fff';
            plusIcon.style.display = 'block';
            minusIcon.style.display = 'none';
        } else {
            text.style.display = 'block';
            this.style.backgroundColor = '#007bff';
            plusIcon.style.display = 'none';
            minusIcon.style.display = 'block';
        }
    });
});


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
    let editBtn = document.createElement("button")

    todoItem.className = "todoItem";
    todoItemText.className = "todoItemText";
    deletebtn.className = "deleteBtn"
    editBtn.className = "editBtn"

    todoItemText.innerText = addTodoInput.value;
    deletebtn.innerText = "Delete"
    editBtn.innerText = "Edit"

    todoItem.append(todoItemText, deletebtn, editBtn);
    todoBox.append(todoItem);

    deletebtn.addEventListener("click", function (e) {
        e.target.parentElement.remove()
    })

    editBtn.addEventListener("click", function (e) {

    })
}