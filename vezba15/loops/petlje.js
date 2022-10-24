for (var x=0; x<=10; x++){
    console.log (x*x);
}

//prvi zadatak
for(var x=0;x<=15;x++){
    if (x%2==0) {
        console.log ("parni brojevi su " + x)
    } else {console.log ("Neparni brojevi su: " + x);}
}

//drugi zadatak

var zbir=0;
for (x=0;x<=1000;x++){
    if (x%3==0 || x%5==0){
        zbir =zbir+x;
        console.log(zbir);
    } 
} console.log(zbir);

//treci zadatak 
var zbir=0;
var proizvod=1;
var niz =[10,20,30, 40,50, 60];
for (x=0;x<niz.length;x++){
    zbir+=niz[x];
    proizvod*=niz[x];
}
    console.log ("zbir brojeva je " + zbir + " proizvod brojeva je " + proizvod);

//cetvrti zadatak

var niz= ['1', 'A','B', "c", "r", true,NaN, undefined];
for (x=0;x<=niz.length-1;x++){
    console.log(niz[x]);
} 

//peti zadatak
var a = [[1, 2, 1, 24],[8, 11, 9, 4],[7, 0, 7, 27]];
for (i=0;i<=a.length-1;i++){
   console.log  (a[i]);
};

//sesti zadatak
var zbirKvadrata=0;
for (x=0;x<=20;x++){
 zbirKvadrata +=(x*x);
}
 console.log(zbirKvadrata);

 //sedmi zadatak
 var oceneNiz= [80, 77,88, 95, 68];
 var prosek=0;
  for (x=0;x<=oceneNiz.length-1;x++){
  prosek += oceneNiz[x];
  } prosek= prosek/oceneNiz.length;

  console.log (prosek);
   if ( prosek<=100 && prosek>90 ){
      console.log ("ocena je " + "A")
   } else if  (prosek<90 && prosek>80 ) {
   console.log ("ocena je "+ "B")}
   else if (prosek>70 && prosek<80){
      console.log ("Ocena je "+ "C")
   }else if (prosek<70 && prosek>60) {
      console.log("Ocena je "+ "D")
   }else  {
      console.log ("Ocena je " + "F")};
   
  console.log (prosek);
  
  //Osmi zadatak
 
  for (i=0;i<=100;i++){
    if (i%3==0 && i%5!=0){
        console.log("fizz")
    
    }else if (i%5==0 && i%3!=0){
        console.log ("Buzz")
    } else if(i%5==0 && i%3==0){
        console.log("FizzBuzz")
    } else {console.log(i)}}
    ;
    