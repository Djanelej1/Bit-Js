//Write a function to check whether the `input` is a string or not.
function isString(a){
    var stringJe =true;
    if (typeof(a)=== "string"){
       stringJe=true;
    }else {stringJe =false}
    return stringJe
}

console.log ("unos je string " +isString("Ovo je neki tekst"));

//Write a function to check whether a string is blank or not.

function inBlankString(a){
    var prazanString =true;
    if (a===""){
    prazanString = true;
    } else {prazanString =false}
    return prazanString;
}
console.log ("unos je prazan string " + inBlankString(false));

//3. Write a function that concatenates a given string n times (default is 1).
function contString(a, n){
    if (n === undefined){
    n = 1;
    }
    var noviString ="";
    for (i=1;i<=n;i++){
        noviString +=a; 
    }
    return noviString;
}
console.log ("Novi string nakon spajanja je " + contString("Ha", 3));

//Write a function to count the number of letter occurrences in a string.
function brojSlova(a, s){
    var sumBr= 0;
    var slovo =s;
    for (var i=0;i<=a.length;i++){
        if (a[i]===slovo){
            sumBr =sumBr +1;
        } else {sumBr=sumBr}     
    }return sumBr;
}
var letNumb = brojSlova("Slobodan", "o")
console.log (letNumb);
//5. Write a function to find the position of the first occurrence of a character in a string. The
//result should be the position of character. If there are no occurrences of the character, the
//function should return -1.

function firstPosition(a,s){
    var prvoPojavljivanje =0;
    for (var i=0;i<=a.length;i++){
        if (a[i]==s){
            prvoPojavljivanje =i;
            break;}
            else {
                prvoPojavljivanje=-1;
            }
            } return prvoPojavljivanje;
        }
var pozicijaSlova = firstPosition("Slobodan", "o")
console.log ("Prvo pojavljivanje je na " + pozicijaSlova + "mestu");

//6.Write a function to find the position of the last occurrence of a character in a string. The
//result should be in human numeration form. If there are no occurrences of the character,
//function should return -1.
function lastPosition(a,s){
    var poslednjePojavljivanje=0;
    for (var i=a.length-1;i>=0;i--){
        if (a[i]==s){
            poslednjePojavljivanje = i;
            break;}
            else {
                poslednjePojavljivanje=-1;
            }
            } return poslednjePojavljivanje;
        }
var pozicijaSlova = lastPosition("Slobodan", "o")
console.log ("Poslednje pojavljivanje je na " + pozicijaSlova + "mestu");

//7. Write a function to convert string into an array. Space in a string should be represented as
//“null” in new array.
function stringInArray(s){
    var newArray =Array.from(s) 
    for(var i=0;i<=newArray.length;i++){
        if (newArray[i]===" "){
          newArray[i]=null;         
        }
    } return newArray;
}
var noviNiz = stringInArray("tako je dobro kad radi program")
console.log(noviNiz);

function stringInArray(s){
    var newArray =Array.from(s) 
    for(var i=0;i<=newArray.length;i++){
        if (newArray[i]===" "){
          newArray[i]=null;         
        }
    } return newArray;
}
var noviNiz = stringInArray("Random")
console.log(noviNiz);

//Write a function that accepts a number as a parameter and checks if the number is prime or
//not.
