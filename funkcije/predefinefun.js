//1. Write a function that converts an array of strings into an array of numbers. Filter
//out all non-numeric values.
function izdvojBrojeve(array){
    var nizBr=[];
    for (var i =0;i<array.length; i++){
        if (!isNaN(array[i])){                              
            nizBr.push(Number(array[i]));
        }
    } return nizBr;
} console.log(izdvojBrojeve(["1", "21", undefined, "42", "1e+3", Infinity]));

//2. Write a program to join all elements of the array into a string skipping elements
//that are undefined, null, NaN or Infinity.
function arrToStr(niz) {
    var noviStr = "";
    
    for (var i = 0; i <= niz.length; i++) {
        if (isFinite(niz[i]) && niz[i] !=undefined && niz[i] != null  && niz[i] != Infinity ){
            noviStr+=niz[i];               
        }
    } return noviStr;

}
console.log(arrToStr([NaN, 0, 15, false, -22, "", undefined, 47, null]));

//3.//3.Write a program to filter out falsy values from the array.
function getNumber(array){
    var newArray =[];
    for (var i = 0; i<=array.length;i++){
        if (typeof(array[i])==="number" && isFinite(array[i])){
            newArray.push(array[i]);
        }
    }return newArray;
} console.log(getNumber([NaN, 0, 15, false, -22, "", undefined, 47, null]));

//4. Write a program that calculates a number of integer values in the array.
//Input: [NaN, 23.1, 15, false, -22.5, &#39;&#39;, 4, 7, null]
//Output: 3
function sumInt(array){
    var count =0;
    for (var i=0; i< array.length;i++){
        if (Number(array[i]) && Number.isInteger(array[i])){
            count+=1;
        }
    } return count;
}console.log(sumInt([NaN, 23.1, 15, false, -22.5, " ", 4, 7, null]));

//5. Write a program that calculates a number of float values in the array.
function sumFloat(array){
    var count=0;
    for (var i=0; i< array.length;i++){
        if (Number(array[i]) && array[i]%1!==0){
            count +=1;
        }
    } return count;
}console.log(sumFloat([NaN, 23.1, 15, false, -22.5, " ", 4, 7, null]));

