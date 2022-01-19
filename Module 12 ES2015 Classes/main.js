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
class Triangle2{
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

//constructors.The constructor method is a special method of a class for creating and initializing an object instance of that class.  https://www.youtube.com/embed/8B8gJeY1EC4?showinfo=0&controls=1&rel=0&autoplay=1 
class Triangle{
    constructor(a,b,c){
        console.log('inside triangle constructor')
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
        return`Triangle with sides of ${this.a} and ${this.b} and ${this.c}`;
    }
    getArea(){
        const{a, b, c} = this;
        const s = (a + b +c)/2;
        return Math.sqrt(s*(s-a) * (s-b) * (s-c));
    }
    //can also call other methods from within a method within a class
    isBig(){
        return this.getArea()> 50;
    }
    }
//adding methods to a class

const t1 = new Triangle(3,4,5)
const t2 = new Triangle(5,9,10);
t1.display();

// 12.11 https://www.youtube.com/embed/8q-F8O1VBig?showinfo=0&controls=1&rel=0&autoplay=1
//Super - The super keyword is used to access and call functions on an object's parent. When used in a constructor, the super keyword appears alone and must be used before the this keyword is used. The super keyword can also be used to call functions on a parent object.
class RightTriangle extends Triangle{
    constructor(a,b,c){
        if(a*a +b*b !== c*c){
            throw new Error('invalid C side for right triangle')
        }
    console.log('inside right triangle constructor')
super(a,b,c); 
this.hypot =c;   
}
//can add additional methods that don't exist on base triangle class
isRightTriangle(){
    return true;
}
// can override base methods. Simply runs first version it hits
// display(){
//     console.log(`Right Triangle with sides of ${this.a} and ${this.b}`);
    // or even better, use super and concate new information
    display(){
        return 'Right ' + super.display();
    }
}
}