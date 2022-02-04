

//to execute cat.dance('salsa');
//The value of this changes depending on how you call it.

function whatIsThis(){
    console.log('this =', this)
}

const myObj ={
    func: whatIsThis
};

myObj.func();
window.whatIsThis(); 
//https://www.youtube.com/embed/awjQ2CwBx_Q?showinfo=0&controls=1&rel=0&autoplay=1

//this executes whatever is to the left of the .. if there is nothing on the left, it sets it to the window.
//the value of this changes depending on how a function is executed. it's not set in stone until it is executed. It can change depending on how you execute the function.

//https://www.youtube.com/embed/6egrpPnx6bk?showinfo=0&controls=1&rel=0&autoplay=1
const cat = {
    name:'Blue',
    breed: 'Scottish Fold',
    dance: function(dance){
        console.log('this is', this);
        console.log(`Meow, I am ${this.name} and i like to ${dance}
        `);
    },
    play: function(...toys){
        for(let toy of toys){
            console.log(`${this.name} plays with ${toy}`)
        }
    },
   
};
//https://www.youtube.com/embed/8co_KJIVNzI?showinfo=0&controls=1&rel=0&autoplay=1
const blueDance = cat.dance;
//if you want to change teh value of this use call
blueDance.call(cat) 

const dog = {
    breed: 'black lab',
    name : 'elton'
}
blueDance.call(dog, 'break dance');
//call allows you to specify the value of this

cat.dance.call(window, 'salsa');
cat.dance('salsa');

function printThis(){
    console.log('ths====>', this);
}

printThis.call(cat);
printThis.call(window);
printThis.call('you can change this with call as often as you like');

//Bind is a method on functions that returns a bound copy of the function.

//const blueDisco = blue.dance.bind(blue, 'disco');
//baked in disc
//const playsWithSocks = blue.dance.bind(blue, 'left sock', 'right sock');

//https://www.springboard.com/workshops/software-engineering-career-track/learn#/curriculum/16962/15998
const blue = {
    name:'Blue',
    breed: 'Scottish Fold',
    dance: function(dance){
        console.log('this is', this);
        console.log(`Meow, I am ${this.name} and i like to ${dance}
        `);
    },
    play: function(...toys){
        for(let toy of toys){
            console.log(`${this.name} plays with ${toy}`)
        }
    },
    greet(){
        alert(`${this.name} says Meow`);
    }
    
};
document.querySelector('#btn-1').addEventListener('click', blue.greet.bind(blue))
const btnA = document.querySelector('#a');
const btnB = document.querySelector('#b');
const btnC = document.querySelector('#c');

function popUp(msg){
    alert('Robot overlord says ' + msg)
}

//bind replaces the below code
// btnA.addEventListener('click', function(){
//     popUp('BUTTON A SAYS FUCK YOU!!!!!')    
// });
// btnB.addEventListener('click', function(){
//     popUp('BUTTON B SAYS up YOURS D-Bag!!!!!')
//     });
// btnC.addEventListener('click', function(){
//     popUp('button C says your an Ass hole!!!!!')    
// })

//using bind to bake in an arguement rather than having to add separate callback functions
btnA.addEventListener('click', popUp.bind(null, 'Button A Says Fuck Off!!'))
btnB.addEventListener('click', popUp.bind(null, 'Button B Says Fuck you!!'))
btnC.addEventListener('click', popUp.bind(null, 'Button B Says up yours!!'))

//https://www.youtube.com/embed/kmvW53DS0xU?showinfo=0&controls=1&rel=0&autoplay=1

//arrow functions with this. Arros functions do not make their own this. it is set to the object 
const greeter ={
    msg   : 'Liam you smell like rotten chickin',
    sayHi : function(){ //()=> will send it to the windo
        alert(this.msg);
    },
    // waitAndGreet: function(delay){
    //     setTimeout(function(){
    //         alert(this.msg)
    //     }.bind(this), 
    //     delay
    //     );        
    // }
    waitAndGreet: function(delay){
        setTimeout(()=>{
            alert(this.msg)
        } , delay);               
    }
};