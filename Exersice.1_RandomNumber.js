const prompt = require("prompt-sync")();
var JSAlert = require("js-alert");

let x = Math.floor((Math.random() * 100) + 1);
let a = 0 ;
do{
     a = prompt("Please Enter a number : ")
     if(a>x)
          console.log("You Entered Greater number , Please enter smaller number")
     else if(a<x)
          console.log("You Entered smaller number , Please enter greater number")
     else
          console.log(" Congratulation You entered Correct Number ") 
     }while(x!=a);

