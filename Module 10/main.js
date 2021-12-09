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
const teaOrder ={
    variety     : 'oolong',
    teaName     : 'winter sprout',
    origin      : 'taiwan',
    price       : '12.99',
    hasCaffeine : true,
    quantity    : 3
};
// old ES6
// const price = teaOrder.price;
// const quantity = teaOrder.quantity;
// const teaName = teaOrder.teaName

//De-structured
const { price, quantity, teaName, ...others } = teaOrder;
const {origin} = teaOrder;

