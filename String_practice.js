const prompt = require("prompt-sync")();

// Question 1 
//  let a = "Ashvani\""
//  console.log(a.length)

//  Question 2 
// let b = "This Is My Best Friend"
// console.log(b.toLowerCase())
// console.log(b.toUpperCase())

// Question 3
let t = "This is my best friend and have to take them also"
let a = "friend"
console.log(`That word ${a} ${t.includes(a) ? 'is' : 'is not'} in that sentence.  `)
console.log(t.includes(a))

// Question 4 
let c = "Please give me 1000 Rupess"
console.log(c.slice(15,19))


// Question 5 
let d = "Ashvani"
d[3] = "T"
console.log(d[3]) //we can not change a stirng because these are inmutable
