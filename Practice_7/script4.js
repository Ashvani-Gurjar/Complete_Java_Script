//  let a  = document.getElementsByTagName("li")
// console.log(a)
// a[0].style.background = "cyan"
// a[1].style.background = "green"
// a[2].style.background = "pink"

Array.from(document.getElementsByTagName("li")).forEach((element) => {
     element.style.background = "cyan";
})
