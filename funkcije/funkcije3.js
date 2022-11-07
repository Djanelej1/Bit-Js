//1. Write a program to insert a string within a string at a particular position (default is 1,
//beginning of a string).
function dodajNovi(a, rec, slog) {
     
    if(a <= rec.length && a >= 0) {
        for(i = rec.length; i > a; i--) {
            rec[i] = rec[i-1];
        } rec[a] += slog ;                                 //netacno 
    
    } else {
        a=0;
    } return rec;
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
    var element =0;
    var lastElement =array.length;
    for (var i=lastElement; i>=0;i--){
        if (typeof(num) !="undefined"){
           element =array[i];
        }  //netacno
    } return element;
}console.log(findTheLast([7, 9, 0, -2]));