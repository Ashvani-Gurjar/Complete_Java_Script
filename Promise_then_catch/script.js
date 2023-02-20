
// let promise = new Promise(function(resolve,reject){
//      alert("hiii")
//      resolve(58)
// })

// console.log("good boy")
// setTimeout(() => {
//       console.log("good second")
// }, 2000);
// console.log("good third ")
// console.log(promise)

// II part

let p1 = new Promise((resolve, reject) => {
      console.log("promises is pending")
      setTimeout(() => {
            console.log("I am an promise and fullfilled")
            resolve(true)
      }, 3000)
})

let p2 = new Promise((resolve, reject) => {
      console.log("promises is pending")
      setTimeout(() => {
            console.log("I am an promise and rejected")
               reject(new Error("I am an Error"))
      }, 3000)
})

p1.then((value)=>{
      console.log(value)
})

// p2.catch(()=>{
//       console.log("I am Error")
// })

p2.then((value)=>{
      console.log(value)
},(error)=>{
      console.log(error)
})