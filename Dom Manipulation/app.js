// listen for the keypress everywhere
// document.addEventListener("keypress", function(event) {
//     if (event.key === "a") {
//       alert("you just pressed the 'a' key!");
//     }
//   });
  
// document.addEventListener('keypress', function(e){
//     console.log(e.key);
// })
// Add a new ToDo
// const ul = document.querySelector('ul') // create
// ul.append(NewTodo) //then add it in

// const newTodo = document.createElement('li');
// const ul = document.querySelector('ul');
// newTodo.textContent = "Rinse And Repeat"
// ul.append(newTodo);


// function makeBody(color){
//   document.body.style.backgroundColor = color;
// }

// const violetBtn = document.querySelector('#violet');
// violetBtn.addEventListener('click', function(){
//   makeBody('violet');
// });
//partially adapted from https://www.webdeveloper.com/d/314977-strike-the-text-when-check-box-is-checked-in-javascript/2
// const removeButtons = document.querySelectorAll('li button');
//const removeList = document.querySelector('#todoList');
const form = document.querySelector('#add-item')
const input = document.querySelector('#todoInput')
const todoList = document.querySelector('#todoList')

todoList.addEventListener('click', function(e){
  if(e.target.tagName === 'BUTTON'){
    e.target.parentElement.remove();
  }
})

function newtodo(text) {
  let li = document.createElement('li');
  let chkbox = document.createElement('input');
  let span = document.createElement('span');

  chkbox.type = 'checkbox';
  span.appendChild(document.createTextNode(text));
  li.appendChild(chkbox);
  li.appendChild(span);

  return li;
}

function addtodo() {
  let todoInput = document.getElementById('todoInput');
  let todoTxt = todoInput.value.trim();
  let todoList = document.getElementById('todoList');

  if (todoTxt === '') { return; }
  todoList.appendChild(newtodo(todoTxt));
  todoInput.value = '';
}

document.getElementById('todoList').addEventListener('click', function (evt) {
  let element = evt.target;

  if (element.type !== 'checkbox') { return; }
  element.nextSibling.classList.toggle('strikeThrough');
});

document.getElementById('cmdNewtodo').addEventListener('click', addtodo);

//prevents page refresh
document.getElementById('add-item').addEventListener('submit', function (evt) {
  evt.preventDefault();
});