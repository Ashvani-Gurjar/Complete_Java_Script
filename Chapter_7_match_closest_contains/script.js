let id1 = document.getElementById("id1");
let sp1 = document.getElementById("sp1");
console.log(id1)

console.log(id1.matches(".contain"))
console.log(id1.matches(".box"))

console.log(sp1.closest("#sp1"))
console.log(sp1.closest("#id1"))
console.log(sp1.closest(".box"))

console.log(id1.contains(sp1))
console.log(sp1.contains(sp1))
console.log(sp1.contains(id1))