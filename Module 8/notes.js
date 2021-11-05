//8.2 callback functions
// function declaration
function holler(){
    console.log('fuck you!')
}

// anaonymous function expression
const whisper = function(){
console.log('up yours!!')
}

function add(x,y){
    return x + y;
}

function subtract(x,y){
  return x - y;  
}

function multiply(x,y){
    return x * y;
}

function divide(x,y){
    return x / y;
}

function power(x,y){
   return x ** y;
}
// can also put them in an array
const mathFuncs =[add, subtract, multiply, divide, power]

// functions as arguments
//setTimeout(whisper, 4000);

// function t(){
//     for(let t = 0; t < 25; t++){
//         doUntil();
//     }
// };
// //l
// function doUntil(){


// //setTimeout(console.log(t),4000);
// setTimeout(holler, 4000);
// setTimeout(whisper, 4000);

// }

function doMath(a,b,mathFunc){
    return mathFunc(a,b);
}

doMath(300,25, function(a,b){
    console.log(a ** b)

});

function doAllMath(a,b,mathFuncs){
    for(let func of mathFuncs){
        console.log(func(a,b))
    }
}

//8.3 forEach is an array method. it calls the function on every element in an array
const colors =['teal','orange','purple','peach']
// function yell(val, i){
//    const caps = val.toUpperCase()
// console.log(`at index ${i}, ${caps}`)
// }
// colors.forEach(yell);

const prices =[34,34,90,2.99]
//forEach is totally outdated and was replaced by for (of)
// let total =0;
// prices.forEach(function(price){
//     total += price;
// });
let total = 0;
for(let price of prices){
    total += price;
}
console.log  (total)

//myForEach([4,5,6], function(){console.log(myForEach)})
// let myForEach = [4,5,6];
// let totalEach = 0;
// for (let Each of myForEach){
//     totalEach =+ Each;
//     }
//     console.log(totalEach)

function myForEach(arr, callback){
for(let i = 0; i< arr.length; i++){
    callback(arr[i],i)
}
}
myForEach(colors, function(color, i){
    console.log(color.toUpperCase(),'at index of', i);
})
//this does the same thing as all the code above
colors.forEach(function(color, i){
    console.log(color.toUpperCase(),'at index of', i);
})

//Map is a collection of elements where each element is stored as a Key, value pair. Map object can hold both objects and primitive values as either key or value. When we iterate over the map object it returns the key, value pair in the same order as inserted
const F2 =prices.map(function(num){
    return num * num;
})

const doubles = prices.map(function(num){
    console.log(num *2)
})

const todos =[
    {
      id        : 1,
      text      : 'Walk Dapper',
      priority  : 'high, unless you want to clean up dog shit!'
    },
    {
        id        : 2,
        text      : 'Cook dinner',
        priority  : 'low'
      },
      {
        id        : 3,
        text      : 'study',
        priority  : 'high'
      }
]
const todoText = todos.map(function(todo){
    return todo.text;
})

//my own version of map
function myMap(arr, callback){
    const mappedArray =[];
    for(let i =0; i< arr.length; i++){
    mappedArray.push(callback(arr[i]))
}
return mappedArray;
}
const priorityMap = myMap(todos, function(todo){
    return todo.priority;
})

//8.6 filter - creates new array. loops through the array. Runs callback on each value.pushes true values into new array
const words = [
    'asfljjljljflsdjfladf',
    'sdft',
    'sdfljetrlmvlgroituy4nekl',
    'bfdnke',
    'vjaor34hnfdkgnrk4rhsadvf',
    'ldksjf',
    'asdfmflkrgrjlfdmfsdlkj;eio'
];
const containsVowel = function(word){
    for(let char of word){
        if(isVowel(char)) return true;
    }
    return false;
}
const isVowel = function(char){
    return 'aeiou'.indexOf(char) !== -1;
}
const  longWords = words.filter (function(word){
    return word.length >= 20;
});

const filteredWords = words.filter(function(w){
    return w[0] === 's' || w[0] === 'a'
});

const containVowels = words.filter(containsVowel)
const noVowels = words.filter(function(word){
    return !containsVowel(word)
});

//8.7 array filters
const allCheckboxes = document.querySelectorAll('input[type="checkbox"]')
const checked = Array.from(allCheckboxes).filter(function(box){
    return box.checked;
});
const completedItems = checked.map(function(checkbox){
    return checkbox.parentElement.innerText;
});

function extractCompletedTodos(){
    const allCheckboxes = document.querySelectorAll('input[type="checkbox"]')
    return Array.from(allCheckboxes)
    .filter(function(box){
        return box.checked;
    })
    .map(function(checkbox){
        return checkbox.parentElement.innerText;
    });
}

// the long way without .filter
function myFilter(arr, callback){
    const filteredArray = [];
    for(let i =0; i < arr.length; i++){
        if(callback(arr[i], i, arr)){
            filteredArray.push(arr[i]);
        }
    }
    return filteredArray;
}
myFilter(words, function(word){
    return word.length <=10;
});

const shorties = myFilter(words, function(word){
    return word.length<= 10;
});

const everyOtherWord = myFilter(words, function(word, i){
    return i % 2 === 0;
});