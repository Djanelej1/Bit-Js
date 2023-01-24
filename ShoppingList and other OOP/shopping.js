
'use strict';

(function (){
    console.log("Hi");



function Product (name,price,expirationDate){
     this.productId =  Math.floor(Math.random() * 90000)+10000;
     this.name = name;
     this.price = price.toFixed(2);
     this.expirationDate = new Date(expirationDate);
     this.info = function getInfo(){
        return (this.name[0]+this.name[name.length-1]+this.productId + "," + this.name + "," + this.price);
        
     }
};
var milk = new Product("milk",112.25,"03/12/2023");
var bread = new Product("bread with chia seeds", 115, "12/12/2023");
var letuce = new Product("letuce", 15, "3/12/2023");
console.log(milk, milk.info())



function ShoppingBag() {
    this.listOfProducts = [];
    this.addProduct = function (product) {
        this.listOfProducts = [];
        if (product.expirationDate > new Date()) {
            this.listOfProducts.push(product);
        } return this.listOfProducts;
    }

    this.averagePrice = function () {
        var sum = 0;
        var avg = 0;
        for (var i = 0; i < this.listOfProducts.length; i++) {
            sum += this.listOfProducts[i].price;
            avg = (sum/this.listOfProducts.length).toFixed(3)
        }
        return avg;
    }
    this.getMostExpensive = function () {
        var mostExpensive = 0;
        for (var i = 0; i < this.listOfProducts.length; i++) {

            if (this.listOfProducts[i].price<mostExpensive) {
                mostExpensive = this.listOfProducts[i].price;
            }
        }
        return mostExpensive;
    }
    this.calculateTotalPrice = function () {
        var sum = 0;

        for (var i = 0; i < this.listOfProducts.length; i++) {
            sum += parseFloat(this.listOfProducts[i].price);
        }

        return sum;
    }
}

var shoppingBag = new ShoppingBag()
shoppingBag.addProduct(milk);
shoppingBag.addProduct(letuce);
shoppingBag.addProduct(bread);
console.log (shoppingBag);
console.log(shoppingBag.averagePrice());
console.log(shoppingBag.getMostExpensive());
console.log(shoppingBag.calculateTotalPrice());
console.log(shoppingBag.addProduct());


  function PaymentCard(accountBal, status, validDate){
    this.accountBal = parseFloat(accountBal.toFixed(2));
    this.status = status;
    this.validDate = new Date(validDate);
  }

 var myCard = (200, "active", "30/12/2023");
 console.log(myCard.accountBal);

  function checkOutAndBuy(shoppingBag,paymentCard){
    
    if (paymentCard.accountBal >= shoppingBag.calculateTotalPrice() ){
        console.log ("Purchase is succsessful")
    } else { "Purchase is not successful, you need to add " + shoppingBag.calculateTotalPrice()-paymentCard.accountBal}
  }
 
  checkOutAndBuy (shoppingBag,myCard);


console.log("12/03/2022"> new Date());
})();
