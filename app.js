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

document.getElementById('form').addEventListener('submit', function (evt) {
  evt.preventDefault();
});