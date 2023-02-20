// let arr = [2,3];
// let [a,b]=arr;
// console.log(a,b)

// let arr = [2,3,4,5,6,7,8,9,10];
// // let [a,b,c] = arr;
// // console.log(a,b,c);
// let [a,b,c,d,,,e,...rest] = arr;
// console.log(a,b,c,d,e);
// console.log(a,b,c,rest);

// let {a,b} = {a:1,b:4};
// let c = {
//      a:1,
//      b:2
// }
// let {a,b} = c;
// console.log(a,b)

// Spread operators

// let arr = [2,3,4,5];
// let obj1 = {...arr};
// console.log(obj1)

// function sum(v1,v2,v3) {
//      return v1+v2+v3;
// }
// console.log(sum(...arr));

let a = {
     name: "Ashvani",
     company: "Company XYZ",
     address: "XYZ"
}
console.log(a)
console.log({...a, name:"Gurjar"});
console.log({name:"Gurjar",...a});
