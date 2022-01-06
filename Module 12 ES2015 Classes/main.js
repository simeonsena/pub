// 12.3 ES2015 Classes. https://www.youtube.com/embed/now4POlhLRM?showinfo=0&controls=1&rel=0&autoplay=1

const color ='teal';
const obj = {};
obj.color = '#3723FF'; //Adds a new property. The property has the key of color
obj[color] = '#3723FF'; //array is evaluated and turned into  a string
obj[1+4-2*8]= '#3723FF'; //evaluates to -11: '#3723FF';

//if ever need to get keys or values
Object.keys(obj)
Object.values(obj)

for(let[k,v] of Object.entries(obj)){
    console.log(k,v);
}

//12.4 Objects review https://www.youtube.com/embed/3AOnEFV5OuM?showinfo=0&controls=1&rel=0&autoplay=1
//can use objects to group things together.
//Math.max(1,2,3,4)
/*long way
[
const add = (x,y) => x + y;
const multiply = (x,y) => x * y;
const square = (x) => x * x;
const power = (x,y) => x ** y;

 const myMath ={};
 myMath.add = add;
 myMath.mult = mult;

const myMath ={add, mult, square, power}
]*/
/* shorter
cosnt myMath ={
    add : function(x,y) {
        return x + y;
    },
    mult : (x,y) => {
        return x*y;
    }
};
*/
//inline
const myMath = {
    add(x,y) {
        return x+y;
    },
    square(x) {
        return x*x;
    }
};
//mixing data and objects https://www.youtube.com/embed/aGU2wxzmbUs?autoplay=1&showinfo=0&rel=0&controls=1

/* long way with functions
function getHypotenuse(a,b){
    return Math.sqrt(a ** 2 + b ** 2);
}
function getArea(a,b){
    return a*b/2;
}
const side1 = 4;
const side2 = 3;
const side3 = getHypotenuse(side1, side2);
const area = getArea(side1, side2);
*/

//this and methods https://www.youtube.com/embed/aGU2wxzmbUs?autoplay=1&showinfo=0&rel=0&controls=1
const rightTriangle ={
    a           : 9,
    b           : 12,
    getArea(){
        return this.a * this.b /2;
    },
    getHypotenuse(){
        this.printThis();
        return Math.sqrt(this.a ** 2 + this.b **2);
    }
};

// how to turn above method using classes https://www.youtube.com/embed/kvR_vn--a7c?showinfo=0&controls=1&rel=0&autoplay=1

//constructor class
//define funtion
// Capital letter means set up to be (re)used with new
function Triangle(a,b){
    this.a =a;
    this.b =b;
    this.getArea = function(){
        return this.a * this.b /2;
    };
    this.getHypotenuse = function(){
        return Math.sqrt(this.a ** 2 + this.b **2);
    };
}

Triangle(5,7); //returns undefined using the new operator
const tri1 = new Triangle(3,4);
tri1.getHypotenuse(); //5
const tri2 = new Triangle(9,12)
tri2.getHypotenuse(); //15

//Classes. short blueprint of functionality
//https://www.youtube.com/embed/CkCmWgYi09I?showinfo=0&controls=1&rel=0&autoplay=1

//create a class. Always use a Capital letter
class Triangle{
//define a method for our classes
greet(){
    console.log('Hello from triangle!!!@@@')
}
display(){
    console.log(`Triangle with sides of ${this.a} and ${this.b}`)
}
}
//instantiate new triangles with ()
//manual version without a constructor
const firstTri = new Triangle();
firstTri.a= 3;
firstTri.b= 4;
const secondTri = new Triangle();
secondTri.a=09;
secondTri.b=12;

//constructors. https://www.youtube.com/embed/8B8gJeY1EC4?showinfo=0&controls=1&rel=0&autoplay=1 
class Triangle2{
    constructor(a,b,c){
        for(let side of [a,b,c]){
        if(!Number.isFinite(side) || side <= 0){             
            throw new Error('sides mst be positive numbers');
    }
}
this.a = a;
this.b = b;
this.c = c;
   }
      //define a method for our classes
    greet(){
        console.log('Hello from triangle!!!@@@')
    }
    display(){
        console.log(`Triangle with sides of ${this.a} and ${this.b}`);
    }
    }
//adding methods to a class
