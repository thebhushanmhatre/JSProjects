const images = document.querySelectorAll('img')
const slide = document.querySelector('.carousel-slide')

const prev = document.querySelector('#prev')
const next = document.querySelector('#next')

let counter = 1;
const imgSize = 415

slide.style.transform = 'translateX(' + (-counter * imgSize).toString() + 'px)'

prev.addEventListener('click', () => {
  if (counter > 0){
    slide.style.transition = "transform 0.4s ease-in-out"
    counter--
    slide.style.transform = 'translateX(' + (-counter * imgSize).toString() + 'px)'
  }
})

next.addEventListener('click', () => {
  if (counter < 4){
    slide.style.transition = "transform 0.4s ease-in-out"
    counter++
    slide.style.transform = 'translateX(' + (-counter * imgSize).toString() + 'px)'
  }
})

slide.addEventListener('transitionend', () => {
  if (images[counter].id == "firstClone") {
    slide.style.transition = "none"
    counter = 1
    slide.style.transform = 'translateX(' + (-counter * imgSize).toString() + 'px)'
  }
  else if (images[counter].id == "lastClone") {
    slide.style.transition = "none"
    counter = images.length - 2
    slide.style.transform = 'translateX(' + (-counter * imgSize).toString() + 'px)'
  }

})

document.addEventListener('keydown', (e) => {
  if (e.key == "ArrowLeft") {
    document.querySelector('#prev').click();
  }
  else if (e.key == "ArrowRight") {
    document.querySelector('#next').click();
  }
});

