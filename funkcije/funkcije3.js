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
    var noviNiz=[];
    for (var i = 0; i <= niz.length; i++) {
        if (niz[i] !=undefined && niz[i] != null  && niz[i] != Infinity && niz[i] !=NaN){
            noviNiz.push(niz[i]);
           noviStr=noviNiz.toString();                //nije sasvim tacan
        }
    } return noviStr;

}
console.log(arrToStr([NaN, 0, 15, false, -22, "", undefined, 47, null]));

//3.Write a program to filter out falsy values from the array.
