//1. 1. Write a functional expression that duplicates each element of a given array.

function duplicateElem(inputArray = []) {
    if (!inputArray || inputArray.length < 1) {
        return null;
    }
    var newArr = [];
    var arrJoin = [];

    for (i = 0; i < inputArray.length; i++) {
        newArr.push(inputArray[i]);

    }
    for (var i in inputArray) {
        arrJoin.push(inputArray[i]);
        arrJoin.push(newArr[i]);
    }

    return arrJoin;
} console.log(duplicateElem([2, 4, 7, 11, -2, 1]));

//2. Write a functional expression that removes all duplicates in a given array.

function removeDuplicates(inputArray = []) {
    if (!inputArray || !inputArray.length < 1) {
        return null;
    }
    out = [],
        obj = {};

    for (var i = 0; i < inputArray.length; i++) {
        obj[inputArray[i]] = 0;
    }
    for (var i in obj) {
        out.push(i);
    }
    return out;
}

console.log(removeDuplicates([8, 13, 8, 9, 12, 8, 1, 1, 4, 13]))

//3a. Write a function that checks if a given array has odd number of elements.

function checkOdd(inputArray = []) {

    var ifOdd = false;

    for (var i = 0; i < inputArray.length; i++) {
        var element = inputArray[i];
        if (element % 2 != 0) {
            ifOdd = true;
        }
    } return ifOdd;
}
var ifthereOdd = checkOdd([1, 2, 9, 2, 1])
console.log(ifthereOdd);

//3.bb. Write a function that counts the number of elements less than the middle
//element. If the given array has an even number of elements, print out an error
//message.



function howManyLess(inputArray = []) {

    if (!inputArray || inputArray.length % 2 == 0) {
        return "error"
    }

    var count = 0;
    for (var i = 0; i < inputArray.length; i++) {
        var middleEl = inputArray[Math.floor((inputArray.length - 1) / 2)];

        if (inputArray[i] < middleEl) {
            count += 1;
        }
    } return count;

} console.log(howManyLess([-1, 8.1, 3, 6, 2.3, 44, 2.11]))
console.log(howManyLess([-1, 8.1, 3, 6, 2.3, 44, 2.11, 8]))

//4. Write a function that finds the smallest element of a given array. The function should
//return an object that contains the smallest value and its last position in the array.

function returnSmallest(inputArray = []) {
    if (!inputArray || inputArray.length == 0) {
        return null;
    }

    var theSmallest = 0;
    var smallest = {};
    var lastposition = 0;

    for (var i = 0; i < inputArray.length; i++) {
        if (inputArray[i] < theSmallest) {
            theSmallest = inputArray[i];

        }

        for (var y = inputArray.length - 1; y >= 0; y--) {
            if (inputArray[y] == theSmallest) {
                lastposition = y;
                break;
            }

        }
    } return smallest = { thesmalestValue: theSmallest, lastposition: lastposition };


} console.log(returnSmallest([1, 4, -2, 11, 8, 1, -2, 3]));

// 5.a. Write a function that finds all the elements in a given array less than a given
//element. Input: [2, 3, 8, -2, 11, 4], 6

function returnSmaller(inputArray = [], number = 0) {
    if (!inputArray || inputArray.length == 0) {
        return [];
    }

    var newArray = [];
    for (var i = 0; i < inputArray.length; i++) {
        if (inputArray[i] < number) {
            newArray.push(inputArray[i]);
        }
    } return newArray;
} console.log(returnSmaller([2, 3, 8, -2, 11, 4], 6))

// 5.b.  Write a function that finds all the elements in a given array that start with the “pro”
//substring. The function should be case insensitive.

function findElements(inputArray = []) {
    if (!inputArray || inputArray.length == 0) {
        return [];
    }
    var newArray = [];
    var substring = "pro";

    for (var i = 0; i < inputArray.length; i++) {
        var element = inputArray[i];
        if (element.startsWith(substring) || element.startsWith(substring.charAt(0).toUpperCase())) {
            newArray.push(element);
        }
    } return newArray;

} //console.log(findElements(["JavaScript", "Programming", "fun", "product"]));

//5.c. Write a function that expects an array and a callback function that filters out
//some of the elements. Use functions defined in a) or b) to test it.

function filterOut(inputArray = [], callbackFun) {
    if (!inputArray || inputArray.length == 0 || !callbackFun) {
        return [];
    }

    var wordsWithSubstr = callbackFun(inputArray);
    return wordsWithSubstr;
} console.log(filterOut(["JavaScript", "Programming", "fun", "product", "programm"], findElements));


//6.a. Write a list (array) of products you usually buy in the supermarket. Write a price
//and name for each product. 
//6.b Write a function that calculates the total price of your shopping list.
//6.c Write a function that calculates the average product price of your shopping list.
//Print this value with the precision of three decimals.
//.6.d.Write a function that prints out the name of the most expensive product on your
//shopping list. Write the name in uppercase.
var listofProducts = [{ name: "apples", price: 100 },
{ name: "milk", price: 80 },
{ name: "bananas", price: 150 }, { name: "bread", price: 50 }, { name: "water", price: 75 }];

function calculateTotal(array) {
    var total = 0;
    for (var i = 0; i < array.length; i++) {
        var element = array[i];
        total += element.price;
    } return total;

} console.log(calculateTotal(listofProducts));

