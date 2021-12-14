//Objec enhancements: http://curric.rithmschool.com/springboard/lectures/js-object-enhancements/
//let and const
/*

*/
let mood = 'fantasic'
function getMood(num){
    let mood = 'meh';
    if(num <3){
        let mood = 'bad';
    }
    return mood;
}

// const PI = 3.14;
// PI = 42

//10.3
// arrow functions replace runction expressions and anonymous  function expressions. Can be passed as callbacks
//function declaration
function greet1(){}

// function expression. saving into a variable
const add = function(x,y){
    return x + y;
}
// arrow function
const add2 = (x,y) => {
    return x + y;
}

//anonymys function expression
// Array.map(function(x){
//     return x* 2;
// })

// [2,3,6,1,78,4].reduce(function(max, currNum){
//     Math.max(max,currNum)
// })

[2,3,6,1,78,4].reduce((max,currNum) => {
   return Math.max(max,currNum);
})

//arrow function shortcuts. only works if you want to return a single value
// [2,3,6,1,78,4].forEach(n => {
//     console.log(n * 10);
// });

const greet = () => {
console.log('hi');
}

//long. 64 characters
[2,3,6,1,78,4].filter(function(num){
    return num % 2 ===  0;
})

// arrow function with implicit return - 47 characters
// [2,3,6,1,78,4].filter((num) => num % 2 ===  0);

// function expression
//long way
const double1 = (n) =>{
    return n * 2;
};
//short
const double=(n)=>n*2;

//without using implicit return
[2,3,6,1,78,4].map((n) =>{
    if(n % 2 === 0){
        return 'even';
    }
    return 'odd';
});

//arrow function using implicit return. has to be only one expression to be returned
// and terniary return
[2,3,6,1,78,4].map((n) =>(n % 2 === 0 ? 'even' : 'odd'));


// const dailyRainTotals = [[9.3,6,1,78,4], [2,3.8,6,1,4.9], [2,9.8,6,1,8,1.7]];
// dailyRainTotals.map((hourlyRainTotals) =>{
//     return hourlyRainTotals.reduce((sum, inchesOfRain) => {
//         return sum + inchesOfRain;
//     });
// });
const dailyRainTotals = [[9.3,6,1,78,4], [2,3.8,6,1,4.9], [2,9.8,6,1,8,1.7]];
dailyRainTotals.map((hourlyRainTotals) => hourlyRainTotals.reduce((sum, inchesOfRain) => sum + inchesOfRain));


//arrow function gotchas
const makeMath = (num) => 
 ({
    double: num * 10,
    square: num * num
});

// const cat ={
//     name:'Nutters',
//     meow: function(){
//         return `${this.name} says WHAT DOES THE CAT SAY!`;
//     }
// };
const cat ={
    name:'Nutters',
    eat: function(){
        console.log(this);
                 return `${this.name} mm m mmm mm m`;
             },
    meow: ()=>{
        console.log(this);
        return `${this.name} says WHAT DOES THE CAT SAY!`;
    }
};

const double9 = arr => arr.map(val=> val * 2)
const double4 = arr => arr.map(val => val * 2);   
  
const squareAndFindEvens = numbers => numbers.map(val => val **2).filter(square=> square % 2 === 0);

//10.4 - rest and spread operator. share the same operator
//arguments is not an actual array. it's an array-like-object
//it has a lenght property and can be accessed at a specific index but does not have built in arra methods like map, filter
//arguments object doesn't work in arrow functions
//what we used to do: 
// function max(){
// console.log(arguments);
// }
//old way
function sum(){    
    const args = Array.from(arguments);
    return args.reduce((sum, val)=>{
        return sum+ val;
    });
}
//new way
function sum(...nums){
    return nums.reduce((sum,n)=> sum + n);
}
//works with arrow functions
const sumAll=(...values) => {
    return values.reduce((sum,n)=> sum + n);
}



//doesnt work
// const max = () =>{
//     console.log(arguments);
// };
const max = function(){
   const args = Array.from(arguments); //turns arguments object into an actual array
  return args.reduce((max, currVal)=> {
return currVal > max ? currVal : max; //ternerary operator
   });
};

// can collect the rest of the arguments
function makeFamily(parent1, parent2, ...kids){
return {
    parents : [parent1, parent2],
    children: kids.length ? kids : 0     
    };
}

//spread. takes a collection and spreads it accross objects
//can take a collection(iterable) and spreads it into separate pieces
//
const nums = [4,5,88,123,.92,34];
Math.max(nums)//NaN
Math.max(...nums)//123
// const filterByType = (type, ...vals)=>{
//     return vals.filter((v)=>
//     }
const things = [23, 45, true, false, 0, 'hello', 'goodbey'];

//
const palette = ['llavender berry', 'sun yello', 'orchd orange'];

//doesnt make a copy. remember arrays are reference type.
//making change to copy does not affect original
//one way to update original array is .slice();
//const paletteCopy = palette.slice();
//spreads array into an array literal
//takes arrray and spreads it accross a new array.
//const paletteCopy = [...palette]

//becomes useful when adding on and combining arrays
const paletteCopy = ['sky blue',...palette, 'grass green']

