$(document).ready(function() {
    console.log( "HI!" );
});



//Selecting
//Create a page that contains navigation (ul element)
//Navigation should contain odd number of elements
//Select the first element of the list and give it a bottom border
//Select all list elements and transform their text to uppercase
//Select active element of the list and change its font color


var firstElement = $("ul li:first");
firstElement.css('border-bottom',"solid red");

var allElements = $('ul li').css('text-transform', 'uppercase');

var activeElement = $('ul li:last').attr('id', 'active');
activeElement.css('color', 'blue');

//Find the middle one and change its background color
$('li').each (function(index, element){
  if (index == Math.floor($('li').length/2)){
  $(element).css('background-color', 'yellow')
};
})

