// const greed = ()=>{
//      console.log("hello sir");
// }
// greed();

// const greed = (name) =>{
//      console.log("hello " + name);
// }
// greed("Ashvani");

// const greed = name =>{
//      console.log("hello " + name);
// }
// greed("Ashvani");

// const greed = name => console.log("hello " + name);
// greed("Ashvani");

// const greed = (name,color) => console.log("hello " + name + " " + "favorate color " + color);
// greed("Ashvani","yellow");

// const x = {
//      name: "Ashvani",
//      color: "yellow",
//      subject: "Math",
//      show: function(){
//           let that = this;
//           console.log(this)
//           setTimeout(function(){
//                console.log(that)
//           },2000)
//       }
// }
// x.show();

// Using arrow function 
const x = {
     name: "Ashvani",
     color: "yellow",
     subject: "Math",
     show: function(){
          console.log(this)
          setTimeout(()=>{
               console.log(this)
          },2000)
      }
}
x.show();


