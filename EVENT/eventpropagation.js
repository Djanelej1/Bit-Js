//Events propagation, stopping and preventing default
//Create page containing gallery

//Gallery contains six pictures
//At least one of the pictures should have width of 300px
//Add event listeners to all images on page
//User can click on image and in that moment image will get 1px red border
//If Image width is not 300px event propagation should be stopped!
//Register event listener on document object, which listen for clicks
//When click occurs it should print in console on which element user clicked
function myFunction(slika){
    slika.style.border = " 1px solid red"
}

var img1 = document.getElementsByTagName("img");
 for (var i = 0; i <img1.length; i++){
    img1[i].addEventListener("click", function() {
        myFunction(this);
    });
    if (img1[i].style.width ===300){
        "click".stopPropagation();
    }
 }

 


 

 