function calculateAvg(array) {
    var avg = 0;
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        var element = array[i];
        sum += element.price;

    } return avg = (sum / array.length).toFixed(3);
} console.log(calculateAvg(listofProducts))

function theMostExpensive(array) {
    var maxPrice = 0;
    var nameMostExpensive = "";

    for (var i = 0; i < array.length; i++) {

        if (array[i].price > maxPrice) {
            maxPrice = array[i].price;
            console.log(maxPrice);
            nameMostExpensive = (array[i].name).toUpperCase();

        }
    } return "the most expensive is " + nameMostExpensive;
} var name1 = theMostExpensive(listofProducts);
console.log(name1);

//7.a. Write a function that checks if a given string is written in all capitals.
//7.b. Write a function that checks if a given string contains any digits.
//7.c. Write a function that checks if a given string is a valid hexadecimal color.
//7.d. Write a function that checks if a given number belongs to the interval from 1900
//to 2018.
//7.e. Write a function named validator that returns an object with properties
//stringValidator, passwordValidator, colorValidator, and yearValidator referencing
//the functions from a) to d).

function checkCapitals(word) {
    for (var i = 0; i <= word.length; i++) {
        if (/^[A-Z]+$/.test(word)) {
            return "String contains only uppercase"
        } else { return "string contains lowercase" }
    }
} console.log(checkCapitals("SASSA"));

function checkDigit(word) {
    for (var i = 0; i <= word.length; i++) {
        if (/[0-9]/.test(word)) {
            return "string contains digits"
        } else { return "string do not contains digit" };
    }
} console.log(checkDigit("SAS7A"));

function isValidHexaCode(str) {
    var regex = new RegExp(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/);

    if (str == null) {
        return "false";
    }
    if (regex.test(str) == true) {
        return "true";
    }
    else {
        return "false";
    }
} console.log(isValidHexaCode("#aac8969"));


function checkNumber(number) {
    if (isNaN(number) && number.toString().length != 4) {
        return "false";
    }

    if (number > 1900 && number < 2018) {
        return "true";

    } return "false";
} console.log(checkNumber(1985));


function validator() {
    return obj = {
        stringValidator: checkCapitals(word),
        passwordValidator: checkDigit(word),
        colorValidator: isValidHexaCode(str),
        yearValidator: checkNumber(number)
    }
} console.log(validator());

//8. Write a function that calculates a number of days to your birthday.

today = new Date();
var birthday = new Date(today.getFullYear(), 06, 26);
var upcomingBday = new Date(today.getFullYear(), birthday.getMonth(), birthday.getDate());

if (today > upcomingBday) {
    upcomingBday.setFullYear(today.getFullYear() + 1);
}
var one_day = 1000 * 60 * 60 * 24;
console.log(Math.ceil((birthday.getTime() - today.getTime()) / (one_day)) +
    " days left until my birthday!");


//9. Write a function that for a given departure and arrival time calculates the time the trip
//takes.
function SumHours(smon, fmon) {
    
    var diff = 0 ;
    if (smon && fmon) {
      smon = ConvertToSeconds(smon);
      fmon = ConvertToSeconds(fmon);
      diff = Math.abs( fmon - smon ) ;
      console.log( 'time difference is : ' + secondsTohhmmss(diff) );
    }
  
    function ConvertToSeconds(time) {
      var splitTime = time.split(":");
      console.log(splitTime);
      return splitTime[0] * 3600 + splitTime[1] *60 ;
    }
  
    function secondsTohhmmss(secs) {
      var hours = parseInt(secs / 3600);
    var restSecs = parseInt(secs % 3600) ;
      var minutes = parseInt(restSecs / 60) ;
      var restMin = parseInt(minutes%60) ;
       var seconds = parseInt(restMin);
      
      return hours + "hours : " + minutes + "minutes " + seconds + "seconds:" ;
    }
  }console.log(SumHours("8:22:13","11:00:15"));                                       //sekunde ne rade dobro


  //10.a. Write a constructor function that creates points in space. Each point in space has
//its own x, y, and z coordinate. For example, (3, 5, 1) can be a point in space.

//b. Write a function that calculates the distance between two points in the space.

function pointsInSpace(x, y, z){
    this.x = x;
    this.y = y;
    this.z =z;
}
var firstPoint = new pointsInSpace(1,5,9);
var secondPoint = new pointsInSpace(2,6,7);

function calculateDistance(p1, p2) {
    var a = p2.x - p1.x;
    var b = p2.y - p1.y;
    var c = p2.z - p1.z;

    return Math.sqrt(a * a + b * b + c * c);
}console.log(calculateDistance(firstPoint,secondPoint));

//11.
//a. Write a function that generates a random integer value between 5 and 20.
//b. Write a function that generates a random integer value between 50 and 100.
//c. Write a function which expects a number and a callback generator function and
//returns an array of numbers produced by the generator function.

function randomInt(){
    for (var i=5; i<20; i++){
      var randomInteger= Math.floor(Math.random()*i);
    } return randomInteger;
}console.log(randomInt());

function randomInt2(max, min){
    var randomInteger2= Math.floor(Math.random() * (max - min + 1)) + min;
    return randomInteger2;
    } 
console.log(randomInt2(100,50));

//c.


//12. Write a function that shuffles the elements of a given array.
//Input: [3, 6, 11, 2, 9, 1]

function shuffleTheElements(array = []) {

    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * i);
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    } return array;
} console.log(shuffleTheElements([3, 6, 11, 2, 9, 1]))