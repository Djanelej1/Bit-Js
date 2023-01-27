//Inserting elements
//Start with a blank HTML page
//Using just JS (jQuery), create an image gallery
//All links to images in the gallery should be elements of the same array!
//When the gallery is created and visible on the page, create gallery title and
//insert it before the gallery images
//Go through gallery images and set a random size to each gallery image
$(document).ready(function() {
    console.log( "HI!" );
});
var img1= $("<img></img>").attr("src", "/SuperMarioAssets/mario.png");
var img2 =$("<img></img>").attr("src", "/SuperMarioAssets/mario.png");
var img3 =$("<img></img>").attr("src", "/SuperMarioAssets/mario.png");
var img4=$("<img></img>").attr("src", "/SuperMarioAssets/mario.png");
var img5 =$("<img></img>").attr("src", "/SuperMarioAssets/mario.png");
var img6=$("<img></img>").attr("src", "/SuperMarioAssets/mario.png");

 $(document.body).append("<div></div>");
 $('div').attr("id", "container-galery");
 $('#container-galery').append(img1, img2, img3, img4, img5, img6);

 $(img1).before("<h1>Gallery Name</h1>");
 $("h1").css("text-align","center");
 
 $('img').each (function(index, element){
    
    var random = Math.floor((Math.random() * 500) + 50).toString()
    $(element).css("width",random+"px");
    $(element).css("height",random+"px" );
   
  }
  )
//Set a green border around each image whose width is less than 200px up
//until the first one that doesn&#39;t meet that requirement (i.e. when you get to
  //  the first img that is more than 200px wide, stop checking and setting green
  //  border).
  

$('img').each(function (index, element){
    if ($(element).width()<200){
        $(element).css("border", "solid green");
        return false; 
    } 
})
 
 
