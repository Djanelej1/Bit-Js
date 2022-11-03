//1. Write a program that checks if a given element e is in the array a.
function uNizu(a, e) {
    var proveri = "yes";
    for (i = 0; i <= a.length; i++) {
        if (a[i] == e) {
            proveri = "yes";
        } else { proveri = "no" };


    } return proveri;
}
console.log(uNizu([5, -4.2, 3, 7], 3))
//console.log ("Element je u nizu " + daLiJeuNizu);

//2.2. Write a program that multiplies every positive element of a given array by 2.

function putaDva(array, number) {
    for (var i = 0; i <= array.length; i++) {
        if (array[i] > 0) {
            array[i] *= number;
        }
    } return array;
}
var pomnoziNiz = putaDva([-3, 11, 5, 3.4, -8], 2)
console.log(pomnoziNiz);

//3.Write a program that finds the minimum of a given array and prints out its value and
//index.
function minNiz(array) {
    var min = 0;
    var mesto = 0;
    for (var i = 0; i <= array.length; i++) {
        if (array[i] < min) {
            min = array[i];
            mesto = i;
        }
    } return ("Najmanji broj niza je " + min + " i nalazi se na " + mesto + ".mestu");
}
console.log(minNiz([4, 2, 2, -1, 6]));

//4.Write a program that finds the second smallest number and prints out its value.
function secondSmaller(array) {
    var min = array[0];
    var secMin = array[0];
    for (var i in array) {
        if (array[i] < min) {
            min = array[i];

        }
    }

    for (var i in array) {
        if (array[i] < secMin && array[i] > min) {
            secMin = array[i];
        }
    } return secMin;
}
var drugiMin = secondSmaller([4, 2, 2, -1, 6]);
console.log("drugi najmanji broj je " + drugiMin);

//5.Write a program that calculates the sum of positive elements in the array.
function sumaPozitivnih(array) {
    var sum = 0;
    for (var i in array) {
        if (array[i] > 0) {
            sum += array[i];
        }
    } return sum;
} console.log(sumaPozitivnih([3, 11, -5, -3, 2]));

    //6.Write a program that checks if a given array is symmetric. An array is symmetric if it can
//be read the same way both from the left and the right hand side.
function simetricArray(array){
    arrayIsSimetric= true;
for (x = 0; x < array.length / 2; x++) {
    if (array[x] == array[array.length -x- 1]) {
        arrayIsSimetric=true;
    } else {arrayIsSimetric=false;}
}return arrayIsSimetric;
}
console.log(simetricArray([2, 4, -2, 7, -2, 4, 2]));

//7. Write a program that intertwines two arrays. You can assume the arrays are of the same
//length.
function spojNiz(array1, array2){
    var arrayJoin=[];
    for (var i in array1){
        
            arrayJoin.push(array1[i]);
            arrayJoin.push(array2[i]);
        }return arrayJoin;
    }
console.log(spojNiz([4, 5, 6, 2], [3, 8, 11, 9]));

//8. Write a program that concatenates two arrays.
function arraysJoin(array1, array2){
    for (var y=0;y<array2.length;y++){
        array1[array1.length] = array2[y];
    }
 return(array1);
} console.log (arraysJoin([4, 5, 6, 2], [3, 8, 11, 9]));

//Write a program that deletes a given element e from the array a.
function removeElements(array, e){
    var noviNiz=[];
  for (i in array){
    if (array[i]!=e){
        noviNiz.push(array[i]);

    }
  } return noviNiz;
}
console.log(removeElements([4, 6, 2, 8, 2, 2], 2));

//Write a program that inserts a given element e on the given position p in the array a. If
//the value of the position is greater than the array length, print the error message.
function ubaciElement(array,e,p){
    if(p <= array.length && p >= 0) {
        for(i = array.length; i > p; i--) {
            array[i] = array[i-1];
        } array[p] = e;
    
    } else {
        console.log('error');
    } return array;
}console.log(ubaciElement( [2, -2, 33, 12, 5, 8],78,3));
