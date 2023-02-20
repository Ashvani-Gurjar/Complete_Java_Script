let p = () =>{
        return new Promise((resolve,reject)=>{
          setTimeout(()=>{
               reject(new Error("This is not acceptable"))
          },3000)
     })
}

let c = async ()=>{
     try{
          let a = await p();
          console.log(a)
     }
     catch(error){
          console.log("This error has been handled")
     }
} 
c();






