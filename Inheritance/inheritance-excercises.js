 
//a)Create a Car class with properties (brand, model, motion) and methods (check motion, accelerate, break).
//Check motion method should check the speed and returns if the car are in move or not (speed is greater than zero). Accelerate method should increase the speed for some number we provide.
//Break method should decrease the speed for the number we provided (pay attention if the speed is negative number after decreasing).
//b) Add the status method that displays all current data for the car (model, brand, motion state, speed => something like "Ford Mondeo is running at 150km/h, car is moving").
//c) Add a new method to stop the car immediately (set the speed to 0). It doesn't need parameters.




class Car {
 constructor (brand, model, speed){
    this.brand = brand;
    this.model = model;
    this.speed = speed;
 }
 checkMotion(){
    if (this.speed == 0){
        return console.log("Car is not moving");
    } else return ("Car is moving");
 }
 accelerate(num){
    return this.speed =this.speed + num;
 }

 break(num){
  if (this.speed < num){
    return "Your number must be less"
  } else return this.speed =this.speed - num;
 }
 status (){
   return this.brand +" "+ this.model +" is running at "+ this.speed +"km/h" + "," +this.checkMotion();
 }
 stopCar(){
    return this.speed=0;
 }
}

var car1 = new Car ("Audi", "A3", 230);
var car2 = new Car ("Ford", "F5", 60);
var car3 = new Car ("BMW", "C3", 100);

console.log(car1.status());
console.log(car2.accelerate(30), car2.status());
console.log(car3.break(150),car3.stopCar());

//2.
//a)Create a TV class with properties like brand, channel and volume. Specify brand in a constructor parameter. Channel should be 1 by default. Volume should be 50 by default.
//b) Add methods to increase and decrease volume. Volume can't never be below 0 or above 100.
//c) Add a method to set the channel. Let's say the TV has only 50 channels so if you try to set channel 60 the TV will stay at the current channel.
//d) Add a method to reset TV so it goes back to channel 1 and volume 50. (Hint: consider using it from the constructor).
//e) It's useful to write a status, that returns info about the TV status like: "Panasonic at channel 8, volume 75".
//f) Create a TV object and test it!

class Tv {
    constructor (brand ="LG", chanel = 1, volume =50){
        this.brand = brand;
        this.chanel = chanel;
        this.volume = volume;
    }
    increaseVolume(num){
        var sum = this.volume + num;
        if (sum >100){
            return ("Tv is too loud, you need to decrease volume")
        } else return this.volume =sum;

    }
    decreaseVolume(num){
        var sum = this.volume-num;
        if (sum <0){
            return ("Your TV is mutted")
        } else return this.volume =sum;
    }
    setChannel(num){
        if (num>50){
          return  this.chanel = chanel;
        } else return this.chanel = num;
    }

    resetTV(){
     return  new Tv().chanel + " " + new Tv().volume;
    }
    status(){
        return this.brand + " at channel " + this.chanel + " , " + " volume " + this.volume;
    }
}

var tv1 = new Tv();
tv1.decreaseVolume(15);
tv1.setChannel(15);
console.log(tv1.status());
console.log(tv1.resetTV());