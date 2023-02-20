// function hello() {
//      setTimeout(function(){
//           console.log("Hello World");
//      },2000);
     
// }
// hello();

// function sum(a,b,c,d){
//      return a+b+c+d;
// }
// let avg = (a,b,c,d)=>{
//       return  sum(...arr);
// }

// let arr = [2,3,4,5]
// console.log(avg(...arr));


function b(){
        let a = prompt("When you want to watch it");
        a = Number.parseInt(a);
        return a;
}
let a = async ()=>{
      return new Promise((resolve,reject)=>{
             setTimeout(()=>{
                  resolve("Hello World");
             },b()*1000);
      })
}
(async()=>{
     let c = await a();
     console.log(c);
})();


// let interest =(p,r,t)=>{
//         return (p*r*t)/100;
// }
// function call(){
//      let p = prompt("Enter the amount of money you want to invest");
//      let r = prompt("Enter the rate of interest");
//      let t = prompt("Enter the time period");
//      let a = interest(p,r,t);
//      alert(`Congratulation You got ${a} rupees as a interest of your amount`);
// }
// call();