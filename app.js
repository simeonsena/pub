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
    function vowelsOnly(word){
       const vowels = ['a','e','i','o','u','A','E','I','O','U'];
       let vowelArray = [];
       for (let i = 0; i < word.length; i++) {
           let letterOfWord = (word[i]);
           for (let j = 0; j < vowels.length; j++) {
               if (letterOfWord === (vowels[j])) {
                   vowelArray.push(vowels[j]);
               }
           }
       }
       let endResult = vowelArray.join('');
       console.log(endResult)
   }
    