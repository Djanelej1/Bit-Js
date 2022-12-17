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

    if (!inputArray || inputArray.length%2==0){
        return "error"
    }

    var count =0;
    for (var i =0; i<inputArray.length;i++){
        var middleEl = inputArray[Math.floor((inputArray.length-1)/2)];

       if (inputArray[i]<middleEl){
        count +=1;
       }
    } return count;
    
} console.log(howManyLess([-1, 8.1, 3, 6, 2.3, 44, 2.11])) 
console.log(howManyLess([-1, 8.1, 3, 6, 2.3, 44, 2.11, 8])) 

//4. Write a function that finds the smallest element of a given array. The function should
//return an object that contains the smallest value and its last position in the array.

function returnSmallest(inputArray =[]){
    if (!inputArray || inputArray.length==0){
        return null;
    }
    
    var theSmallest = 0;
    var smallest ={};
    var lastposition = 0;

    for (var i =0; i<inputArray.length; i++){
        if (inputArray[i]<theSmallest){
            theSmallest = inputArray[i];
             
        }

     for (var y = inputArray.length-1; y>=0;y--){
        if (inputArray[y]==theSmallest){
            lastposition =y;
            break;
        }

     }  
    } return smallest ={ thesmalestValue:theSmallest, lastposition:lastposition};


} console.log(returnSmallest([1, 4, -2, 11, 8, 1, -2, 3]));

// 5.a. Write a function that finds all the elements in a given array less than a given
//element. Input: [2, 3, 8, -2, 11, 4], 6

function returnSmaller(inputArray=[], number =0){
    if (!inputArray || inputArray.length == 0){
        return [];
    }

    var newArray =[];
    for (var i=0; i<inputArray.length;i++){
        if (inputArray[i]<number){
            newArray.push(inputArray[i]);
        }
    } return newArray;
} console.log(returnSmaller([2, 3, 8, -2, 11, 4], 6))

// 5.b.  Write a function that finds all the elements in a given array that start with the “pro”
//substring. The function should be case insensitive.

function findElements(inputArray =[]){
    if (!inputArray || inputArray.length == 0){
        return [];
    }
    var newArray =[];
    var substring ="pro";

   for (var i =0; i<inputArray.length;i++){
    var element = inputArray[i];
    if (element.startsWith(substring) || element.startsWith(substring.charAt(0).toUpperCase())){
        newArray.push(element);
    }
   } return newArray;

} //console.log(findElements(["JavaScript", "Programming", "fun", "product"]));

//5.c. Write a function that expects an array and a callback function that filters out
//some of the elements. Use functions defined in a) or b) to test it.

function filterOut(inputArray =[], callbackFun){
    if (!inputArray || inputArray.length == 0 || !callbackFun){
        return [];
    }
   
    var wordsWithSubstr = callbackFun(inputArray);
   return wordsWithSubstr;
} console.log(filterOut(["JavaScript", "Programming", "fun", "product", "programm"],findElements));


//6.a. Write a list (array) of products you usually buy in the supermarket. Write a price
//and name for each product. 