// gun = 1;
// snake = 2;
// water  = 3;

i=0;
let count=0;
while(i<5){
     let b= Math.floor(Math.random()*3+1)
     let a = Number.parseInt(b)
     let c = prompt("Please select one of thems(Water,Snake,Gun")
if(a==1 && c == "gun") alert("Game tie")
if(a==2 && c =="gun"){
      alert("You win that game, snake killed by gun")
       count++ }
if(a==3 && c =="gun") alert("You loose, gun can't kill water")
if(a==1 && c =="snake") alert("You loose, snake killed by gun")
if(a==2 && c =="snake") alert("Game tie")
if(a==3 && c =="snake"){
    alert("You win that game, snake pie all water") 
    count++;
} 
if(a==1 && c =="water"){
     alert("You win that game, gun distroy by that water") 
     count++;
} 
if(a==2 && c =="water") alert("You loose, snake pie all water")
if(a==3 && c =="water") alert("Game tie")
i++;
}
if(count>2) alert("You won that game Congratulation")
else alert(`You loose that game by ${5-count} points try next time`)
