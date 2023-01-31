for (let i = 0 ; i < document.querySelectorAll(".drum").length; i++){
document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
//document.querySelector("button").addEventListener("click", function());we can do thid too because it is anonoumous function
function handleClick(){
//  var buttonInnerHtml = this.innerHTML;
switch (this.innerHTML) {
  case "w":
  var audio= new Audio("sounds/tom-1.mp3");
  audio.play();
    break;

        case "a":
        var audio= new Audio("sounds/tom-2.mp3");
        audio.play();
       break;

    case "s":
    var audio= new Audio("sounds/tom-3.mp3");
    audio.play();
    break;
    case "d":
    var audio= new Audio("sounds/tom-4.mp3");
    audio.play();
      break;

    case "j":
    var audio= new Audio("sounds/snare.mp3");
    audio.play();
    break;
    case "k":
    var audio= new Audio("sounds/crash.mp3");
    audio.play();
break;
case "l":
var audio= new Audio("sounds/kick-bass.mp3");
audio.play();
break;






  default: console.log(buttonInnerHtml);

}
  //(this.style.color = "white");
  //when to do when click detected
}
}
//var audio= new Audio("sounds/tom-1.mp3");
//audio.play();
