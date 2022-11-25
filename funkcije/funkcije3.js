//1. Write a program to insert a string within a string at a particular position (default is 1,
//beginning of a string).
function dodajNovi(a, rec, slog) {
     
    if(a <= rec.length && a >= 0) {
        
    } return rec.substr(0, a) + slog + rec.substr(a)
}

console.log(dodajNovi(4, "My Random String", "JS"));

//Write a program to join all elements of the array into a string skipping elements that are
//undefined, null, NaN or Infinity.


function arrToStr(niz) {
    var noviStr = "";
    
    for (var i = 0; i <= niz.length; i++) {
        if (niz[i] !=undefined && niz[i] != null  && niz[i] != Infinity && isFinite(niz[i]) ){
            noviStr +=niz[i];
                         
        }
    } return noviStr;

}
console.log(arrToStr([NaN, 0, 15, false, -22, "", undefined, 47, null]));

//3.Write a program to filter out falsy values from the array.
function getNumber(array){
    var newArray =[];
    for (var i = 0; i<=array.length;i++){
        if (typeof(array[i])==="number"){
            newArray.push(array[i]);
        }
    }return newArray;
} console.log(getNumber([NaN, 0, 15, false, -22, "", undefined, 47, null]));

//4. Write a function that reverses a number. The result must be a number.
function reverseNumber(num){
var strRevers=""
var stringNum =num.toString();
for ( var i=stringNum.length; i>0; i--){
    strRevers+=i;
} return parseInt(strRevers);
} console.log(reverseNumber(12345));

//5.5. Write a function to get the last element of an array. Passing a parameter &#39;n&#39; will return the
//last &#39;n&#39; elements of the array.
function findTheLast(array,num){
    var lastElement =array[array.length-1];
    for (var i =0; i<=array.length; i++)
    if (num!="undefined" && array[i]==num){
        return [lastElement, array[i]];
    } else {return lastElement;}
    } 
console.log(findTheLast([7, 9, 0, -2],2));

//6. Write a function to create a specified number of elements with pre-filled numeric value
//array.
function writeArray(num, value){
    var array=[];
    if (typeof(value)==undefined){
       var value = null;}
    for (var i=1;i<=num; i++){
        array.push(value);
    }return array;
} console.log(writeArray(3,"rep"));

//8. Write a function to find a word within a string.
function findWord(string, word){
    var count = 0;
    for (i in string){
        if (/word/.test(string)==true){
            count ++;
        }
    } return "the word " + word + " in string shows " + count + " times";
} console.log(findWord("aa bb cc dd aa", "aa"));

//9. Write a function to hide email address.
//&quot;myemailaddress@bgit.rs&quot; -&gt; &quot;mye...@bgit.rs&quot;

//10. Write a program to find the most frequent item of an array.
//[3, "a", "a", "a", 2, 3, "a", 3, "a', 2, 4, 9, 3]