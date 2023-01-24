(function (){
    console.log("Hi");

   function Person (name,surname){
    this.name = name;
    this.surname = surname; 
    this.getData = function(){
        return this.name + " " + this.surname;
    }
   }

 var person1 = new Person ("John", "Snow");
 var person2 = new Person ("Cersei", "Lancaster");
 var person3 = new Person ("Daenerys", "Targaryen");
 var person4= new Person ("Tyrion","Lannister");
 console.log(person1.getData());


 function Seat(number, category){
    if (number === undefined){
        this.number = Math.floor(Math.random() * 100)+10;
    } else {this.number = number;};

    if (category === undefined){
        this.category = "e";
    } else {this.category = category;}
    this.getData = function(){
        return this.number.toString() + "," + this.category.toUpperCase();
    }
 }

var seat1 = new Seat(1,"b");
var seat2 = new Seat(2,"b");
var seat3 = new Seat(14);
var seat4 = new Seat();
console.log(seat2.number);

console.log(seat1);
console.log(seat2);

function Passanger (person, seat){
    this.person = person;
    this.seat = seat;

    this.getData = function(){                                // extra to show bussiness for b 
     if (this.seat.category == "e"){ this.seat.category="economy"}
     else {  this.seat.category ="bussiness"}

     return this.seat.number + "," + this.seat.category + "," + this.person.getData();
        
    }
}

var passanger1 = new Passanger(person1,seat1);
var passanger2 = new Passanger(person2,seat2);
var passanger3 = new Passanger(person3, seat3);
var passanger4 = new Passanger (person4, seat4);
console.log(passanger1.getData());

function Flight(relation, date, listofPassangers = []){
    this.relation = function(){                                                    //extra to return first and last consonants
        var newRelation =relation.split("-");
        var startingLocation = newRelation[0].match(/[^aeiou]/gi)[0] + newRelation[0].match(/[^aeiou]/gi)[newRelation[0].match(/[^aeiou]/gi).length-1];
        var destinationLocation = newRelation[1].match(/[^aeiou]/gi)[0] + newRelation[1].match(/[^aeiou]/gi)[newRelation[1].match(/[^aeiou]/gi).length-1];
        return startingLocation.toUpperCase() + "-" + destinationLocation.toUpperCase();
    } ;
    this.date = new Date(date);
    this.listofPassangers = function addPassanger(passanger){
        
        return listofPassangers.push(passanger);
    }
    this.numberOfPassagers = function(){
        var sum =0; 
        for (var i = 0; i<listofPassangers.length; i++){
            sum ++;
        }return sum;
    }
    this.getData = function(){
        var listPassangers =[];
    for (var i=0; i<listofPassangers.length; i++){
        listPassangers.push(listofPassangers[i].getData() + "\n\t");
        
    }
    
        return ("\n" + this.date.getDate() + "." + parseFloat(this.date.getMonth()+1) + "."+ this.date.getFullYear()+  "," + this.relation() + "\n\t" + listPassangers);
    }
    
}

var fligth1 = new Flight("Belgrade-New York", "Oct 25 2017")
fligth1.listofPassangers(passanger1);
fligth1.listofPassangers(passanger2);
var flight2 = new Flight("Barcelona-Belgrade","Nov 11 2017");
flight2.listofPassangers(passanger3);
flight2.listofPassangers(passanger4);
 
 

 function Airport(name, listOfFlights =[]){
  this.name = "Nikola Tesla";
  this.listOfFlights = function addFlight(fligth){
    return listOfFlights.push(fligth);
  }
  this.getData = function(){
    var listFlights =[];
    var number =0;
    for (var i  = 0; i<listOfFlights.length; i++){
        listFlights.push(listOfFlights[i].getData()+ "\n\t")
        number += listOfFlights[i].numberOfPassagers();   ///netacno
        
    }
    return this.name + "," + "total passangers: " + number +  listFlights;
  }

 }

 

 function createFligth(relation, date){
    var obj = {
        relation : relation,
        date: date

    }; return obj;
}

function createPassanger(name,surname,seatNumber, category){
    var obj = {
        name: name,
        surname: surname,
        seatNumber: seatNumber,
        category:category
    }; return obj;
}

var fligthI=createFligth("Belgrade - New York", "Oct 25 2017");
var fligthII =createFligth("Barcelona - Belgrade", "Nov 11 2017");

var aerodrom = new Airport();
 aerodrom.listOfFlights(fligth1);
 aerodrom.listOfFlights(flight2);

 console.log(aerodrom.getData());

var passanger1 = createPassanger("John", "Snow", 1, "b");
var passanger2 = createPassanger("Cersei", "Lancaster", 2, "b");

})()