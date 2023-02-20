// function init() {
//     let name = "Mozialla"
//     function DisplayName(){
//  
//           console.log(name); // Lexical inveronment;
//      }
//       name = "shivam"
//      return DisplayName;
// }
// let c = init();
// c();


function mat(){
let x =()=>{
     let a = 1;
     console.log(a);
     let y = ()=>{
          // let a = 2;
          console.log(a);
          let z =()=>{
               // let a = 3;
               console.log(a);
          }
          z();
     }
     a=88;
      y();
}
return x;
}

let c = mat();
c();
