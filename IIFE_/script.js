let a = async()=>{
   return new Promise((resolve,reject)=>{
      setTimeout(()=>{
          resolve(34);
      },3000) 
})
} 

(async()=>{
     let c = await a();
     console.log(c);
     let d = await a();
     console.log(d)
})()