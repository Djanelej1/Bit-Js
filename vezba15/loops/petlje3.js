// Write a code to find the sum of first 10 natural numbers and show that sum on screen.
var suma=0;
for (i=0;i<=10;i++){
    suma +=i;    
}console.log("zbir je " + suma);

//2. Write a code to display the cube of the number up to given an integer and show it on screen. Example: 2 up to cube equals 8.
var i=2;
var cube =i*i*i;
console.log ("kub broja " + i + " je " +cube);

//3.Write a code to calculate the factorial of a given number and show it on screen. Example: The Factorial of 5 is 120.
var broj =5;
var faktorijel=1;
for (i=1;i<=broj;i++){
 faktorijel=faktorijel*i;
} console.log ("Faktorijel broja " + broj + " je " + faktorijel);

//4. Write a code to display the n terms of even natural number and their sum.
var n=10;
var suma=0;
var brojPojavljivanja=0;
for (i=0; i<=n;i++){
    if (i%2==0){
        brojPojavljivanja+=1;
        suma=suma+i;   
    }
 
} console.log("Suma parnih brojeva " + "od prvih " + n + " je " + suma + "a parnih ima " + brojPojavljivanja);

//5.Write a code to calculate the sum of digits in a number and show that sum on screen. 
var broj =232;
var suma=0
while(broj>0){
    suma += broj%10;
    broj=broj/10;
}console.log (Math.trunc(suma)); // ne znam kako da uklonim vrednost iza tacke, a nasla sam ovu funkciju na netu

//6.Write a code to count all letters in a word and show that count on screen. 
var rec= "Eclip546ssse";
var brojSlova =0;
for (i=0; i<rec.length; i++){
    if (rec[i]!="0"&& rec[i]!='1' && rec[i]!="2"&& rec[i]!="3" &&
    rec[i]!="4" && rec[i]!="5" && rec[i]!="6"&& rec[i]!="7" && rec[i]!="8" 
    && rec[i]!="9"){
        brojSlova+=1;
    }

}console.log (brojSlova);
//7.Write a code to find on which index in array is letter "C" and show that index on screen. 
var a = [1, 3, 32, '$', 'g', 'h', 't', 's', 'c', 66, 23, 'h2'];
var index=0;
var karakter ="c";
for (i in a){
    if (a[i]==karakter){
       index = i;   
    } 
} console.log ("Slovo "+ karakter + " je na "+ index + " mestu");