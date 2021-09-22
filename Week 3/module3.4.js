// 2 ** 3 -- exponent
// variables are like labeled jars
//let someName = value
//let age = 72;
//to change a let value, age = age -1;
// age += 1 : age =73
// age + 1 : doesn't update the variable. age is still 72
// age ++; : add one. -- subtract one
//unary operators have one side counter++ :one side. 
// > greater than
// < less than
// shift + alt + down arrow = copy + paste

// problem 1
// function fizzBuzz(num){
    
//     if(num % 3 === 0){
// console.log('Fizz');
//     }
//     else if(num % 5 === 0){
// console.log('Buzz')
//     }
//     else if(num % 15 === 0){
//         console.log('FizzBuzz')
//     }
//     else{
//         console.log(num);
//     }
// }

// problem 2
// function isPangram(sentence){

// let alphabet = 'abcdefghijklmnopqrstuvwxyz'
// for (let char of alphabet){
//     if(sentence.indexOf(char) === -1){
// return false;
//         } 
//     }
//     return true;
// }

// function countDown(num){
//     let userInput = num;
//     let timer = 1000;
//     let iterations = setInterval(count, timer);

// function count(){
// userInput--;
//     if( userInput > 0){
//         console.log(userInput);
//     }
   
//     else {
//                    clearInterval(iterations);
//                  console.log ('DONE!');
                 
//         } 
//     }
// }

function randomGame(){
  let randomNumber;
    function randomNumberGenerator(){
        randomNumber = math.random()
console.log(randomNumber);
    }
} 


function greet(){
console.log('Hi, fuck YOU!')
}
function diss(){
    console.log('YOU ARE AN UGLY C.H.U.D.!!!!')
}
