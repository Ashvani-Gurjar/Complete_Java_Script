
// const p = ()=> {
// let a = document.body.getElementsByClassName("div")[0];
//  a.style.backgroundColor = "red";
// }

// let p1 = new Promise((resolve,reject)=>{
//       setTimeout(()=>{
//                resolve(p())
//        },3000)
// })

// p1.then((value)=>{
//       alert("Loaded succesfully")
// },(error)=>{
//      alert("This is error")
// })'



const loadScript = async (src)=>{
     return new Promise((resolve,reject)=>{
          let script = document.createElement("script");
          script.src = src
          script.onload = ()=>{
               resolve(src +  "Done succesfully")
          }
          document.head.append(script);
     })
}

const main1 = async ()=>{
let a = await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js")
console.log(a)
}
main1();