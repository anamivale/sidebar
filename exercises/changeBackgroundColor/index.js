const body = document.querySelector("body")
const button = document.querySelector("button")
const colors = ["blue", "pink", "aqua", "beige", "coral", "brown"]

button.addEventListener("click", () => {
  colorIndex = Math.floor(Math.random() * colors.length)
  body.style.background = colors[colorIndex]
})
