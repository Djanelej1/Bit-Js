//1. Write a function to count vowels in a provided string. Vowels are a, e, i, o, and u as well as A,
//E, I, O, and U.
function isVowel(str) {
    return str.match(/[AEIOU]/gi);
}
function isLetter(str) {
    return str.match(/[a-z]/i);
}
function howMuchVowels(string) {
    if (string < 1) {
        return;
    }

    var vowNum = 0;
    for (var i = 0; i < string.length; i++) {
        if (isLetter(string[i])) {
            if (isVowel(string[i])) {
                vowNum++;

            }
        }


    } return vowNum;
}
console.log(howMuchVowels('Samoglasnik/ SAMOGLASNIk svako slovo koje nije suglasnik'));


//2. Write a function that combines two arrays by alternatingly taking elements.
//[‘a’,’b’,’c’], [1,2,3] -&gt; [‘a’,1,’b’,2,’c’,3]
function spojNiz(array1, array2) {
    var arrayJoin = [];
    for (var i in array1) {

        arrayJoin.push(array1[i]);
        arrayJoin.push(array2[i]);
    } return arrayJoin;
}
console.log(spojNiz(["a", "b", "c"], [1, 2, 3]));

//3.3. Write a function that rotates a list by k elements.
function rotate(arr, k) {

    for (var i = 0; i <= k + 1; i++) {
        arr.unshift(arr.pop(arr[i]));
    }

    return arr;
}
console.log(rotate([1, 2, 3, 4, 5, 6], 2));

//  4. Write a function that takes a number and returns array of its digits.

function brojtoString(number) {
    var broString = number.toString();
    var arrayNum = [];

    for (var i = broString.length - 1; i >= 0; i--) {

        arrayNum.push(parseInt(broString[i]));

    } return arrayNum;
} console.log(brojtoString(12564));

//5. Write a program that prints a multiplication table for numbers up to 12.
function multiple(a, b) {
    var c = a * b;
    return c;
}


function multiplicationTable(num1) {

    for (i = 1; i <= num1 - 1; i++) {
        for (y = num1 - 1; y >= 1; y--) {
            var proizvod = multiple(i, y);
            console.log("proizvod " + i + " i " + y + " je " + proizvod);


        }
    } return ("prikazana je tablica mnozenja brojeva do 12");
} console.log(multiplicationTable(12));

//6.6. Write a function to input temperature in Centigrade and convert to Fahrenheit.

function cToF(num) {
    var farenhajt = ((num * 1.8) + 32).toFixed(2);
    return ("temperatura od " + num + "C je " + farenhajt + "F");
} console.log(cToF(-11));

//7. Write a function to find the maximum element in array of numbers. Filter out all non-number
//elements.
function maxValue(array) {
    var maxValue = 0;
    for (var i = 0; i <= array.length; i++) {
        if (array[i] > maxValue) {
            maxValue = array[i];
        }
    } return maxValue;
}
function returnMaxValue(array) {
    var newArray = [];
    if (array.lenght < 1 || !array) {
        return array;
    }

    for (i = 0; i < array.length; i++) {
        if (!isNaN(array[i])) {
            newArray.push(array[i]);
            var max = maxValue(newArray);
        }
    } return max;


} console.log(returnMaxValue([NaN, 0, 15, false, -22, "", undefined, 47, null, 110]));

//8. Write a function to find the maximum and minimum elements. Function returns an array.
function maxValue(array) {
    var maxValue = 0;
    for (var i = 0; i <= array.length; i++) {
        if (array[i] > maxValue) {
            maxValue = array[i];
        }
    } return maxValue;
}

function minValue(array) {
    var minValue = 0;
    for (var i = 0; i <= array.length; i++) {
        if (array[i] < minValue) {
            minValue = array[i];
        }
    } return minValue;
}

function findMinAndMax(array) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        var minimum = minValue(array);
        var maximum = maxValue(array);

    } return [minimum, maximum];

}
var minAndMax = findMinAndMax([2, 76, 9087, -234, 77, -0.2]);
console.log(minAndMax);

//9. Write a function to find the median element of array.
function ascendingArray(array) {

    array.sort(function (a, b) { return b - a }); return array;
}

function findMedian(array) {
    var median = 0;
    
    if (!array || array.length < 1) {
        return array;
    }
    for (i = 0; i <= array.length; i++) {
        var rastuciNiz = ascendingArray(array); {
        }
    }
    var sredNiza = Math.floor(rastuciNiz.length/2);
    for (i = 0;i<= rastuciNiz.length; i++) {
        if (rastuciNiz.length % 2 == 0) {
            median = (rastuciNiz[sredNiza-1] + rastuciNiz[sredNiza]) / 2;
        } else { median = rastuciNiz[sredNiza]; }
    } return median;
}

