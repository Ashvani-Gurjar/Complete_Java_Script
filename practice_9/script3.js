let p1 = async()=>{
      return new Promise((resolve,reject)=>{
          setTimeout(()=>{
               resolve(10)
          },2000)
})
}
let p2 = async()=>{
      return new Promise((resolve,reject)=>{
          setTimeout(()=>{
               resolve(20)
          },1000)
})
}
let p3 = async()=>{
      return new Promise((resolve,reject)=>{
          setTimeout(()=>{
               resolve(30)
          },3000)
})
}

let a = async()=>{
     console.time("run")
     // let b = await p1();
     // let c = await p2();
     // let d = await p3();

     let b =  p1();
     let c =  p2();
     let d =  p3();
     // console.log(b,c,d)

     let m = await Promise.all([b,c,d]);
     console.log(m);
     console.timeEnd("run")

}

a();