// try {
//       throw new ReferenceError("This is new error")
// } catch (error) {
//      console.log(error.name)
//      console.log(error.message)
//      console.log(error.stack)
// }
try {
     let age = prompt("Enter your age");
     age = Number.parseInt(age)
     if(age>150){
          throw new ReferenceError("This is probably not possible")
     }
      
} catch (error) {
     console.log(error.name)
     console.log(error.message)
     console.log(error.stack)
}
console.log("Code is still running ...")