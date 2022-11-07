//1. Find the min and max element in the following array and switch their places. Print out the
//modified array in the console.
function minMaxSwap(array) {
  var min = array[0];
  var max = array[0];
  var iMin = 0;
  var iMax = 0;
  var temp = array[array.lenght];
  for (i in array) {
    if (array[i] < min) {
      min = array[i];
      iMin = i;
    }
  }
  for (i in array) {

    if (array[i] > max) {
      max = array[i];
      iMax = i;
    }
  }
  //netacno 
  array.splice(iMin, 0, max);
  array.splice(iMax, 0, min);
  return array;

}
console.log(minMaxSwap([3, 500, 12, 149, 53, 414, 1, 19]));

//2.Use the following array to make a new one by dividing its values by two and adding 5. If
//a given element;s value is 0, change it to 20.

function multiArray(array, divider, adding) {
  for (i in array) {
    array[i] = (array[i] / divider) + adding;
    if (array[i] === 0) {
      array[i] = 20;
    }
  } return array;
} console.log(multiArray([3, 500, -10, 149, 53, 414, 1, 19], 2, 5));

// 3. Initialize two arrays. The first one should contain student names, the second one the
//number of points for each student. Display students&#39; names with their corresponding
//grade. Use the following ranges:
function examResult(student, points) {
  var result = "";
  grade = 0;
  for (y in points) {
    if (points[y] <= 100 && points[y] >= 91) {
      grade = 10;
    }
    else if (points[y] <= 90 && points[y] >= 81) {
      grade = 9;
    } else if (points[y] <= 80 && points[y] >= 71) {
      grade = 8;
    }
    else if (points[y] <= 70 && points[y] >= 61) {
      grade = 7;
    }
    else if (points[y] <= 60 && points[y] >= 51) {
      grade = 6;
    }
    else { (points[y] <= 50); grade = "failed to complete exam"; }
  }

  for (i in student) {
    for (y in points) {

      result = student[i] + " acquired " + points[y] + " points and earned " + " grade " + grade;
    }
  } return result;

}
console.log(examResult(["Michael", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill"], [50, 39, 63, 72, 99,
  51, 83, 59]));

//  4. (skip :))Sort a previously defined array. Place its sorted values into a new array whose
//values are equivalent to the first array&#39;s values multiplied by 2.

function sortMultiplied(array, multiplier) {

  for (i in array) {
    array[i] = array[i] * multiplier;
  }

  for (x = 0; x <= array.length; x++) {
    array.sort(function (a, b) { return a - b });
  } return array;
}

console.log(sortMultiplied([13, 11, 15, 5, 6, 1, 8, 12], 2));


//5. (skip :))Sort a previously defined array in a descending order and display it in the
//console.
function descendigArray(array){
   
    array.sort(function(a,b){return b-a});return array;
   }
  
  console.log(descendigArray([13, 11, 15, 5, 6, 1, 8, 12]));

  //6. Write a program that uses a loop to add all the even numbers from 1 to 1000 and
//subtracts all the odd numbers 1 to 500 from the calculated sum. The result should then
//be multiplied by 12.5 and displayed in console.
function multiOperation(num1,num2, multiplier){
  var sum=0;
  var substr=0;
  result=0;
  for (i=0; i<=num1;i+=2){
    sum +=i;
    
  }
  for (i=1;i<=num2;i+=2){
    substr+=i;
  }return result=(sum-substr)*multiplier;
} console.log(multiOperation(1000, 500, 12.5));

//7. Define a 10 element array. Take the first two letters from every string (that has at least 2
//letters) in the array and create a new string from them. Print it out in the console.
function abbString(array,num){
  var newStr ="";
  var partStr="";
  for (i=0; i<=array.length;i++){
    if (typeof(array[i])==="string" && array[i].length>=num){
     partStr = array[i].substring(0,num);
     newStr +=partStr;
    }
  }return newStr;
}
console.log(abbString(["M", "Anne", 12, "Steve", "Joe","John", "David", "Mark", true, "A"],2));

//8. Write a program that takes a string and prints its characters out in reversed order in the
//console.
function reverseString(str) {
  var newString = "";
  for (var i = str.length - 1; i >= 0; i--) {
      newString += str[i];
  }
  return newString;
}
console.log(reverseString("Belgrade Institute of Technology"));

//9.Write a program that displays all the combinations of two numbers between 1 and 7.
function twoNumCom(num1, num2){
  var numOfComb=0;
  for (i=num1;i<=num2;i++){
    for (y=num2; y>=num1;y--){
      if (i!=y){
        numOfComb+=1;
        console.log(i+"."+y); 
        
      } else { numOfComb+=0;}

    }
  } return numOfComb;
}console.log(twoNumCom(1,7));


//10. Write a program that checks if the entered number is a prime number (i.e. divisible only
//by 1 and by itself).

function isPrime(num){
 for (var i=2; i<num;i++){
  if (num%i===0){
    return false;
  }
  } return num>1;
 }
console.log(isPrime(17));

//11. Check if a given string is a palindrome (spaces are ignored).

function isPalindrome(str){
  var strNoSpace = str.replace(/\s/g, '');
  for (var i=0; i<=str.length/2; i++){
    for (var y=str.length-1; y>=str.length/2; y--){
      if (str[i]===str[y]){
        return true;
      } return false;
    }
  } 
} console.log(isPalindrome("a nut for a jar of tuna"));

//12. Write a program that calculates the greatest common divisor of two integers. Note: The
//greatest common divisor of two non-zero integers is the greatest positive number that
//divides both numbers with no remainder.

function maxDivisor(num1,num2){
  var maxDiv=1;
  for ( var i=2; i<=num1;i++){
    for (var y=2; y<=num2;y++){
      if (num1%i===0 && num2%y===0 && i===y && i>maxDiv){
        maxDiv=i; 
      }
    }
  } return maxDiv;
} console.log(maxDivisor(192,42));