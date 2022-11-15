//1. Write a function named tellFortune that:
// takes 4 arguments: number of children, partner&#39;s name, geographic location, job title.
// outputs your fortune to the screen like so: &quot;You will be a X in Y, and married to Z with N kids.&quot;
//Call that function 3 times with 3 different values for the arguments.

function tellFortune(numberofChildren, partnersName, geographicLocation, jobTitle) {
    var fortune = " You will be " + jobTitle + " in " + geographicLocation + " , and married to  " + partnersName + " with " + numberofChildren + " kids";

    return (fortune);
}

console.log(tellFortune("2", "Svetislav", "Paracin", "daktilograf"));
console.log(tellFortune("1", " Petar", "Beograd", "profesor nemackog"));
console.log(tellFortune("3", "Marko", "Uzice", "advokat"));

//2. Write a function named calculateDogAge that:
// takes 1 argument: your puppy&#39;s age.
// calculates your dog&#39;s age based on the conversion rate of 1 human year to 7 dog years.
// outputs the result to the screen like so: &quot;Your doggie is NN years old in dog years!&quot;
//Call the function three times with different sets of values.

function calculateDogAge(dogAge) {
    var ageofDog = dogAge * 7;
    var result = "Your doggie is " + ageofDog + " in dog years!";

    return result;
} console.log(calculateDogAge(3));
console.log(calculateDogAge(4));
console.log(calculateDogAge(1));

//3. Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: &quot;You will need NN to last you until the ripe old age of
//X&quot;
//Call that function three times, passing in different values each time.

function calculateSupply(age, amountPerDay) {
    const maxAge = 100;
    var sumAmount = 0;
    for (var i = age; i < maxAge; i++) {
        sumAmount += Math.round(365 * amountPerDay);
    } return ("you will need " + sumAmount + " to last you until the ripe old age of  " + maxAge);
} console.log(calculateSupply(99, 300));
console.log(calculateSupply(76, 10));
console.log(calculateSupply(60, 34.6));

//4. Create a function called celsiusToFahrenheit:
// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output &quot;NN°C is NN°F&quot;.
//Create a function called fahrenheitToCelsius:
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output &quot;NN°F is NN°C.&quot;
//*NN is actual temperature you need to convert
function cToF(num) {
    var farenhajt = ((num * 1.8) + 32).toFixed(2);
    return ("temperatura od " + num + "C je " + farenhajt + "F");
} console.log(cToF(-11));

function FToC(num) {
    var celsijus = ((num - 32) * .5556);
    return ("temperatura od " + num + "F je " + celsijus + "C");
} console.log(FToC(157));


//5. Create a function that validates a password to conform to the following rules:
// Length between 6 and 24 characters,
// At least one uppercase letter (A-Z).
// At least one lowercase letter (a-z).
// At least one digit (0-9).
// Maximum of 2 repeated characters (“aa” is OK, “aaa” is NOT).
// Supported special characters: ! @ # $ % ^ &amp; * ( ) + = _ - { } [ ] : ; &quot; &#39; ? &lt; &gt; , .
// Examples: validatePassword(&quot;P1zz@&quot;) ➞ false // Too short.
// validatePassword(&quot;iLoveYou&quot;) ➞ false // Missing a number.
// validatePassword(&quot;Fhg93@&quot;) ➞ true // OK!



//6. Create a function that finds how many prime numbers there are, up to the given integer.
//Examples: primeNumbers(10) ➞ 4 // 2, 3, 5 and 7
//primeNumbers(20) ➞ 8 // 2, 3, 5, 7, 11, 13, 17 and 19
//primeNumbers(30) ➞ 10 // 2, 3, 5, 7, 11, 13, 17, 19, 23 and 29

function isPrime(num) {
    for (var i = 2; num > i; i++) {
        if (num % i === 0) {
            return false;
        }
    } return num > 1;
}

function howManyPrimes(num) {
    var sumPrimes = 0;
    var arrayPrime =[];
    for (i = 1; i < num; i++) {
        if (isPrime(i) === true) {
            sumPrimes += 1;
            arrayPrime.push(i);
        }
    } return "broj prostih je " + sumPrimes + " a to su " +    arrayPrime;
} console.log(howManyPrimes(10));
console.log(howManyPrimes(20));
console.log(howManyPrimes(30));

//7.7. Create a function that returns an array that expands by 1 from 1 to the value of the input, and then
//reduces back to 1. Items in the arrays will be the same as the length of the arrays.

function writeArray(num){
    var array=[];
    
    for (var i=1;i<=num; i++){
        array.push(num);
    }return array;
} 

function diamondArray(num){
    var diamond =[];
    for (var i =1; i<=num; i++){
        diamond.push(writeArray(i));   
    } 
    for ( var x = num-1; x>=1; x--){
        diamond.push(writeArray(x));
    }
    return diamond; 
}console.log(diamondArray(2));
console.log(diamondArray(5));