 
// syncronous  programming

// let a = prompt("What is your name")
// let b = prompt("What is your age")
// let c = prompt("What is your favirate color")

// console.log(a + " your age is " +  b  + " and your favorate colore is "  + c)

// Asyncronous programming

// console.log("start")
// setTimeout(function(){
//      console.log("done")
// },2000)
// console.log("end")

// Callbacks

function loadscript(src,Callbacks){
     var script = document.createElement("script");
     script.src = src
     script.onload = function(){
          console.log(" script loaded " + src)
           Callbacks(null,src);
         
     }
     script.onerror = function(){
          console.log(" Script error " + src)
          Callbacks(new Error("got some error"));
     }
     document.body.appendChild(script)
}

function Hello() {
     alert("Hello world")
}

function sir(error,src){
     if(error){
          console.log(error)
          return 
     }
     alert("sir good morning" + src)
}

loadscript("https://cdn.jsabcdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js",sir)