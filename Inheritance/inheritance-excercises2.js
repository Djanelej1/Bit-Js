// 1.
// Headquarters have asked that you store the following information about each book: title, author,
// copyright date, ISBN, number of pages, number of times the book has been checked out, whether the book has been discarded.

// Headquarters also needs you to track certain actions that you must perform when books get out of date.
// First, for a manual, the book must be thrown out if it is over 5 years old.
// Second, for a novel, the book should be thrown out if it has been checked out over 100 times.

// Construct three classes that hold the information needed by headquarters as properties.
// One class should be a Book class and two child classes of the Book class called Manual and Novel.
// Each class will contain two methods. One will be a constructor.
// The other one will either be in charge of disposal of the book or updating the property related to the number of times a book has been checked out.
// Hint: This means you need to read through the requirements for the problem and decide what should belong to Book and what should belong to the Novel and Manual classes.
 
// Declare an object of the Novel class for the following tome from the library. Declare an object of the Manual class for the following tome from the library.
// One of the above books needs to be discarded. Call the appropriate method for that book to update the property. That way the crew can throw it into empty space to become debris.
// The other book has been checked out 5 times since you first created the object. Call the appropriate method to update the number of times the book has been checked out.

class Book {
    constructor (title, author,copyrightDate, iSBN, numbOfPages, numOfChecked, isDiscard){
        this.title = title;
        this.author = author;
        this.copyrightDate = new Date(copyrightDate).toDateString();
        this.iSBN =iSBN;
        this.numbOfPages =numbOfPages;
        this.numOfChecked =numOfChecked;
        this.isDiscard = isDiscard;
    }
    updateChecked(num){
        return this.numOfChecked = this.numOfChecked +num;
    }   

}

class Novel extends Book{
    constructor (title, author,copyrightDate, iSBN, numbOfPages, numOfChecked, isDiscard){
        super (title, author,copyrightDate, iSBN, numbOfPages, numOfChecked, isDiscard);
    }

    throwBook (){
        if (this.numOfChecked>=100){
            return  this.isDiscard = "the Book should be thrown out"
        } else return this.isDiscard = "the book should stay";
    }
}

class Manual extends Book{
    constructor (title, author,copyrightDate, iSBN, numbOfPages, numOfChecked, isDiscard){
        super (title, author,copyrightDate, iSBN, numbOfPages, numOfChecked, isDiscard);
    }

 throwBook(){
    if (new Date() - this.copyrightDate>=5){
        return this.isDiscard ="the Book should be thrown out";
    } else return this.isDiscard = "the book should stay"
 }
}

var novel = new Novel ("Orlovi rano lete", "Branko Copic", "15-Jan-1986", 12463176, 123, 15);
var manual = new Manual("Kako pokrenuti biznis", "grupa autora", "15-Feb-2022", 22466777, 1254, 100);

console.log(manual.throwBook())
console.log(novel);
novel.updateChecked(120);
console.log(novel);
console.log(novel.throwBook());

//2. Calculator 




//3.Coffee shop
 class CoffieShop {
    constructor(name, menu = [], orders =[]){
        this.name = name;
        this.menu =  menu;
        this.orders = orders;
    }
    
    addMenu (item){  
        return this.menu.push(item);
      }
    addOrders(nameItem){
        var message ='This item is not available';
        for (var i = 0; i<this.menu.length; i++){
            if (this.menu[i].name === nameItem){
                this.orders.push(this.menu[i]); 
                message = "order added";
            } 
        } return message;
        }
    
        
    
    fulfillOrder(){
        var message = "All orders have been fulfilled!"
        if (this.orders.length>0){
        message = "The " + this.orders.shift().name + " is ready";
        } 
        return message;
    }

    listOrders(){
        return this.orders;

    }
    dueAmount(){
        var total = 0;
        for (var i = 0; i<this.orders.length; i++){
            total += this.orders[i].price; 
        }return total.toFixed(2);
    }

    cheapestItem(){
        var cheapestItem =this.menu[0].price;
        var cheapestItemName = this.menu[0].name
        for (var i =1; i<this.menu.length; i++){
            if (this.menu[i].price<cheapestItem){
                cheapestItem = this.menu[i].price;
                cheapestItemName = this.menu[i].name
            }
        } return "The cheapest item is " + cheapestItemName;

    }
    drinksOnly(){
        var drinks =[];
        for (var i =0; i<this.menu.length; i++){
            if (this.menu[i].type ==="drink"){
                drinks.push(this.menu[i].name);
            } 
    }return drinks;
}
    foodOnly(){
        var food =[]
        for (var i =0; i<this.menu.length; i++){
            if (this.menu[i].type ==="food"){
                food.push(this.menu[i].name);
            } 
    }return food;

 }
 }
 class Item {
    constructor (name, type, price){
    this.name = name;
    this.type = type;
    this.price = price;}
}

var item1 = new Item ("mousaka", "food", 115.02);
var item2 = new Item ("coca-cola", "drink", 15.45);
var item3 = new Item("burger", "food", 145); 
var item4 = new Item("juice", "drink", 12);

var coffiee1 = new CoffieShop("JavaCoffee");
coffiee1.addMenu(item1);
coffiee1.addMenu(item2);
coffiee1.addMenu(item3);
coffiee1.addMenu(item4);

console.log(coffiee1.addOrders('mousaka'));
console.log(coffiee1.addOrders('juice'));
console.log(coffiee1.addOrders('ice-tea'));
console.log(coffiee1.foodOnly());
console.log(coffiee1.cheapestItem());
console.log(coffiee1.fulfillOrder());
console.log(coffiee1.fulfillOrder());
console.log(coffiee1.fulfillOrder());