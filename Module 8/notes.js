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
 
//8.9 some and every. both return a boolean.
// Some - iterates through arra. runs callback on all values. if at least one value true, returns true.

words.some(function(word){
    return word.length > 20
})

words.some(function(word){
    return word.indexOf('sdf') !==-1
})
//every: iterates through array. runs callback on all values. if callback returns at least one false, returns false. otherwise, returns true
words.every(function(w){
    return w.length > 5
})

function allStrings(arr){
    return arr.every(function(el){
       return typeof el === 'string'
    })
}

//find iterates through array. runs callback on each,, value. if callback ,re,turn true at any point, it returns thr first value in the array. otherwise, it returns undefined
let scores =[0,0 ,0,0,5,56,99,34,87,0,88]
scores.find(function(score){
    return score > 75
})

scores.find(function(score){
    return score !==0 && score % 2 === 0;
})

const evenScores = scores.filter(function(score){
    return score % 2 ===0;
})
const firstEven = scores.findIndex(function(score){
    return score !==0 && score % 2 === 0;
})

function partition(arr, pivot){
    const pivitIdx = arr.findIndex(function(el){
        return el > pivot;
    });
    const left = arr.slice(0, pivitIdx);
    const right = arr.slice(pivitIdx);
    return [left, right]
} 

//8.3 reduce. built in array method. accepts callback. itereatres througharray. runs callback on easch value in arra. the first parameter to the callback is either the first value in the array or the optional second parameter. the first parameter is the accumulator. the returned value becomes the new value
const nums = [20,10,99,-89,66,87,20,87,59];

let total2 = 0;
for(let num of nums){
    total2 += num;
}
console.log(total2);

let min = nums[0];
for(let i = 1; i < nums.length; i++){
    if(nums[i] < min) min = nums[i];
}
console.log(min)

const str = 'lollapalooza'
let charFreq ={};
for(let char of str){
    if(charFreq[char]){
        charFreq[char ]=+ 1;
    }
    else{
        charFreq[char] =1;
    }
}

const words2 =['hello', 'i','love', 'you']
words2.reduce(function(accum, nextWord){
    console.log(accum, nextWord)
    return accum + nextWord;
});

const midtermScores = [78,88,56,99,68,85,44];
const finalsScores = [91,78,88,93,68,85,76];

const minMidtermScore = midtermScores.reduce(function(min, nextScore){
    // if(nextScore < min){
    //     return nextScore;
    // }
    // return min;
    //tertiary form
    return nextScore < min ? nextScore : min;
})
const maxScore = midtermScores.reduce(function(max, nextScore){
    return nextScore > max ? nextScore : max;
});

const minFinalsScore = finalsScores.reduce(function(min, nextScore){
return nextScore < min ? nextScore : min;
})

const minOverallScore = finalsScores.reduce(function(min, nextScore){
    return nextScore < min ? nextScore : min;
    }, minMidtermScore)

////////////////////////////
let form = document.querySelector('form');

//listen for form submission
form.addEventListener('submit', e => {
	e.preventDefault();
	createMeme();
    console.log()
	form.reset();
});



createMeme = () => {
	let newDiv = document.createElement('div')
    let nameTxt = document.getElementById('name').value;
    form.append(newDiv); 
	newDiv.classList.add('letter');
    newDiv.style.fontSize = "150px";
    newDiv.append('Hello ' + nameTxt +', I Love You!')
    //const h1 = document.querySelector('h1');
function random(){
	const r = Math.floor(Math.random() * 256);
	const g = Math.floor(Math.random() * 256);
	const b = Math.floor(Math.random() * 256);
	return `rgb(${r},${g},${b})`
}
const letters = document.querySelectorAll('.letter');
setInterval(() => {
for(let letter of letters){
	letter.style.color = random();
	}
}, 750);
}
