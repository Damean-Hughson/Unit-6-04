let number = 0
let b1 = 0
let b2 = 0
let h = 0
document.getElementById("report").addEventListener("click",calculate)

function calculate () {
  b1 = document.getElementById("input").value
  b2= document.getElementById("input2").value
  h = document.getElementById("input3").value
  b1 = parseInt(b1)
  b2 = parseInt(b2)
  h = parseInt(h)
  number = (b1 + b2)/2 * h
alert(number)


}