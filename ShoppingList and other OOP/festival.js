'use strict';

(function (){
    console.log("Hi");


    function Genre(name) {
       this.name= name; 
       this.info = function getData(){
        return (this.name[0] + this.name[name.length-1]).toUpperCase();
       }
    }

    var action = new Genre ("action");
    var comedy = new Genre ("comedy");
    var drama = new Genre ("drama");
    console.log (comedy.info());

 function Movie (title, genre, length){
    this.title = title;
    this.genre = new Genre(genre);
    this. length = length; 
    this.movieData = function getData(){
        return this.title + ", " + this.length + ", " + genre.info();
    }
 }

 var redemption = new Movie ("The Shawshank Redemption",action, "130min");
 var monty = new Movie ("The Life of Brian", comedy,"93min");
 var ground = new Movie("Groundhog Day", comedy, "101 min");
 console.log(redemption.movieData());

  function Program (date, listOfMovies =[], totalNumbersOfMovies ){
    this.date = new Date();
    this.listOfMovies = function addMovie(movie){
       return listOfMovies.push(movie);
    }

    
    this.totalNumbersOfMovies = function(){
        var sum = 0;
        for (var i = 0; i <listOfMovies.length; i ++){
            sum +=1;
        }return sum;
    }
    this.data = function getData(){
     var total = 0; 
     var listMovies =[];
     for (var i = 0; i<listOfMovies.length;i++){
        total +=parseInt(listOfMovies[i].length); 
        listMovies.push(listOfMovies[i].movieData() + "\n\t");
     
     }return ("\n\t" + this.date.toDateString() + "," + "total duration is " + total + "min" +"\n\t" + listMovies);
     
    }
  }

  var program1 = new Program();
   program1.listOfMovies(redemption);
   program1.listOfMovies(monty);
   program1.listOfMovies(ground);
   console.log(program1.data());

   var program2 = new Program();
   program2.listOfMovies(monty);

   var program3 = new Program();
   program3.listOfMovies(monty);
   program3.listOfMovies(ground);

   function Festival (name, listOfPrograms =[],movieNumbers){
    this.name = "weekend festival";
    this.listOfPrograms = function addProgram(program){
        return listOfPrograms.push(program)
    }
    this.movieNumbers = function (){
        var sum = 0;
        for (var i = 0; i <listOfPrograms.length; i ++){
            sum +=listOfPrograms[i].totalNumbersOfMovies();
        }return sum;
    }
   this.data = function getData(){
    var listPrograms = [];
    for (var i = 0; i<listOfPrograms.length;i++){
      listPrograms.push(listOfPrograms[i].data() + "\t");
    }
    return this.name + " has " + this.movieNumbers() + " movie titles " + "\n\t" + listPrograms;
    
}

}

   var festival1 = new Festival();
    festival1.listOfPrograms(program1);
    festival1.listOfPrograms(program2);
    festival1.listOfPrograms(program3);
    console.log (festival1.movieNumbers());
    console.log(festival1.data());
   
})();