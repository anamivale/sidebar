const form = document.querySelector("form")
const input = document.querySelector("input")
const msg = document.querySelector(".msg")

let text = ""

input.addEventListener("change", (e) => {
  text = e.target.value
})

form.addEventListener("submit", (e) => {
  e.preventDefault()
  if (text == "") {
    const errsg = document.querySelector(".err")
    errsg.style.display = "block"
    // errsg.classList.add("error")

    setTimeout(() => {
      errsg.style.display = "none"
      // errsg.classList.add("err")

    }, 2000)
  } else {
    msg.innerHTML = text
  }
})

const cls = document.querySelector(".blue")
