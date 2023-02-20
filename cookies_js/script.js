
console.log(document.cookie)
document.cookie = "name1=Gurjar1234"
document.cookie = "name=Gurjar1234344"
document.cookie = "name1=Gurjar1234"

let key = prompt("Enter your key");
let value = prompt("Enter your value");
// document.cookie = `${key}=${value}`;

document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
// then use for decode
// decodeURIComponent("       ");
console.log(document.cookie)