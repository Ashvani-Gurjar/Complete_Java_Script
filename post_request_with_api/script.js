
const createTodo = async(todo)=>{
let options = {
     method: "POST",
     headers: {
          "Content-Type": "application/json"
     },
     body: JSON.stringify(todo),
}
   let p = await fetch('https://jsonplaceholder.typicode.com/posts/', options)
    let response = await p.json();
    return response;
}

const getTodo = async (id)=>{
 let p =  await fetch('https://jsonplaceholder.typicode.com/posts/' + id)
        let m = await p.json();
            return m;
}
const mainFun = async ()=>{
     let todo = {
          title: 'Gurjar',
          body: 'Bhai',
          userId: 1,
     }
     let math =  await createTodo(todo);
     console.log(math)
     console.log( await getTodo(5))
}

mainFun();