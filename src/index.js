document.addEventListener("DOMContentLoaded", () => {
  // your code here
});

let todoForm = document.getElementById('create-task-form')
let todoInput = document.querySelector("#new-task-description")
let todoList = document.querySelector("#tasks")

todoForm.addEventListener('submit', handleSubmit)
todoList.addEventListener('click', handleClickTodo)

function handleSubmit(e){
  e.preventDefault()
  // alert('The form was submitted!')
  // console.log("the event e is:", e)
  let todo = todoInput.value
  let todoHTML = `<li>${todo}</li>`
  // let todoHTML = `<li><button value='${todo}' >X</button></li>`
  todoList.innerHTML += todoHTML
  todoInput.value = ""
}

function handleClickTodo(e){
  console.log("one of the LIs was clicked, it was:", e.target)
  e.target.remove()
}

