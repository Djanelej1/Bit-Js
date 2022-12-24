//1.1. Write a JavaScript function that reverses a number. typeof result of the function should
//be “number”.

function reverseNumber(num) {

    if (!num && num == 0) {
        return 0;
    }
    num = num + "";
    return Number(num.split("").reverse().join(""));
}

console.log(reverseNumber(12345));


//2. Write a JavaScript function that returns a passed string with letters in alphabetical order.
//Note: Assume punctuation, numbers and symbols are not included in the passed string.

function inAlphabetical(string) {
    if (!string && string.length < 1) {
        return "";
    }
    var array = (string.toLowerCase().split('')).sort().join('');

    return array;

} console.log(inAlphabetical("Web Master"));

//3.3. Write a function to alphabetize words of a given string. Alphabetizing a string means
//rearranging the letters so they are sorted from A to Z.

function sortInAlphabetical(sentence) {

    if (!sentence && sentence < 1) {
        return ' ';
    }

    function inAlphabetical(string) {
        if (!string && string.length < 1) {
            return ' ';
        }
        var array = string.split('');

        var sorted = array.sort();
        return sorted.join('');
    }

    var arrayOfWords = sentence.split(' ');
    var newArray = [];

    for (var i = 0; i < arrayOfWords.length; i++) {

        var sortedWords = inAlphabetical(arrayOfWords[i]);
        newArray.push(sortedWords);

    } return newArray.join(' ');

} console.log(sortInAlphabetical("Republic Of Serbia"));



//4. Write a function to split a string and convert it into an array of words.

function splitString(string) {

    if (!string && string.length < 1) {
        return ' ';
    }
    return string.split(' ')
} console.log(splitString("John Snow"));



//5.Write a function to convert a string to its abbreviated form.

function makeAbberviation(string) {
    if (!string && string.length < 1) {
        return ' ';
    }

    var arrayOfStrings = string.split(' ');
    var firstName = arrayOfStrings[0];

    var lastName = arrayOfStrings[1].slice(0, 1);

    return firstName + ' ' + lastName + '.';

} console.log(makeAbberviation("John Snow"));


//6. Write a function that adds string to the left or right of string, by replacing it’s characters.

function replaceStringChar(string, replaceString, char) {
    if (!string && !replaceString && !char) {
        return null;
    }

    var stringArr = string.split('');
    if (char == 'l') {

        stringArr.splice(string.length - replaceString.length, string.length, replaceString);
    } else if (char == "r") {
        stringArr.splice(0, replaceString.length, replaceString);
    }

    return stringArr.join('');
}


console.log(replaceStringChar("0000", "123", "l"))
console.log(replaceStringChar("00000000", "123", "r"))



//7. Write a function to capitalize the first letter of a string and returns modified string.

function capitalizeFirst(string) {
    if (!string && string.length < 1) {
        return ' ';
    }

    var stringUpp = string.charAt(0).toUpperCase() + string.slice(1);
    return stringUpp;
} console.log(capitalizeFirst("js string exercises"));


//8. Write a function to hide email addresses to protect them from unauthorized users.

function hideEmail(string) {
    if (!string && string.length < 1) {
        return ' ';
    }

    var hide = string.split("@")[0].length - 10;
    // sa net-a 
    var r = new RegExp(".{" + hide + "}@", "g")

    string = string.replace(r, "***@");
    return string;

} console.log(hideEmail("somerandomemailadrerss@gmail.com"))



function hideEmail(string) {
    if (!string && string.length < 1) {
        return ' ';
    }
    return string.replace(/(\w{10})[\w.-]+@([\w.]+\w)/, "$1***@$2");
} console.log(hideEmail("somerandomemailadrerss@gmail.com"));

//9.Write a program that accepts a string as input and swaps the case of each character. For
//example, if you input &#39;The Quick Brown Fox&#39;, the output should be &#39;tHE qUICK bROWN fOX&#39;.

function replaceLetters(string) {
    if (!string && string.length < 1) {
        return ' ';
    }
    var array = string.split(" ");


    for (var i = 0; i < array.length; i++) {

        array[i] = array[i].charAt(0).toLowerCase() + array[i].slice(1).toUpperCase();

    }

    var str2 = array.join(" ");
    return str2;

} console.log(replaceLetters("The Quick Brown Fox"));