//10.6 De-structuring
//https://www.youtube.com/embed/p-HXBd41Pok?showinfo=0&controls=1&rel=0&autoplay=1 
const teaOrder ={
    variety     : 'oolong',
    teaName     : 'winter sprout',
    origin      : 'taiwan',
    price       : '12.99',
    hasCaffeine : true,
    quantity    : 3,
    brewTemp    : 180
};
// old ES6
// const price = teaOrder.price;
// const quantity = teaOrder.quantity;
// const teaName = teaOrder.teaName

//De-structured. can use 
const { price, quantity, teaName, ...others } = teaOrder;
const {origin} = teaOrder;

//can set default value with destructure
//only destructures if not found, set it. can rename and add defualt at the same time
const {brewTemp: temp = 175}= teaOrder;
//can assigne new variable name
const{teaName: tea} = teaOrder;

function checkout(tea){
    const{quantity = 1, price} = tea;
return quantity * price;    
}
    checkout(teaOrder);
    const order1 ={
        variety     : 'oolong',
        teaName     : 'winter sprout',
        origin      : 'taiwan',
        price       : '12.99',
        hasCaffeine : true,
        quantity    : 3,
        brewTemp    : 180
    };

//destructuring Arrays http://curric.rithmschool.com/springboard/lectures/js-destructuring/
//only position in array matters. add commas to skip an element

const order2 ={
    variety     : 'green',
    teaName     : 'Earl Grey, Hot',
    origin      : 'England',
    price       : '12.99',
    hasCaffeine : true,
    quantity    : 3,
    brewTemp    : 180
};
function getTotal({ quantity: qty = 1, price }) {
    return qty * price;
}

const longJumpResults = ['Tommy', 'Jessica', 'violet']
const swimMeetResults = ['Japan', 'France', 'England']

function awardMedals([gold, silver, bronze]){
    return {
        gold,
        silver,
        bronze
    };
}

//destructuring nested  objects 
//https://www.youtube.com/embed/QQbo8N5x0M0?showinfo=0&controls=1&rel=0&autoplay=1
//swapping variables using destructuring
let delicious = 'Mayonaise'
let disgusting = 'Whipped Cream'
//[disgusting, delicious] = [delicious, disgusting]


//10.7 Maps. with objects, all of the Keys will be converted into strings. It works with bools and 
//1. https://www.youtube.com/embed/W9sWG3soU2g?showinfo=0&controls=1&rel=0&autoplay=1
//set using = new Map();
//can set key, value pairs with .set
const myMap = new Map();
myMap.set(7, 'seven');
myMap.set('7', 'seven string');

const empty = [];
myMap.set(empty, 'empty array moron!');
myMap.set(true, 'TRUE BITCHES!!!!');

myMap.get(7);

// https://www.youtube.com/embed/bDlyttMpbfo?showinfo=0&controls=1&rel=0&autoplay=1
//can use functions as keys
const add3 =(x,y) => x + y;
const mult =(x,y) => x * y;

const funcCalls = new Map();
funcCalls.set(add3, 0);
funcCalls.set(mult, 1);

funcCalls.set(add,1);
funcCalls.set(mult, 9);

//built in methods
const bandData = [
    [3, '3 doors down'],
['three', 'three dog night'],
['nine', "nine inch nails"],
[41, 'sum 41']
];
const bandMap = new Map(bandData);
//10.3 map methods
//   https://www.youtube.com/embed/bDlyttMpbfo?showinfo=0&controls=1&rel=0&autoplay=1
//can take any map and turn it into an array using spread ...
//[...bandMap]
//can use .set to add to array. can chain set commands
bandMap.set(182,'Blink-182').set('twenty', 'Matchbox twenty');

//has
//bandMap.has(41) // true
//bandMap.delete('twenty')// deletes matchbox twenty
//bandMap.clear() // emties entire array
//bandMap.keys() allows to itereate over the keys
//[...bandMap.keys()]

//10. 4 looping with maps. https://www.youtube.com/embed/CF9T18nXPlA?showinfo=0&controls=1&rel=0&autoplay=1
//order
//forEach - value then key
// bandMap.forEach((val, key) =>{
//     console.log(key + '=>' + val)
// });

for(let [key,value ] of bandMap){
    console.log(key, '=', value);
}
//10.5 Sets https://www.youtube.com/embed/v1xCpIOeb3M?showinfo=0&controls=1&rel=0&autoplay=1
//all values in a set are unique. any type of value can be used
// sets only contain unique variables

//Also good at elimnating duplicates
const bannedHashTags = new Set(['nofiter','justsaying', 'winning', 'yolo']);

//add to a set. can be chained
bannedHashTags.add('bestlife').add('selfie');
//bannedHashTags.has('yolo')
// .delete, .clear()

//check if a value is in the set

function filterHashTags(tags){
    const bannedHashTags = new Set(['nofiter','justsaying', 'winning', 'yolo']);
return tags.filter((tag)=>!bannedHashTags.has(tag))
}

// Set is really good at checking if a value is included in an array 
const susansTags = ['happymonday','yolo','winning', 'sunset']

//filtering an array
const ages = [45,23,11,54,45,11,65,13,14,12];
[...new Set(ages)];
//.add, .delete, .has .clear(),

// recap https://www.youtube.com/embed/t04VhDcXXOw?showinfo=0&controls=1&rel=0&autoplay=1

//maps - keys can be any data type.

