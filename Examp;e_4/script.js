let clock = document.getElementsByClassName("clock")[0];

function time(){
    let a = new Date();
    let h = a.getHours();
    let m = a.getMinutes();
    let s = a.getSeconds();
    let d = a.getDate();
    clock.innerHTML =  h + ":" + m + ":" + s
}
setInterval(time,1000);