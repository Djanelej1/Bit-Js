//1. Write IIFE that replaces the first and the last element of the given array and prints out its
//elements.
(
    function (array) {
        var result = [];
        result = array.splice(0, 0, array[array.length - 1]);
        console.log(result);
        return result;

    }
)([4, 5, 11, 9]);


//2. Write IIFE that calculates the surface area of the given rectangle with sides a and b.
//Input: 4 5

var b = (function (a, b) {
    return a * b;
})(4, 5);



console.log(b);

//3. Write IIFE that replaces all appearances of the letters m or M with * and returns the
//number of replacements.
//Input: prograMming
//Output: progra**ing, 2


var c = (function replace(text) {
    var count = 0;
    var newText = "";
    for (var i = 0; i <= text.length; i++) {
        newText = text.replace(/m/gi, "*");
        count = text.match(/m/gi).length;

    } return `${newText},${count}`;
})("programMing");
console.log(c);
//4.Write a function with parameters name and surname that returns a function that
//suggests an email in the form name.surname@gmail.com.

function nameSur(name, surname) {
    return function email() {
        return name + "." + surname + "@gmail.com"
    };
}
var email = nameSur("pera", "peric");
console.log(email());
//5. Write a function that returns a function that calculates a decimal value of the given octal
//number.
//Input: 034
//Output: 28
function decimal(){
    return function decim(num) {
    var sum = 0;
    var numStr = num.toString();
    for (var i = 0; i < numStr.length; i++) {
        var z = numStr.length - 1;
        sum += Number.parseInt(numStr[i]) * (Math.pow(Number.parseInt(numStr[i]), z));
        z--;

    } return sum;
}
}
console.log(decimal()(134)); 

//6.Write a function that checks if a given string is valid password. The password is valid if it
//is at least 6 characters long and contains at least one digit. The function should receive
//two callbacks named successCallback and errorCallback that should be called in case
//password is correct or invalid.

function succsessCallback(){
    return console.log("Your password is cool!")
}
function errorCallback(){
    return console.log("Your password is invalid!")
}

(function isValid(password){
    
        if (/[0-9]/.test(password) && (password.length>=6)){
            succsessCallback();
        } else {errorCallback()};
    
})("JSGuru");

//7.Write a function that filters elements of the given array so that they satisfy a condition
//given by the callback function.
//Input: [2, 8, 11, 4, 9, 3], callback function checks if the number is odd
//Output: [11, 9, 3]

function isOdd(num){
  if (num%2!=0){
    return true;
  } return false;
}

function filterOdds(array){
    var oddArray =[];
    for (var i=0; i<array.length;i++){
        if (isOdd(array[i])){
            oddArray.push(array[i]);
        }
    } return oddArray;
};
console.log(filterOdds([2, 8, 11, 4, 9, 3]));