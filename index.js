
// //   1.  Ways to print in javaScript
// alert("Agaye jaban ho kar");
// // document.write("this is a  boy")


// // 2. javascript console API
// // console.log("hello world");
// // console.warn("This is a warning ")
// // console.error("This is a error");

// // 3 . javascript Variables
// // What are variable--Containers to store data values
// var number1=36;
// var number2=56;
// // console.log(number1+number2);

// //   4. Data types in JavaScript
// var str1= "This is a string ";
// var str2 ='This is also string ';
// var num1=34;

// // Objects
//  var marks={
//       ravi:45,
//       shumbam:46,
//       ashvnai:98,
//  }
// // console.log(num1);
// // console.log(marks);

// // 5. Boolens
//  var a=true;
//  var b=false;
// // console.log(a,b);

// // var und= undefined;
//    var und;  /* both are same */
// // console.log(und);

//  var n= null;
// //  console.log(n);

// //  At a very high level , there are two types of data types in javaScript
// //  1. Primitive data types: Undefined, null, number, stiring, boolean , symbol
// //  2. Reference data types: Arrays and objects

// var  arr=[1,2,"ankush",4,5];
// // console.log(arr);
// // console.log(arr[2]);

// // Object in javascript
// var a =34;
// var b= 56;
// console.log("the value of a+b is ",a+b);
// console.log("the value of a-b is ",a-b);
// console.log("the value of a/b is ",a/b);


// Function in javascript
// function avg(a, b) {
//      c = (a + b) / 2
//      return c;
// }
// c1 = avg(4, 5);
// c2 = avg(5, 7);
// console.log(c1,c2);

// conditionals in javascript

// var age=34;
// if(age>5){
//      console.log('you are not a kid')
// }
// else{
//      console.log('you are a kid')
// }

// var arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr);
// for( i=0;i<arr.length;i++){
//      console.log(arr[i])
// };

// arr.forEach(function (element) {
//      console.log(element)
// })

// let j = 0;
// const ac = 0;
// ac++;
// let j = 0;
// while (j < arr.length) {
//      console.log(arr[j]);
//      j++;
// }


// Array method
// let myarr=["fan", "camera",34,null,true];
// console.log(myarr.length);
// myarr.pop();
// myarr.push("ashvnai");
// myarr.shift("fun");
// myarr.unshift("fun");

// console.log(myarr);

// String Methods in JavaScript
// let mystr="Ashvani is a good boy"
// console.log(mystr.length);
// console.log(mystr.indexOf("good"));
// console.log(mystr.lastIndexOf("good"));
// console.log(mystr.slice(0,4));
// console.log(mystr.replace("good","bad"));

// let mydate= new Date();
// console.log(mydate.getTime());
// console.log(mydate.getFullYear());
// console.log(mydate.getDay());
// console.log(mydate.getMinutes());
// console.log(mydate.getHours());
// console.log(mydate);]




// // DOM Manipulation
// //  let elem= document.getElementById("click");
// //  console.log(elem);

// //  let elemclass= document.getElementsByClassName("container");
// //  console.log(elemclass);
// //  elemclass[0].style.background ="yellow";

// // elemclass[0].classList.add("bg-primary")
// // elemclass[0].classList.add("text-success")
// // elemclass[0].classList.remove("text-success")
// // console.log(elem.innerHTML);
// // console.log(elem.innerText);
// // console.log(elemclass[0].innerText);
// // console.log(elemclass[0].innerText);

// tn = document.getElementsByTagName('div')
// console.log(tn);

// createdElement= document.createElement('p');
// createdElement.innerText='This is a created para';
// tn[0].appendChild(createdElement);

// createdElement2=document.createElement('b');
// createdElement2.innerText='This is a created bold'
// tn[0].replaceChild(createdElement2,createdElement);

// removeChild(Element)-->removes an element


// selecting using Query
// sel = document.querySelector('.container');
// console.log(sel);
// sel = document.querySelectorAll('.container');
// console.log(sel);

// // Events in JavaScript

// function clicked(){
// console.log("the button is clicked")
// }
// // window.onload= function(){
// //      console.log('the document was load')
// // }
// let prevHTML=document.querySelectorAll('.container')[1].innerHTML;

// firstcontainer.addEventListener('mouseup',function(){
//      document.querySelectorAll('.container')[1].innerHTML=prevHTML;
//             console.log('mouse up when clicked on Container')
// })
// firstcontainer.addEventListener('mousedown',function(){
//      document.querySelectorAll('.container')[1].innerHTML='<b> We have clicked </b>'
//             console.log('mouse up when clicked on Container')
// })

// let mydate=new Date()
//      console.log(mydate);

//      function sum(a,b){
//           return a+b;
//      }
// sum=(a,b)=>{
//       return a+b;
// }
// mul=(a,b)=>{
//      return a*b;
// }


// function clicked () {
//    console.log("click hua");    
// }


// firstcontainer.addEventListener('mouseup',function(){
// //  document.querySelectorAll('.container')[1].innerHTML="hi"
//  console.log('mouse up when clicked on Container')})

//   window.onload=(function() {
//      console.log("hah");
// })

// firstcontainer.addEventListener("click",function ()   {
//      console.log("click hua");
// })
// firstcontainer.addEventListener("mouseover",function () {
//      console.log("mouse up hua");
     
// })
// firstcontainer.addEventListener("mouseout",function () {
//      console.log("mouse down hua");
     
// })
// firstcontainer.addEventListener("mouseup",function () {
//      document.querySelectorAll(".container")[1].innerHTML="Hi ashvani singh gurjar"

// })
 
// let preve=document.querySelectorAll(".container")[1].innerHTML;
// firstcontainer.addEventListener("mouseover",function(){
//      document.querySelectorAll(".container")[1].innerHTML="<b> Hii ashvani singh gurjar </b>"
     
// })
 
// firstcontainer.addEventListener("mouseout",function(){
 
//      document.querySelectorAll(".container")[1].innerHTML= preve;

// })
// logkaro=()=>{
//      console.log('I am setTime out function')
// }

// setTimeout(logkaro,2000)




//      prev=document.querySelectorAll(".container")[1].innerHTML;

// firstcontainer.addEventListener("mouseover",function(){
//      document.querySelectorAll(".container")[1].innerHTML="<b> this is a mouseover function"
// })
 
// firstcontainer.addEventListener("mouseout",function(){
//      document.querySelectorAll(".container")[1].innerHTML= prev;
// })
// logkaro=()=>{
//      document.querySelectorAll(".container")[1].innerHTML="HI frined ashvani singh "
//      console.log("I am  your log");
// }
// setInterval(logkaro,2000);

// javaScript localStorage
// localStorage.setItem('ashvani','good boy');
// localStorage
// Storage{name:'harry',length:1}
// localStorage.getItem("ashvani");
// good boy

// JSON
// obj={ name:"harry",length: 1, a:{this:'tha"t'}};
// jso =JSON.stringify(obj);
// console.log(typeof jso);
// console.log(jso);
// parsed=JSON.parse('{"name":"harry","length":1,"a":{"this":"tha\\"t"}}')
// console.log(parsed);

