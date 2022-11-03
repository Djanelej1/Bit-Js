//Write a function to check whether the `input` is a string or not.
function isString(a) {
    var stringJe = true;
    if (typeof (a) === "string") {
        stringJe = true;
    } else { stringJe = false }
    return stringJe
}

console.log("unos je string " + isString("Ovo je neki tekst"));

//Write a function to check whether a string is blank or not.

function inBlankString(a) {
    var prazanString = true;
    if (a === "") {
        prazanString = true;
    } else { prazanString = false }
    return prazanString;
}
console.log("unos je prazan string " + inBlankString(false));

//3. Write a function that concatenates a given string n times (default is 1).
function contString(a, n) {
    if (n === undefined) {
        n = 1;
    }
    var noviString = "";
    for (i = 1; i <= n; i++) {
        noviString += a;
    }
    return noviString;
}
console.log("Novi string nakon spajanja je " + contString("Ha", 3));

//Write a function to count the number of letter occurrences in a string.
function brojSlova(a, s) {
    var sumBr = 0;
    var slovo = s;
    for (var i = 0; i <= a.length; i++) {
        if (a[i] === slovo) {
            sumBr = sumBr + 1;
        } else { sumBr = sumBr }
    } return sumBr;
}
var letNumb = brojSlova("Slobodan", "o")
console.log(letNumb);
//5. Write a function to find the position of the first occurrence of a character in a string. The
//result should be the position of character. If there are no occurrences of the character, the
//function should return -1.

function firstPosition(a, s) {
    var prvoPojavljivanje = 0;
    for (var i = 0; i <= a.length; i++) {
        if (a[i] == s) {
            prvoPojavljivanje = i;
            break;
        }
        else {
            prvoPojavljivanje = -1;
        }
    } return prvoPojavljivanje;
}
var pozicijaSlova = firstPosition("Slobodan", "o")
console.log("Prvo pojavljivanje je na " + pozicijaSlova + "mestu");

//6.Write a function to find the position of the last occurrence of a character in a string. The
//result should be in human numeration form. If there are no occurrences of the character,
//function should return -1.
function lastPosition(a, s) {
    var poslednjePojavljivanje = 0;
    for (var i = a.length - 1; i >= 0; i--) {
        if (a[i] == s) {
            poslednjePojavljivanje = i;
            break;
        }
        else {
            poslednjePojavljivanje = -1;
        }
    } return poslednjePojavljivanje;
}
var pozicijaSlova = lastPosition("Slobodan", "o")
console.log("Poslednje pojavljivanje je na " + pozicijaSlova + "mestu");

//7. Write a function to convert string into an array. Space in a string should be represented as
//“null” in new array.
function stringInArray(s) {
    var newArray = Array.from(s)
    for (var i = 0; i <= newArray.length; i++) {
        if (newArray[i] === " ") {
            newArray[i] = null;
        }
    } return newArray;
}
var noviNiz = stringInArray("tako je dobro kad radi program")
console.log(noviNiz);

function stringInArray(s) {
    var newArray = Array.from(s)
    for (var i = 0; i <= newArray.length; i++) {
        if (newArray[i] === " ") {
            newArray[i] = null;
        }
    } return newArray;
}
var noviNiz = stringInArray("Random")
console.log(noviNiz);

//Write a function that accepts a number as a parameter and checks if the number is prime or
//not.

function Prost(n) {
    var daLiJeProst = true;
    for (var x = 2; x < n; x++) {
        if (n % x === 0) {
            daLiJeProst = false;
        } else { daLiJeProst = true; }
    }
    return daLiJeProst;
}

var prostBroj = Prost(7);
console.log("Broj je prost " + prostBroj);

//Write a function that replaces spaces in a string with provided separator. If separator is not
//provided, use “-” (dash) as the default separator.
function separatorChange(a, rec) {
    var noviString = "";
    for (var i = 0; i <= rec.lengh; i++) {
        if (rec[i] === " ") {
            rec[i] = a;
            noviString += rec[i];
        } else if (a!="+" && a!="_") {            /// ne znam kako da resim ovo
            rec[i] = "-";
            noviString = +rec[i];
        } 
    }return noviString;
}

console.log(separatorChange("+", "Bilo jednom jedno pile"));

//10.Write a function to get the first n characters and add “...” at the end of newly created string.
function uzmiString(n, rec){
    var deoStringa=rec.substring(0,n);
    return deoStringa+"...";
        
    }
 console.log (uzmiString(5,"Cetrdesete"));

 //11.Write a function that converts an array of strings into an array of numbers. Filter out all
//non-numeric values.
function nizBrojeva(niz){

    var noviNiz=[];
    for (i=0;i<=niz.lenght;i++){
        if ( Number(niz[i])){
            noviNiz.push[niz[i]]; // neuspelo
            
        }
    }return noviNiz;
}
var samoBrojevi =nizBrojeva(["1","21", undefined, "42", "1e+3", Infinity]);
console.log(samoBrojevi);

const arr = ["1","21", undefined, "42", "1e+3", Infinity];
const validNumbers = arr.filter(Number);

// 👇️ ['1', '3', 5]             // resenje
console.log(validNumbers);

const toNumbers = validNumbers.map(Number);
console.log(toNumbers); // 👉️ [1, 3, 5]

//11.Write a function to calculate how many years there are left until retirement based on the
//year of birth. Retirement for men is at age of 65 and for women at age of 60. If someone is
//already retired, a proper message should be displayed.

function yearsToRet(s,y){
    var howManyYears=0;
    var maleRet =65;
    var femaleRet=60;
    var starost =2022-y;
    if (s==="m" && starost<65){
        howManyYears =maleRet-starost;
    }else if (s==="f" && starost<60){
        howManyYears=femaleRet-starost;
    } else {console.log("Lice je vec u peziji")}

       return howManyYears; 
    }
console.log (yearsToRet("f", 1955));

//13. Write a function to humanize a number (formats a number to a human-readable string) with
//the correct suffix such as 1st, 2nd, 3rd or 4th.
function humanNum(a){
   var redniBr="";
   switch (a && a%10){
    case 1:
        redniBr=a+"st";
        break;
    case 2:
        redniBr=a+"nd";
        break;
    case 3:
        redniBr=a+"rd";
        break;
    default: redniBr=a+"th";
   }
return redniBr;
}
console.log(humanNum(131));