const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let number = 0;
let scale = 1;

function drawFlower() {
  let angle = number
  let radius = scale*number
  let positionX = radius * Math.sin(angle) + window.innerWidth*0.5;
  let positionY = radius * Math.cos(angle) + window.innerHeight*0.5;
  
  ctx.fillStyle = `hsl(${number} , 50%, 50%)`;
  ctx.strokeStyle = `hsl(${360-number} , 50%, 50%)`;
  ctx.beginPath();
  ctx.arc(positionX, positionY, 10, 0, Math.PI * 2);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  number++;
}

function animate() {
  drawFlower();

  if (number > 350){
    number = 0
    scale = Math.random() * 6
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
  }
  requestAnimationFrame(animate);
}

animate();
