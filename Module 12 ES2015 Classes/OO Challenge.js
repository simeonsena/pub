class Vehicle{    
    make(){
        console.log('Hello from triangle!!!@@@')
    }
    model(){
        console.log(`Triangle with sides of ${this.a} and ${this.b}`)
    }
    year(){
        console.log('Hello from triangle!!!@@@')
    }
    honk(){
        console.log('Beep')
    }
}
let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);
myFirstVehicle.honk(); // "Beep."