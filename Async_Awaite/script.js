// async function ashvani(){
//      return 4;
// }
// ashvani().then((x)=>{
//      alert(x)
// })

async function ash(){

     let DelhiWeather = new  Promise((resolve,reject)=>{
          setTimeout(()=>{
               resolve("21 deg")
          },2000)

     })

     let EtawahWeather = new Promise((resolve,reject)=>{
          setTimeout(()=>{
               resolve("27 deg")
           },5000)

          })
          //  DelhiWeather.then(alert)
          //  EtawahWeather.then(alert)

        console.log("DW Pending....")
        let DW = await DelhiWeather;
        console.log("DW Done....")
        console.log("EW Pending....")
        let EW = await EtawahWeather;
        console.log("EW Done....")

          return [DW,EW]
}
const gurjar = async ()=>{
     console.log("gurjar is waiting ")
 }

 const main1 = async ()=>{
     console.log("Weather live tallycast ...")
     let a =  await ash ();
      let b =  await gurjar();
}
main1();