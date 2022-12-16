//1. Write a function that checks if a given string contains digit 5.
function ifContains(str, num){
    if (!str || !num ){
        return Storage;
    }

    for (var i=0; i<str.length;i++){
        if (!isNaN(str[i]) && Number(str[i]) == num){
            return true;
        } 
    } return false;
}
var check = ifContains("1bser9re", 5);

console.log(check);

//2.Write a function that in a given string replaces all the appearances of the string ‘JS’ with
//‘**’.
//nikolino resenje
function replace(sentence, element, replacement) {
    if (!sentence || sentence.length == 0 || !element || element.length == 0 || !replacement || replacement.length != 1) {
        return sentence;
    }

    var replacementString = '';
    for (var i = 0; i < element.length; i++) {
        replacementString += replacement;
    }

    var result = '';
    for (var i = 0; i < sentence.length; i ++) {
        var z = i;
        var word = '';
        for (var j = 0; j < element.length; j++) {
            if (sentence[z]) {
                word += sentence[z];
                z++;
            }
        }

        if (word.toLowerCase() == element.toLowerCase()) {
            result += replacementString;
            i+=(element.length-1)
        } else {
            result += sentence[i];
        }
    }

    return result;
}

console.log(replace('Programming in JS is super interesting!', 'super', '*'))
// ne radi
function replace(str,partStr,replaceChars){
    if (!str || !partStr){
        return false;
    }

   if(str.match(/[partStr]/gi)){}
}
var replacedString = replace("Programming in JS is super interesting!", "JS", "**");
console.log(replacedString)

//3. Write a function that inserts a given character on a given position in the string.
function insert(str, char, position){
    if (!str || !char || !position){
        return false;
    }
   
    var newStr  = [str.slice(0, position), char, str.slice(position)].join('');
  return newStr;
}

var inserted = insert("Goo morning","d", 3);
console.log(inserted);

//4.4. Write a function that deletes a character from the given position in the string.
//Input: “Goodd morning!”, 3
//Output: “Good morning!”
function deleted(str, char, position){
    if (!str || !char || !position){
        return false;
    }
   
    for (var i =0; i<str.length;i++){
        if (i==position && str[i]==char){
         var newStr = str.replace (str[i],"")
        }
    }
  return newStr;
}

var delChar = deleted("Goodd morning!","d", 3);
console.log(delChar);
//5.5. Write a function that deletes every second element of the given array.
//Input: [3, 5, 1, 8, 90, -4, 23, 1, 67]
//Output: [3, 1, 90, 23, 67]

function deleteArrNum(array,numOfElem){
    if (!array || !numOfElem || array<1){
        return false;
    }
    var newArray =[];
    for (var i =0; i<array.length;i+=numOfElem){
        newArray.push(array[i]);
    } return newArray;
}
console.log(deleteArrNum([3, 5, 1, 8, 90, -4, 23, 1, 67], 2));

//6.6. Write a function that replaces the elements of the given array between two positions with
//their doubled values.

function double(num){
    return num*2;
}

function replaceDouble(array, pos1, pos2){
    if (!array || array.length<=1 || !pos1 || !pos2){
        return array;
    }

   var newArra=[];
   var element= 0;
   for (var i=0; i<array.length;i++){
    if (i>=pos1 && i<=pos2){
        element = double(array[i]);
    } else { element = array[i];}
    newArra.push(element);
}return newArra;
}
console.log(replaceDouble([3, 5, 1, 8, 90, -4, 23, 1, 67], 2, 6));

//7. Write a function that checks if every element of the first array is contained in the second
//array. Be careful with repetitions!

function compareArrays(array1,array2){
    for (i = 0; i < array2.length; i++) {
        for (j = 0; j < array1.length; j++)
            if (array2[i] == array1[j])
                break;

        if (j == array1.length)
            return false;
    }

    return true;
}

console.log(compareArrays([8, 9, 3, 1, 11, 4, 3],[3, 4, 1, 3]));

//8. Write a function that sorts an array of strings by the number of appearances of the letter
//‘a’ or ‘A’.


//Write a function that prints out the date of the next day.
//Output: 25. 10. 2018.

function addDate(date){

    var arr = date.split(".");
    var dan= Number(arr[0]);
    var mesec =Number(arr[1]);
    var godine = Number(arr[2]);
    var nDatum ="";
    if (dan>=1 && dan<30 && dan!=28){
        dan+=1;
    } else if (dan==28 && mesec==02){
        dan = 1;
        mesec+=1
    } else if (dan == 30 && (mesec==04 ||mesec==06 || mesec==09 || mesec==11)){
      dan=1;
      mesec+=1;
    }else if (dan == 31 && (mesec==01 ||mesec==03 || mesec==05 || mesec==07 || mesec==08 || mesec==10)){
        dan=1;
        mesec+=1;
    } else if (dan==31 && mesec==12){
        dan=1;
        mesec=1;
        godine+=1;
    } else {dan=1;mesec+1
    } return (nDatum.toString()).concat(dan,".",mesec,".",godine)

} var i = addDate("28.02.2018")
console.log(i);

//Write a function that prints out the date of the previous day.
//Output: 23. 10. 2018.
function addDate(date){

    var arr = date.split(".");
    var dan= Number(arr[0]);
    var mesec =Number(arr[1]);
    var godine = Number(arr[2]);
    var nDatum ="";
    if (dan>1 && dan<31){
        dan-=1;
    } else if (dan==1 && mesec==03){
        dan = 28;
        mesec-=1
    } else if (dan == 01 && (mesec==02 ||mesec==04 || mesec==06 || mesec==08 || mesec==09||mesec==11)){
      dan=31;
      mesec-=1;
    }else if (dan == 01 && (mesec==05 ||mesec==07 || mesec==10 || mesec==12)){
        dan=1;
        mesec+=1;
    } else if (dan==01 && mesec==01){
        dan=31;
        mesec=12;
        godine-=1;
    } else {dan=1;mesec+1
    } return (nDatum.toString()).concat(dan,".",mesec,".",godine)

} var i = addDate("01.01.2019")
console.log(i);

//11. Write a function that prints out an array of the numbers aligned from the right side.

function alignRight(array){
    if (!array || array.lenght<1){
        return array;
    }

    var newArr =[];
    for (var i=0; i<array.length;i++){
        newArr.push(array[i].toString());
        var newStr=" ";
        var newArr1=[];
            for (var y=0;y<newArr.length;y++){
                var newStr1= newStr.repeat(15-newArr[y].length) + newArr[y];
                newArr1.push(newStr1);   
            
            }

        }
        for (var i=0;i<=newArr1.length;i++){
            return newArr1.join('\r\n');
        }
    
    } 
       
 console.log(alignRight([78, 111, 4, 4321]));

