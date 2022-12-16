//1. Create a function that takes an array of objects (groceries) which calculates the total
//price and returns it as a number.
var groceries = [{ product: "milk", quantity: 13, price: 1.50 }, { product: "bread", quantity: 7, price: 2.50 }, { product: "letuce", quantity: 5, price: 0.50 }];

function totalPrice(groceries) {
    var total = 0;
    for (var i = 0; i < groceries.length; i++) {
        total += (groceries[i].price * groceries[i].quantity)
    } return total;
}

var total = totalPrice(groceries);
console.log(total);


//2.You go to a jewelry shop and try to find the most expensive piece of jewelry. You write
//down the name of each piece of jewelry and its price. Create a function that gets the
//name of the piece of jewelry with the highest price and returns &quot;The most expensive
//one is the {name of jewelry piece}&quot;.
//Example:
//mostExpensive([{name:’DiamondEarings’, price: 980}, {name:’Gold watch’, price:250},
//…])
//- The most expensive one is the diamond Ring.

var jewelry = [{ name: "Diamond Earings", price: 780 }, { name: "Gold watch", price: 300 }, { name: "silver earings", price: 900 }];
function mostExpensive(jewelry) {
    var maxprice = 0;
    var nameofMostEx = "";
    for (var i = 0; i < jewelry.length; i++) {
        if (jewelry[i].price > maxprice) {
            maxprice = jewelry[i].price;
            nameofMostEx = jewelry[i].name;

        }

    } return "the most expensive is " + nameofMostEx + " costs " + maxprice;
}
var exepensive = mostExpensive(jewelry);
console.log(exepensive);

//3.Given a word, create an object that stores the indexes of each letter in an array. Make
//sure the letters are the keys. Make sure the letters are symbols. Make sure the indexes
//are stored in an array and those arrays are values.
function nizIndexa(word, letter) {
    var listaIndexa = [];
    for (var i = 0; i < word.length; i++) {
        if (word[i] == letter) {
            listaIndexa.push(i)
        }
    } return listaIndexa;
}
function wordToObject(word) {
    var result={};
    
    for (var i = 0; i < word.length; i++) {
        var letter = "";
    var lista =[];                                                    //netacno
        letter = word[i];
        console.log(letter);
     lista = nizIndexa(word, letter);
        result = {letter:lista};
    }  
    return result;

}

var nekaRec = wordToObject("dodo");
console.log(nekaRec);


//Nikolino resenje
function mapLetters(str = '') {
    if (!str || str.length == 0) {
        return '';
    }

    var result = {};
    for (var i = 0; i < str.length; i++) {
        var letter = str[i];
        if (result['' + letter]) {
            continue;
        }
        var newArray = [i];
        for (var j = 0; j < str.length; j++) {
            if (letter == str[j] && i != j) {
                newArray.push(j);
            }
        }

        result['' + letter] = newArray;
    }

    return result;
}

console.log(mapLetters('dodo'));
//4. And who cursed the most in the fight between you and your spouse? Given an object
//with three rounds, with nested objects as your scores per round, return a string of who
//cursed the most: If you, return &quot;ME!&quot; If your spouse, return &quot;SPOUSE!&quot; If a draw, return
//&quot;DRAW!&quot;
//determineWhoCursedTheMost([{me: 10, spouse: 5 }, { me: 5, spouse: 10 },
//    { me: 0, spouse: 10, }])

function determineWhoCursedTheMost(input = []) {
    if (!input && input.me == null && input.spouse == null) {
        return "";
    }
    var sumMe = 0;
    var sumSpouse = 0;
    for (var i = 0; i < input.length; i++) {
        sumMe += input[i].me;
        sumSpouse += input[i].spouse;

    }

    var whoCursedMore = "";
    if (sumMe > sumSpouse) {
        whoCursedMore = "ME";
    } else if (sumSpouse > sumMe) {
        whoCursedMore = "SPOUSE";
    } else if (sumMe == sumSpouse) {
        whoCursedMore = "DRAW";
    } return whoCursedMore;

} console.log(determineWhoCursedTheMost([{ me: 40, spouse: 5 }, { me: 9, spouse: 10 }, {
    me: 9,
    spouse: 10
}]));
//5.Create a function that converts color in RGB format to Hex format.
//Examples:
//rgbToHex({red: 0, green: 128, blue: 192}) ➞ &quot;#0080c0&quot;


//6. Create a function that takes an amount of monetary change (e.g. 47 cents) and breaks
//down the most efficient way that change can be made using USD quarters, dimes,
//nickels and pennies. Your function should return an object.

function makeChange(cents) {
    if (!cents && cents == 0 && cents > 99) {
        return null;
    }
    var q = 0;
    var d = 0;
    var n = 0;
    var p = 0;
    q = parseInt(cents / 25);
    cents = cents % 25;
    d = parseInt(cents / 10);
    cents = cents % 10;
    n = parseInt(cents / 5);
    cents = cents % 5;
    p = parseInt(cents / 1);
    result = { "q": q, "d": d, "n": n, "p": p }

    return result;
} console.log(makeChange(24));
console.log(makeChange(98));

//7. Create a function that takes an array of objects like { name: &quot;John&quot;, notes: [3, 5, 4]} and
//returns an array of objects like { name: &quot;John&quot;, avgNote: 4 }. If student has no notes (an
//    empty array) then let&#39;s assume avgNote: 0.
function returnAvg(input = []) {
    if (!input && input.name == "") {
        return null;
    }

    var result = {};
    var avg = 0;
    var sum = 0
    for (var y = 0; y < input.notes.length; y++) {
        sum += input.notes[y];
        avg = parseInt(sum / input.notes.length);
        result = { name: input.name, avgNote: avg }

    }
    if (input.notes == 0) {
        result = { name: input.name, avgNote: 0 }
    } return result;


} console.log(returnAvg({ name: "John", notes: [1, 9, 8] }));

//8. Given an object with students and the grades that they made on the tests that they
//took, determine which student has the best Test Average. The key will be the student&#39;s

//name and the value will be an array of their grades. You will only have to return the
//student&#39;s name. You do not need to return their Test Average.
function getBestStudent(input = []) {
    if (!input && input.name == "" && input.grades == []) {
        return null;
    }

    var result = {};
    var avg = 0;
    var bestAvg = 0;
    
    for (var i = 0; i < input.length;i++) {
        var listOfGrades = input[i].grades;
        var sum =0;
        for (var y = 0; y < listOfGrades.length;y++) {
             sum += listOfGrades[y];    
        }
        avg = (sum / listOfGrades.length); 
         result = { name: input[i].name, avg: avg }; 
         
      //  console.log(result);
    }

    for (var i = 0; i < result.length; i++) {
        if (result[i].avg > bestAvg) {
            bestAvg = result.avg[i];
            console.log(bestAvg);
            
        }
    } return result.name;
} console.log(getBestStudent([{ name: "John", grades: [100, 90, 80] }, {
    name: "Bob", grades: [100, 70,80]
}]));