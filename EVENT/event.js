

 function changeBColor(){
     document.body.style.backgroundColor ="red";
    
 }
  function changeBColor2(){
    document.body.style.backgroundColor ="white";
  }

  // ● Create chat room page containing
  // ○ Input field for writing message
  // ○ Button for sending message
  // ○ Area for showing sent messages
  // ● After the Send button is clicked, the message from the input field is moved to the
  // area with all other messages

  function putMessage(){
  var message = document.getElementById('inputText');
  var text = document.getElementById("textArea");
  
  text.append(message.value + '\n');

  message.value = '';

  }
// var btn = document.getElementById('button1');

// btn.addEventListener('click', function handleClick(event) {
//   event.preventDefault();

//   var message = document.getElementById('inputText');
//   var text = document.getElementById("textArea");
  
//   text.append(message.value + '\n');

//   message.value = '';
// });

//Soccer player
//○ Create page which has soccer field as bg image
//○ In top left corner there should be image of soccer player
//○ When user clicks anywhere on the field, the player is moved to that
//position
//○ Add the button which is used to disable player movement
//○ Images ( https://goo.gl/YDjwi4 )


var player = document.getElementById("playerIcon");
var body1= document.querySelector("body");

function Moving(event) {
	var xPosition = event.clientX - body1.getBoundingClientRect().left - (player.clientWidth / 2);
	var yPosition = event.clientY - body1.getBoundingClientRect().top - (player.clientHeight / 2);
	
	player.style.left = xPosition + "px";
	player.style.top = yPosition + "px";
 }
 body1.addEventListener("click", Moving);
//button.addEventListener("click", () => body1.removeEventListener("click", Moving));

function stopMoving(event){
  body1.removeEventListener("click", Moving);
}
var button = document.getElementById("button3");
 button.addEventListener("click", stopMoving);

//Super Mario
//○ Create Super Mario emulator
//○ On right arrow click, Mario should run to the right

//■ Running animation
//■ Ground should move while Mario is running
//○ Images ( https://rb.gy/23keik )



function Move(event){
  var mario1 = document.getElementById("mario");
mario1.src='/SuperMarioAssets/mario_running.gif ';
  
}
mario1.addEventListener("click", Move);

