const value = document.querySelector("#value")
let counter = 0

const increase = document.querySelector(".increase")
const decrease = document.querySelector(".decrease")
const reset = document.querySelector(".reset")

increase.addEventListener('click', function(){
  counter = counter + 1
  value.innerHTML = counter
  value.style.color = "green"
})

decrease.addEventListener('click', function(){
  counter = counter - 1
  value.innerHTML = counter
  value.style.color = "red"
})

reset.addEventListener('click', function(){
  counter = 0
  value.innerHTML = counter
  value.style.color = "#222"
})
