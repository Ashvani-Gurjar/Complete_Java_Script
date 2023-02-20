
let a = {
     name: "Ashvani",
     language: "JavaScript"
}

console.log(a)

let p = {
    subject: "All",
    method: "Information"
}

p.__proto__ ={
     science: "Subject",
     k: "dlfjd"
}

a.__proto__ = p;


console.log(a.subject)

console.log(a.science)