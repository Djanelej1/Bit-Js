function displayMessage() {
    console.log("HELLO WORLD!!")
} displayMessage();

//BOM (Window object)

//window.navigator

function navigatorData() {
    var platformName = navigator.platform;
    var browVersion = navigator.appVersion;
    var companyBrow = navigator.userAgent;

    console.log(platformName + "\n" + browVersion + "\n" + companyBrow + "\n")
} navigatorData();

function isOnline() {
    if (navigator.onLine) {
        console.log("online");
    } else { console.log("offline"); }
} isOnline();

//window.screen
function winHeightWidth() {
    var curentBrowserWidth = screen.width;
    var curentBrowserHeigth = screen.height;
    var maxPossible = screen.availHeight;
    console.log(curentBrowserWidth + "\n" + curentBrowserHeigth + "\n" + maxPossible);
} winHeightWidth();

//window.location

function forLocation() {
    var fullUrl = location.href;
    var domainName = location.host;
    var usedProtocol = location.protocol
    var parametersUrl = location.href.split("/");
    console.log(fullUrl + '\n' + domainName + '\n' + usedProtocol + '\n' + parametersUrl + '\n');
} forLocation();

//Create a function for reloading the page.
function refreshPage() {
    location.reload();
}

//Create a function that redirects you to a website address passed to it.

function goToPage() {
    var newWindow = window.open("https://www.google.com");
    win.close();
}

//window.localStorage
//Create a function that stores passed data in the browser local storage.

function storeData(name, value) {

    return localStorage.setItem(name, value);
}
storeData("name", "Filip");


//Create a function that reads the stored data, and print it out in console.
//If there is no data, print "There is no data" in the console.

function readData() {
    if (!localStorage.getItem("name")) {
        return console.log("there is no data in storage")
    } return console.log(localStorage.getItem("name"));
} readData();

function removeData() {
    localStorage.clear();
} removeData();

function readData() {
    if (!localStorage.getItem("name")) {
        return console.log("there is no data in storage")
    } return console.log(localStorage.getItem("name"));
} readData();

storeData("name", "Jasna");
readData();
storeData("name", "JSprogramm");
readData();

//Modify functions to work with sessionStorage instead of localStorage.

//function storeData1(name, value){

//  return sessionStorage.setItem(name, value) ;
//} 
//storeData1("name", "Filip");
function readData1() {
    if (!sessionStorage.getItem("name")) {
        return console.log("there is no data in storage")
    } return console.log(sessionStorage.getItem("name"));
} readData1();

//window.history

function goBack() {
    history.back();
};

function goForward() {
    history.forward();
}

//Window Methods
//Create a function that shows the user a greeting message using alert
//Then a question is presented to the user using prompt
//When the user provides the answer, that answer is used in the confirm dialog
//The format of the message in the dialog should be: "We will submit this answer now! " + the answer
//If the user clicks OK, show alert with success message
//If the user clicks Cancel, don't show anything

function onAlert() {

    var message = alert("Hello everyone");
} onAlert();

function promto() {
    var ime = prompt("Mozete li napisati svoje ime?");
    var potvrdjeno = "Da li je " + ime + " Vase ime?";

    if (confirm(potvrdjeno) == true) {
        alert("suscess")
    }
} promto();

//Global JavaScript Objects (homework)
//Create a function that builds an array of 10 random numbers between 1 and 50.
//The function prints that array out in the console and then returns it.

function random() {
    var array = []

    for (var i = 0; i < 10; i++) {
        array.push(Math.random() * 50);
    } return array;

};


console.log(random());


function roundonTwo(array){
   
    var newArray = [];
    for (var i=0; i<array.length; i++){
     newArray.push(array[i].toFixed(2));
    }
    return newArray;
} console.log(roundonTwo(random()))

 function floorToNearest(array){
    var newArray = [];
    for (var i=0; i<array.length; i++){
     newArray.push(Math.floor(array[i]));
    }
    return newArray;
 } console.log(floorToNearest(random()));

 function maxElement(array){
    var maxElement = Math.max(...array)
    return  maxElement;
 } console.log(maxElement(random()));

 //Date Print out the whole date object in the console.
//Print out the current time in the console.
//Print out the current date in the console.

console.log(Date());
var today = new Date();
console.log(today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds());
console.log(today.toLocaleDateString());

