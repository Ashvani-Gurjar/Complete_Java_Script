// let a = [1,2,3,4,"Ashvani",null]
// console.log(a)
// console.log(a[4])
// console.log(a.length)
// console.log(typeof(a))
// a[2] = "Ajay"
// console.log(a)
  
//   function of the arrays

// let a = [2,4,5,34,3]

// Length
// console.log(a.length)

// Convert into string
// console.log(a.toString(),typeof(a))

// Join of the array
// console.log(a.join("-"))

//  Pop function( delete last element of the array/)
// let b = a.pop()
// console.log(a,b)

// push funciton(insert a number in array)
// a.push(8)
// console.log(a)

//  shif function ( its pop first number of the array)
//  let b = a.shift()
//  console.log(b,a)

//   unshift function (its insert number if first index in a array)
// a.unshift(23)
// console.log(a)

//  Delete function( its delete particluar index element and size of array will not change)
// let a = [2,4,5,34,3]
// delete(a[3]) // size can not change of array
// console.log(a)

// Concate two or more arrays in one arrays
// let a = [3,4,5,6]
// let b = [34,4,43,6]
// let c = [3,'gurjar',34,6]
// console.log(a.concat(b,c))

// Sort in array ( its sort alphabatically order)
// let compare = (a,b)=>{
//   return b-a
// }
// let a = [2,4,1,433,6,7]
// a.sort(compare)
// console.log(a)

//  Reverse function (it's reverse the array elements)
// a.reverse()
// console.log(a)

// splice function ( we can insert of delete Element in array)
// let a = [4,5,7,3,2,1,8,9,4]
// a.splice(3,4,101,102,103,104)
// console.log(a)
// console.log(typeof(a))

// slice funciton (give new array )
// let a = [5,3,2,6,78,9,3,55]
// console.log(a.slice(3))
// console.log(a.slice(4,6))
 
//  loops in arrays 

// simple for loop
// let a = [3,5,6,7,9]
// for(let i = 0; i<a.length;i++){
//      console.log(a[i])
// }

//  for _ of loop
// for( i of a){
//      console.log(i)
// }

//   for _ in loop
// for( i in a){
//      console.log(i)
// }

// Array _ form loop?
// let a = "Ashvani"
// let b = Array.from(a)
// console.log(b)

//    For _ each loop
//  let a = [2,3,4,5,6]
//  a.forEach((element)=>{
//      console.log(element*element)
//  })

//   MAP function ( its give new array)
// let a = [3,4,5,6,7,1]
//  let b = a.map((conist,index,a)=>{
//      console.log(conist,index,a)
//      return conist+1
// })
// console.log(b)

//  Filter fuction ( when condition true)
//  let a = [44,32,45,6,3,2]
//  let b = a.filter((conste)=>{
//      return conste<10
//  })
//  console.log(b)

//   Reduce function (used to perform opperation)
// let a = [1,2,3,4,5,6]
// let b = a.reduce((mt,at)=>{
//       return mt+at
// })
// console.log(b)
// console.log(typeof(b))
 
// Another way to represent 

// const b =(mt,at)=>{
//            return mt+at
//      }
// let c = a.reduce(b)
// console.log(c)









