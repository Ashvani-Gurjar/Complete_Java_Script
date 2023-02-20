
let ding = new Audio("song.mp3");
function s(){
     let a = prompt("When you want to hear that song");
     return Number.parseInt(a);
}
function playSound () {
     setTimeout(()=>{
          ding.play();
     },s()*1000);
}
playSound();