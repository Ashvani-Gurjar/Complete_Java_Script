
const p = () => {
     
     try {
          let a = 0;
          console.log(program)
          console.log("Running successfully ...")
          return;
     } 
     catch (error) {
          console.log("I am error")
          console.log(p)

     }
     finally {
          console.log("Finally also running")
     }
}
p();