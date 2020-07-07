const value = document.querySelector("#value")
let counter = 0

const increase = document.querySelector(".increase")
const decrease = document.querySelector(".decrease")
const reset = document.querySelector(".reset")

increase.addEventListener('click', function(){
  counter = counter + 1
  value.innerHTML = counter
})

decrease.addEventListener('click', function(){
  counter = counter - 1
  value.innerHTML = counter
})

reset.addEventListener('click', function(){
  counter = 0
  value.innerHTML = counter
})
