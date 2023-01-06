//Selecting One/Multiple Elements

//Create a function that selects the second list and applies a class that sets some
//background color to it.

function changeBGColor(){
    
     document.querySelectorAll("ul")[1].setAttribute("class", "second");
    var secondArray = document.getElementsByClassName("second"); 

    return secondArray[0].style.backgroundColor = "red";
      

} console.log(changeBGColor());

//Create a second function that, when triggered, selects all &lt;li&gt; elements on the
//page.
//The function also sets a class that sets some bg color to every &lt;li&gt; element.

//function selectElement(){
    
 //   var allLi = document.getElementsByTagName("li"); 
 //  for (var i = 0; i<allLi.length; i++){
  //  allLi[i].setAttribute("class", "AllLi");
   // allLi[i].style.backgroundColor = "orange";
   //}
    //return allLi
//}selectElement();

//Create one more unordered list and one more function
//The function​ should select only &lt;li&gt; elements from that last list
//Each &lt;li&gt; element should get a class that sets some bg color and transforms the
//text to uppercase.

// function selectThird(){
    
//     var lastUl = document.querySelectorAll("ul"); 
//      var last = lastUl[lastUl.length-1];
//      console.log(last);
//      last.style.backgroundColor = "yellow";
//      last.style.textTransform = "uppercase";
//     return ;
// }selectThird();

// Traversing
// Create two unordered lists.
// Each list should be wrapped in a div element.
// One &lt;li&gt; element in the second list should have a class “active”, which sets its
// background color.
// Create a function that selects the &lt;li&gt; element with class “active”.
// Remove the class from that element, and then select the first &lt;li&gt; element in the
// first unordered list using node relations.
// Apply class to that newly selected &lt;li&gt; element

function toChangeClass(){
    
    var findClass = document.getElementsByClassName("active");
    findClass[0].remove("active");
    console.log(findClass);

    var anotherClass = document.querySelector("div").firstElementChild;
    anotherClass.firstElementChild.classList.add("active");
    console.log(anotherClass);
   
}
    
    
toChangeClass();

// Access/Update Text Node
// Create an unordered list containing &lt;li&gt; items that represent navigation.
// Create a function that takes text from one of the &lt;li&gt; elements and presents it on
// screen using alert.

// Create one more function.
// The function should take some text as an argument.
// The function should select the last &lt;li&gt; element in the list and replace its text with
// text passed as the function argument.

function screenAlert(){
    var selectedText = document.getElementsByClassName("nav");
    console.log(selectedText);
   alert(selectedText[0].firstElementChild.textContent);
}screenAlert();


// Create one more function.
// The function should take some text as an argument.
// The function should select the last &lt;li&gt; element in the list and replace its text with
// text passed as the function argument.
function changeText(text){
    var textElement = document.getElementsByClassName("nav");
    textElement[0].lastElementChild.textContent = text;
} changeText ("neki novi link");

// InnerHTML
// Do the following exercise in two ways: using DOM manipulation methods and
// using innerHTML.
// Create a function that is used for building a dropdown/select element.
// It first builds a dropdown and then adds it to the DOM.
// The function takes two arguments: the first is an array of strings and the second
// is a DOM node to which the dropdown will be added.
// Create options that correspond to items in the passed array and add them to the
// select element.
// Add the whole dropdown list to DOM .
// Use this function to create two selects on the page.
// The first select should be appended to the first div on the page.
// The second select should be appended to the last div on the page.

//first way


 function makeDropdown(array, tag){
    var select = document.createElement("select");
    select.setAttribute("id","izbor");
 var option = document.createElement("option");
 tag.appendChild(select);
 
 
 for (var i = 0; i < array.length; i++) {
    var option = document.createElement("option");
    option.value = array[i];
    option.text = array[i];
    select.appendChild(option);
}
 
  
 }
 var lastDiv = document.createElement("div");
 document.body.appendChild(lastDiv);
 makeDropdown(["firstChoice", "secondChoice", "thirdChoice"], lastDiv);
 
 var firstDiv = document.createElement("div");
 document.body.insertBefore(firstDiv, document.body.firstChild.nextSibling);
 makeDropdown(["firstChoice", "secondChoice", "thirdChoice"], firstDiv);


//  Attributes
// Create a form that contains multiple input elements with labels.
// Some of those elements should be required.
// Create a function that validates the form.
// The function checks each input element that belongs to the form.
// If the element has the required attribute and no data, it should get red borders.
 
 function validator(tag){
  var listForm = document.getElementById(tag).children;
   
   for (var i = 0; i<listForm.length; i++){
    if (listForm[i].hasAttribute("required") && listForm[i].value ===""){
        listForm[i].style.borderColor ="red";
    }
   }
 } 
 
 validator("form1");
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 

