
$(document).ready(function() {
    console.log( "HI!" );
});
$('img').each(function (index, element){
    $(element).css("width", "33%");
    } 
)
$('div:first img:first').addClass("selected");

$('div:first img:first').each(function(index, element){
   if ($(element).attr("class") ==="selected"){
    $(element).css("border", "1px solid red");
   }
})
//Create a function that selects the image with red borders and removes
//them, then uses traversing technique to navigate to the second gallery and
//applies the red borders to the middle picture



function findAndRedo(){
    $(".selected").css("border", "none");
    ($("div:first").next().children()).each(function(index,element){
        if (index === Math.floor(($("div:first").next().children()).length/2)){
            $(element).css("border", "1px solid red ");
        }
    })
}//findAndRedo();


