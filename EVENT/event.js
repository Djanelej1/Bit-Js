

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


var player = document.getElementById("playerIcon");
var body1= document.querySelector("body");
var button = document.getElementById("button3");
function Moving(event) {
	var xPosition = event.clientX - body1.getBoundingClientRect().left - (player.clientWidth / 2);
	var yPosition = event.clientY - body1.getBoundingClientRect().top - (player.clientHeight / 2);
	
	player.style.left = xPosition + "px";
	player.style.top = yPosition + "px";
 }
 body1.addEventListener("click", Moving);
 
 function stopMoving() {
  button.removeEventListener("click", Moving);
}
 
 button.removeEventListener("click", Moving);
  




