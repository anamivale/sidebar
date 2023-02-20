console.log("js")
let fruits = ["sd", "gf", "fd"]
let text = "<ul> "

fruits.forEach((element) => {
  text += "<li>" + element + "</li>"
})
text += "</ul>"

// const div = document.getElementById("div")
// div.innerHTML = text

// div.style.listStyle = "none"

const person = ["valeria", "muhembele"]

// document.getElementById("div1").innerHTML = person.join("*")
person.splice(1, 0, "val", "muhe") // start at 1 and remove 0 elements add the two inbetween
// person.splice(0,2)//at index 0 remove 2

const p1 = person.slice(0, 3) // from start to indx 3 but not including value at index 3
console.log(p1)

const numbers = [100, 25, 4, 39]
console.log(numbers.sort())
console.log(person)
const points = [40, 100, 1, 5, 25, 10]

points.sort(function (a, b) {
  return b - a
})
console.log(points)
