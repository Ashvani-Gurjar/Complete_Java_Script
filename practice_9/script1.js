const loadScript = async (src)=>{
     return new Promise((resolve,reject)=>{
          let script = document.createElement("script");
          script.src = src
          script.onload = ()=>{
               resolve(src +  " Done succesfully")
          }
          document.head.append(script);
     })
}

let a = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js")
a.then((value)=>{
     console.log(value)
})