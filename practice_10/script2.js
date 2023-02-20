
let value = prompt("Enter your value");
if(value){
     localStorage.setItem("note",value);
}

let a = localStorage.getItem("note")
    alert("Your note is " + a)


let c = confirm("Do you want to delete note");
if(c){
     localStorage.removeItem("note");
}