let a = [
     "Initializing hacking tool.....",
     "Connection to facebook..... ",
     "Connection to server 1.....",
     "Connection failed. Retring....",
     "Connection to server 2...",
     "Connected Successfully",
     "Username Ashvani",
     "Trying Bruce Force......",
     "200k passwords tried.....",
     "Match not found",
     "Another 200k passwords trid.....",
     "Match found",
     "Accessing Account.....",
     "Hack Successfull"
]

let sleep = async(second)=>{
    return new Promise((resolve,reject)=>{
     setTimeout(()=>{resolve(true)}, 1000*second)     
     })
  }

const start = async(message)=>{
     await sleep(2);
     // console.log(message)
     text.innerHTML+= message + "<br>";
}
(async()=>{
       for(let i=0;i<a.length;i++){
        await start(a[i])
       }
})()