// for (let i = 0; i<=1;i++){
//     console.log(i);
//     }

//     const myStudents = [
//         {
//             firstName : 'Zeus',
//             grade     : 86
//         },
//         {
//             firstName : 'Artemis',
//             grade     : 97
//         },
//         {
//             firstName : 'Hera',
//             grade     : 72
//         },
//         {
//             firstName : 'Apollo',
//             grade     : 90
//         }
//     ];
//     for(let i = 0; i<myStudents.length; i++){
//         let student =myStudents[i];
        
//         console.log(`${student.firstName} scored ${student.grade}`);
//     }
//     const word = 'stressed';
//     for(let i = word.lenth -1; i >=0; i--);
    
    //vowels only  
//     function vowelsOnly(word){
//        const vowels = ['a','e','i','o','u','A','E','I','O','U'];
//        let vowelArray = [];
//        for (let i = 0; i < word.length; i++) {
//            let letterOfWord = (word[i]);
//            for (let j = 0; j < vowels.length; j++) {
//                if (letterOfWord === (vowels[j])) {
//                    vowelArray.push(vowels[j]);
//                }
//            }
//        } 
//        let endResult = vowelArray.join('');
//        console.log(endResult)
//    }


// function vowelsOnly(){
//     console.log(`vowels only: ${vowelArray}`)

// }
// function returnVowels(word){
//     const vowels = ['a','e','i','o','u','A','E','I','O','U'];
// let vowelArray = [];
//     for (let i = 0; i < word.length; i++){
//         let letterOfWord = (word[i]);
//         for (let j = 0; j < vowels.length; j++) {
//               if (letterOfWord === (vowels[j])) {
//                 vowelArray.push(vowels[j]);
//     console.log(vowelsOnly);
// }
// }
// }
// console.log(`vowels only: ${vowelArray}`)

// }

//3.1
let colors =['red', 'blue', 'purple']
//for (let i =0; i <colors.length; i++)


// for(let color of colors){
//     console.log(color);
// }

// FOR LOOP TO ITERATE OVER an iterable(strings, arrays)
for(let char of "PURPRLE RAIN"){
    console.log(char)
}

//for in loop will iterate over OBJECTS
const chicken = {
    name: 'laday gray',
    age: 4,
    COLOR: 'black'
}
for(let prop in chicken){
    console.log(`${prop}->${chicken[prop]}`)
}

//-------------------------------------------
// 3.2 error handling
// syntax error -
//reference error - Thrown when you try to access a variable that is not defined
// type error - Trying to do something with a type that you can not

// PROCESS FOR DEBUGGING IS THE SCIENTIFIC METHOD!!

// try catch
// try{
//     undefined.pop();
//     functionThatDoesNotExist();
//     } catch(e) {
//         conlsole.log('on no an error');
//         console.log(e);
//     }
//     console.log('did we make it?');
    
//Try catch
    // function displayInitials(user){
    //     let firstNameLetter;
    //     let lastNameLetter;
    //     try {
    //       firstNameLetter = user.firstName[0].toUpperCase();
    //       lastNameLetter = user.lastName[0].toUpperCase();
    //     } catch(e){
    //       return "Invalid input!";
    //     }
    //     return `Hello ${firstNameLetter}.${lastNameLetter}`;
    //   }
    //   displayInitials({lastName: 'momoa'})

      //3.3 functions
      // functions are considered first class because they are treated like an object. 

      function greet(){
          console.log( 'hi, fuck you!!!')
      }
      function diss(){
        console.log( 'you are an ugly C.H.U.D.!!')
    }
      function repeatThreeTimes(func){
          func();
          func();
      }

      function repeats (num, func){
          for(let repeat in repeats){
              func();
          }
      } 