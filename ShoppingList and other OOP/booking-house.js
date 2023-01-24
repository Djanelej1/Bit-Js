(function () {
    console.log("Hi");

    function Country(name, odds, continent) {
        this.name = name;
        this.odds = odds;
        this.continent = continent;
        };

    

    var country1 = new Country("Srbija", 1.2, "Europe");
    var country2 = new Country("Srbija", 1.25, "Europe");
    var country3 = new Country("Nemacka", 1.02, "Europe");
    var country4 = new Country ("Japan", 2.3, "Asia");

    function Person(name, surname, dateOfBirth) {
        this.name = name;
        this.surname = surname;
        this.dateOfBirth = new Date(dateOfBirth);

        ;
        this.getData = function () {
            return this.name + " " + this.surname + "," + this.dateOfBirth.getDate() + "." + parseFloat(this.dateOfBirth.getMonth() + 1) + "." + this.dateOfBirth.getFullYear();
        }
    }

    var person1 = new Person("Pera", "Peric", "Oct-14-1984");
    var person2 = new Person("Jovan","Jovanovic", "Dec-01-1999");
    var person3 = new Person("Jovan","Petrovic", "Dec-08-1992");
    var person4 = new Person("Pera","Jovanovic", "Jun-01-1994");
    console.log(person1.getData());




    function Player(person, betAmount, country) {
        this.person = new Person(person);
        this.betAmount = betAmount;
        this.country = country;
        this.winAmount = (betAmount * country.odds).toFixed(2) + "eur";
        this.getData = function () {
            return (this.country.name[0] + this.country.name[1]).toUpperCase() + "," + this.winAmount + "," + person.name + " " + person.surname + "," + (new Date().getFullYear() - person.dateOfBirth.getFullYear()) + "years";
        }
    }

    var player1 = new Player(person1, 200, country1);
    var player2 = new Player(person2,1000,country2);
    var player3 = new Player(person3, 1025,country3);
    var player4 = new Player(person4, 1025,country4);
    console.log(player1.getData());

    function Address(country, city, postalCode, street, number) {
        this.country = country;
        this.city = city;
        this.postalCode = postalCode;
        this.street = street;
        this.number = number;
        this.getData = function () {
            return this.street + " " + this.number + "," + this.city + " " + this.postalCode + "," + (this.country.name[0] + this.country.name[1]).toUpperCase();
        }
    }
    var address1 = new Address(country1, "Belgrade", "11000", "Nusiceva", "47");
    var address2 = new Address(country1, "Belgrade", "11000", "Andriceva", "56");
    console.log(address1.getData());

    function BettingPlace(address, listofPlayers = []) {
        this.address = new Address(address);
        this.listofPlayers = function addPlayer(player){
            return listofPlayers.push(player);
          }
        this.totalPlayers = function(){
                var sum = 0;
                for (var i = 0; i <listofPlayers.length; i ++){
                    sum +=1;
                }return sum;
            
        }
        this.sum = function(){
            var sum =0
            for (var i = 0; i<listofPlayers.length; i++){
               sum +=listofPlayers[i].betAmount;
            }return sum;
        } 
        this.getDataPlayers = function(){
            var listPlayers=[];
            for (var i =0; i<listofPlayers.length; i++){
                listPlayers.push(listofPlayers[i].getData() +"\n\t");
            }return listPlayers;
        }
        this.getData = function(){
            return address.street + "," + address.postalCode+ " " + address.city + ",  sum of all bets: " + this.sum() + " eur";
        }
    }

    var bettingplace1 = new BettingPlace(address1);
    var bettingplace2 = new BettingPlace(address2);
    bettingplace1.listofPlayers(player1);
    bettingplace1.listofPlayers(player2)
    bettingplace2.listofPlayers(player3);
    bettingplace2.listofPlayers(player4);
    console.log(bettingplace1.getData());

    
    function BettingHouse(competition, listOfBettinPlaces = [], numberOfPlayers) {
        this.competition = competition;
        this.listOfBettinPlaces = function(bettingPlace){
            return listOfBettinPlaces.push(bettingPlace)
        };
        this.numberOfPlayers = function(){
            var sum = 0;
            for (var i = 0; i<listOfBettinPlaces.length; i++){
                sum += listOfBettinPlaces[i].totalPlayers();
            }return sum;
        };

        this.getData = function(){
            var list =[];
            
            for (var i =0; i<listOfBettinPlaces.length; i++){
                list.push(listOfBettinPlaces[i].getData() + "\n\t" + listOfBettinPlaces[i].getDataPlayers() +"\n\t");
                
           }
            return this.competition  + "," + list.length + " betting places, " +   this.numberOfPlayers() + " bets"  + "\n\t"
            + list   ;  
        } 
    };

    var bettingHouse = new BettingHouse("Footbal World Cup winner");
    bettingHouse.listOfBettinPlaces(bettingplace1);
    bettingHouse.listOfBettinPlaces(bettingplace2);
    console.log(bettingHouse.getData());
    const continent = ['Africa', 'SAmerica', 'Asia', 'Europe', 'Australia', "NAmerica"];

})();