
let key = prompt("Enter your key");
let value = prompt("Enter your value");
localStorage.setItem(key,value)
console.log(`the value at ${key} is ${localStorage.getItem(key)}`)

if(key=='red' || key =='blue'){
     localStorage.removeItem(key);
}
if(key=='0'){
     localStorage.clear()
}

console.log(localStorage.key(0))
console.log(localStorage.key(1))
console.log(localStorage.key(2))

console.log(localStorage.length)
