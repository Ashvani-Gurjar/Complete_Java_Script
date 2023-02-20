let url = "https://kontests.net/api/v1/all"
let p = fetch(url);
p.then((v) => {
     return v.json();
}).then((value1) => {
     ihtml = "";
     for (items in value1) {
          ihtml += `
          <div class="card" style="width: 22rem; my-2">
          <img src="https://media.istockphoto.com/id/1224500457/photo/programming-code-abstract-technology-background-of-software-developer-and-computer-script.jpg?s=612x612&w=0&k=20&c=nHMypkMTU1HUUW85Zt0Ff7MDbq17n0eVeXaoM9Knt4Q=" class="card-img-top" alt="...">
          <div class="card-body mx-8 my-8">
            <h5 class="card-title">${value1[items].name}</h5>
            <p class="card-text">Important</p>
            <p> start at : ${value1[items].start_time}</p> 
            <p> end at : ${value1[items].end_time}</p> 
            <a href="${value1[items].url}" class="btn btn-primary">Visit Context</a>
          </div>
          `
     }
     cardcontainer.innerHTML = ihtml + "<br>"
})


