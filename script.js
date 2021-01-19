var color1 = document.getElementById("color1")
var color2 = document.getElementById("color2")
var resp = document.querySelector("resp")

var body = document.getElementById("gradient")

function input() {
    body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`
}

