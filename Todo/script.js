
submit.addEventListener("click",(e)=>{
          e.preventDefault();
          let value = title.value;
          localStorage.setItem("note",value);
          title.value="";
           todo.innerHTML += `
          <h3>${localStorage.getItem("note")}</h3>
     `
})
delete1.addEventListener("click",(e)=>{
          e.preventDefault();
          title.value="";
})
deleteall.addEventListener("click",(e)=>{
          e.preventDefault();
          todo.innerHTML =" ";
})



