//Write a program that calculates the maximum of two given numbers.
function maximum(a,b){
    var max =0;
    if (a>b){
        max =a;
    }else  if (a==b){
        console.log ("brojevi su jednaki")
    } else {max=b}

    return max;
}

var veciBroj = maximum (17,9);
console.log(veciBroj);

//2. Write a program that checks if a given number is odd.
function neparanBroj (a){
    var odd = true;
    if (a%2!=0){
        console.log ("da li je broj neparan? " + odd);

    }else {odd = false}

    return odd;
}
var daLiJeNeparan = neparanBroj(116);
console.log (daLiJeNeparan);

//7. Write a program that calculates a number of digits of a given number.

function brojCifara(a){
    var digitNum =0;
    while (a != 0)
    {
        a = Math.floor(a / 10);
        digitNum+=1;
    }
    return digitNum;
}

var numDigit = brojCifara(1555589);
console.log(numDigit);

//Write a program that checks if a given number is a three digit long number.

function isThreeDigits(a){
    var triCifre =true;
    digitNum=0;
    while (a != 0)
    {
        a = Math.floor(a / 10);
        digitNum+=1;
    }
    if (digitNum ==3){
      triCifre=true;
    } else{triCifre=false;}
    
    return triCifre;

    
}

var daLiImaTriCifre = isThreeDigits(758);
console.log("da li broj ima tri cifre " + daLiImaTriCifre);

//4. Write a program that calculates an arithmetic mean of four numbers.

function sum(a,b,c,d){
    var suma = a+b+c+d;
    var brojClanova =arguments.length
    var aritmet =suma/brojClanova
    return aritmet;
}


var aritmet = sum(5,10,10,5);
console.log (aritmet);
// Write a program that draws a square of a given size. For example, if the size of square
//is 5 the program should draw:

function square(a){
    var zvezdica ="*";
    var sirina =a;
    var duzina =a;
    var square ='';
for (var i=0;i<=a;i++) {
    for (var j=0;j<=a;j++){
        if (i==j || j==i){
            square+="*";
        }else if (i==a-1|| j==a-1)
        { square+="*";}
        else {square =" ";}
    }
    return square;
}

    }
 var kvadrat = square(5);
 console.log (kvadrat);


 //6. Write a program that draws a horizontal chart representing three given values. For
//example, if values are 5, 3, and 7, the program should draw:

function nacrtaj(a,b,c){
    var zvezdica ="*";
    var prviRed= zvezdica.repeat(a);
    var drugiRed=zvezdica.repeat(b);
    var trecired=zvezdica.repeat(c);
    var niz=[];
   niz.push(prviRed,drugiRed,trecired);

   for (var i=0;i<=niz.length;i++){
    console.log(niz[i]);
   
   } 

    return niz[i];
}

console.log(nacrtaj(5,3,7));
    




 //Write a program that calculates a number of appearances of a given number in a given
//array.
var a = [2, 4, 7, 8, 7, 7, 1];
var e = 7;

function brojPojavljivanja(a,e){
   var brojPonavljanja=0;
   for (var i=0;i<+a.length;i++){
    if (a[i]==e){
        brojPonavljanja+=1;
    } else {"nema trazenog broja u zadatom nizu"}

   }
    return brojPonavljanja;
}

var kolikoPutaBroj = brojPojavljivanja([2, 4, 7, 8, 7, 7, 1],7)
console.log(kolikoPutaBroj);

//Write a program that calculates the sum of odd elements of a given array.
function sumOdd(a){
    suma =0;
    for (var i=0;i<a.length;i++){
        if (a[i]%2!=0){
            suma =suma+a[i];
        } else {suma =suma;}
        
    }
    return suma;
    
}

var sumaNeparnih = sumOdd([2, 4, 7, 8, 7, 7, 1])
console.log( sumaNeparnih);

//Write a program that calculates the number of appearances of a letter a in a given string.
//odify the program so it calculates the number of both letters a and A.

function count(a, e, t){
    suma = 0;
    var znak =e;
    var drugiZnak =t;
    for (var i=0;i<=a.length; i++){
        if (a[i]==znak|| a[i]==drugiZnak){
            suma +=1;
        } else {suma=suma;}
    }
    return suma;
}


var brojPojavljivanja = count ("sloboda", "a", "A")
console.log (brojPojavljivanja);

//Write a program that concatenates a given string given number of times. For example, if
//“abc” and 4 are given values, the program prints out abcabcabcabc.

function povecaj(nekiString,a){
    var noviString = nekiString.repeat(a);
    
 return noviString;
}

var noviString = povecaj("Maglovit dan ", 4);
console.log (noviString);