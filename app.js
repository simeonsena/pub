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

const newTodo = document.createElement('li');
const ul = document.querySelector('ul');
newTodo.textContent = "Rinse And Repeat"
ul.append(newTodo);