console.log(findMedian([1, 3, 4,7, 8, 9]));

//10. Write a function to find the element that occurs most frequently.

function findAndCount(array, element) {
    var counter = 0;
    for (i in array) {
        if (array[i] == element) {
            counter += 1;
        }
    } return counter;
}


function mostFrequent(array) {
    var mostFreq = "";
    var mostApperiances = 0;
    var count = 0;
    for (var i = 0; i < array.length; i++) {
        count = findAndCount(array, array[i]);

        if (count > mostApperiances) {
            mostApperiances = count;
            mostFreq = array[i];
        }
    } return mostFreq;
}
console.log(mostFrequent(["a", "b", "b", "a", "a",]));

//11. Write a function to find and return the first, middle and last element of an array if the array
//has odd number of elements. If number of elements is even, return just the first and the
//last. In other cases (empty array), input array should be returned.

function returnElements(array) {
    if (!array || array.lenght < 1) {
        return array;
    }

    if (array.length % 2 != 0) {
        return [array[0], array[Math.floor(array.length / 2)], array[array.length - 1]];
    } else { return [array[0], array[array.length - 1]] };
}
console.log(returnElements([1, 3, 4, 6, 8, 9, 9]));

//12.12. Write a function to find the average of N elements. Make the function flexible to receive
//dynamic number or parameters.

function averageArray(array) {
    var sum = 0;
    var average = 0;
    for (i in array) {
        sum += array[i];
        average = Math.round(sum / array.length);
    } return average;

} console.log(averageArray([1, 3, 4, 6, 8, 9, 9]));

//13.13. Write a function to find all the numbers greater than the average.

function averageArray(array) {
    var sum = 0;
    var average = 0;
    for (i in array) {
        sum += array[i];
        average = Math.round(sum / array.length);
    } return average;
}

function graterThanAverage(array) {
    var average = averageArray(array);
    var gratAvg = [];
    for (i in array) {
        if (array[i] > average) {
            gratAvg.push(array[i]);

        }
    } return gratAvg;
} console.log(graterThanAverage([1, 3, 4, 6, 8, 9, 9]));

//14.14. The body mass index (BMI) is the ratio of the weight of a person (in kilograms) to the
//square of the height (in meters). Write a function that takes two parameters, weight and
//height, computes the BMI, and prints the corresponding BMI category:
//● Starvation: less than 15
//● Anorexic: less than 17.5
//● Underweight: less than 18.5
//● Ideal: greater than or equal to 18.5 but less than 25
//● Overweight: greater than or equal to 25 but less than 30
//● Obese: greater than or equal to 30 but less than 40
//● Morbidly obese: greater than or equal to 40//

function bMIcomputes(kilograms, height) {
    var heightInCm = height / 100;
    console.log(heightInCm);
    var bMI = (kilograms / Math.pow(heightInCm, 2));
    console.log(bMI);
    if (bMI > 0 && bMI < 15) {
        return ("starvation");
    } else if (bMI >= 15 && bMI < 17.5) {
        return ("Anorexic");
    } else if (bMI < 18.5 && bMI >= 17.5) {
        return ("Underweight")
    } else if (bMI >= 18.5 && bMI < 25) {
        return ("Ideal");
    } else if (bMI >= 25 && bMI < 30) {
        return ("Overweight")
    } else if (bMI >= 30 && bMI < 40) {
        return ("Obese");
    } else (bMI >= 40)
    return ("Morbidly obese");
}


console.log(bMIcomputes(100, 164));

//  15. Write a function that takes a list of strings and prints them, one per line, in a rectangular
//frame.:
function addFrame(array) {
    if (!array || array.length < 1) {
        return array;
    }

    var maxLength = 0;

    for (var i = 0; i < array.length; i++) {
        var wordLength = array[i].length;
        if (wordLength > maxLength) {
            maxLength = wordLength;
        }
        maxLength += 4;
        var header = zaZvezdice(maxLength);
        var result = header + "\n";

        for (var i = 0; i < array.length; i++) {
            result += addStars(array[i], maxLength) + "\n";

        } result += header;
    } return result;
}
console.log(addFrame(["Hello", "world", "in", "a", "frame"]));

function zaZvezdice(maxLength) {
    var result = " ";
    for (var i = 0; i <= maxLength; i++) {
        result += "*";
    } return result;
}
function addStars(string, maxLength) {
    var result = "* " + string;
    for (var i = 0; i < (maxLength - string.length) - 4; i++) {
        result += " ";
    } return result + " *";
}



