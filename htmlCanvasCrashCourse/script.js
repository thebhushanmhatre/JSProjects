const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d')
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


// Creating Rectangle and Using Event Listener to prevent Stretching
// window.addEventListener('resize', function () {
//   canvas.width = window.innerWidth;
//   canvas.height = window.innerHeight;
//   ctx.fillStyle = 'white';
//   ctx.fillRect(10, 10, 150, 50);
// })

// ctx.fillStyle = 'white';
// ctx.fillRect(10, 10, 150, 50);


//////////////////////////// Drawing Circle ////////////////////////////
// ctx.fillStyle = 'green';
// ctx.strokeStyle = 'white';
// ctx.beginPath();
// ctx.arc(100, 100, 50, 0, Math.PI*2)
// ctx.fill();
// ctx.stroke();


// function drawCircle(x, y) {
//   ctx.fillStyle = 'blue';
//   ctx.beginPath();
//   ctx.arc(x, y, 20, 0, Math.PI * 2)
//   ctx.fill();
// }

const mouse = {
  x: undefined,
  y: undefined
}


//////////////////////////// Draw Circle where we click on screen ////////////////////////////
// canvas.addEventListener('click', function(event) {
//   mouse.x = event.x;
//   mouse.y = event.y;
//   drawCircle(mouse.x, mouse.y);
// })


//////////////////////////// Paint Brush Effect ////////////////////////////
// canvas.addEventListener('mousemove', function (event) {
//   mouse.x = event.x;
//   mouse.y = event.y;
//   drawCircle(mouse.x, mouse.y);
// })


//////////////////////////// Animation Loop ////////////////////////////
// canvas.addEventListener('mousemove', function (event) {
//   mouse.x = event.x;
//   mouse.y = event.y;
//   // drawCircle(mouse.x, mouse.y);
// })
// function animate() {
//   // This keeps clearing the canvas continuously
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   drawCircle(mouse.x, mouse.y);
//   // Calls the animate function again which goes on loop
//   requestAnimationFrame(animate);
// }
// animate();


//////////////////////////// Random Particles System ////////////////////////////
// class Particle {
//   constructor(){
//     // this.x = mouse.x;
//     // this.y = mouse.y;
//     this.x = Math.random()*canvas.width; // 0.5*canvas.width; // for Explosion like effect
//     this.y = Math.random()*canvas.height; // 0.5*canvas.height; // for Explosion like effect
//     this.size = Math.random() * 6;
//     this.speedX = Math.random() * 3 - 1.5;
//     this.speedY = Math.random() * 3 - 1.5;
//   }

//   update(){
//     this.x += this.speedX;
//     this.y += this.speedY;
//   }

//   draw(){
//     ctx.fillStyle = 'blue';
//     ctx.beginPath();
//     ctx.arc(this.x, this.y, 20, 0, Math.PI * 2)
//     ctx.fill();
//   }
// }

// const particlesArray = []

// function init() {
//   for (let i = 0; i < 100; i++) {
//     particlesArray.push(new Particle());
//   }
// }

// function handleParticles() {
//   for (let i = 0; i < particlesArray.length; i++) {
//     particlesArray[i].update();
//     particlesArray[i].draw();
//   }
// }
// function animate() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   handleParticles(mouse.x, mouse.y);
//   requestAnimationFrame(animate);
// }

// init();
// animate();


//////////////////////////// Particle Trail Effect ////////////////////////////

// let hue = 0;

// class Particle {
//   constructor() {
//     // To show Particle effect only under mouse
//     this.x = mouse.x;
//     this.y = mouse.y;
//     // this.x = Math.random() * canvas.width;
//     // this.y = Math.random() * canvas.height;
//     this.size = Math.random() * 15 + 1; // Create particles of different sizes
//     this.speedX = Math.random() * 3 - 1.5;
//     this.speedY = Math.random() * 3 - 1.5;
//     this.color = 'hsl(' + hue + ', 100%, 50%)'
//   }

//   update() {
//     this.x += this.speedX;
//     this.y += this.speedY;
//     // Shrink particles as they move
//     if (this.size > 0.2) this.size -= 0.1;
//   }

//   draw() {
//     // ctx.fillStyle = 'hsl('+ hue +', 100%, 50%)';
    
//     // This will make particle remember color
//     ctx.fillStyle = this.color;

//     ctx.beginPath();
//     ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
//     ctx.fill();
//   }
// }

// const particlesArray = []

// function handleParticles() {
//   for (let i = 0; i < particlesArray.length; i++) {
//     particlesArray[i].update();
//     particlesArray[i].draw();
//     if(particlesArray[i].size <= 0.3 ){
//       particlesArray.splice(i, 1);
//       // The next element is skipped, and their update and draw method is not run 
//       // And blinking effect is seen
//       i--; // To avoid blinking effect
//     }
//   }
// }

// function animate() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);

//   // Same as above
//   // ctx.fillStyle = 'black';
//   // ctx.fillRect(0, 0, canvas.width, canvas.height);

//   // // This will leave some paint behind very little transparent
//   // ctx.fillStyle = 'rgba(0,0,0,0.01)';
//   // ctx.fillRect(0, 0, canvas.width, canvas.height);

//   // Multicolor trail
//   hue+=2; // Can change faster or slower to make color change faster or slower
  
//   handleParticles(mouse.x, mouse.y);
//   requestAnimationFrame(animate);
// }

// //////////////////////////// Particle effect on click/mousemove on screen
// // canvas.addEventListener('click', function(event) {
// canvas.addEventListener('mousemove', function(event) {
//   mouse.x = event.x;
//   mouse.y = event.y;
//   // // 1 particle
//   // particlesArray.push(new Particle())
  
//   // Multiple particles - This will determine how long the trail will be
//   for (let i = 0; i < 10; i++) {
//     particlesArray.push(new Particle());
//   }
// })

// animate();




//////////////////////////// Constellation Effect ////////////////////////////


let hue = 0;

class Particle {
  constructor() {
    this.x = mouse.x;
    this.y = mouse.y;
    this.size = Math.random() * 10 + 1;
    this.speedX = Math.random() * 3 - 1.5;
    this.speedY = Math.random() * 3 - 1.5;
    this.color = 'hsl(' + hue + ', 100%, 50%)'
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.size > 0.2) this.size -= 0.1;
  }

  draw() {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    ctx.fill();
  }
}

const particlesArray = []

function handleParticles() {
  for (let i = 0; i < particlesArray.length; i++) {
    particlesArray[i].update();
    particlesArray[i].draw();
    
    // Joining particles by using pythogorus thm
    for (let j = i; j < particlesArray.length; j++) {
      const dx = particlesArray[i].x - particlesArray[j].x;
      const dy = particlesArray[i].y - particlesArray[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < 100){
        ctx.beginPath();
        ctx.strokeStyle = particlesArray[i].color;
        ctx.lineWidth = 0.2;
        ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
        ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
        ctx.stroke();
      }
    }

    if (particlesArray[i].size <= 0.3) {
      particlesArray.splice(i, 1);
      i--;
    }
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Same as above
  // ctx.fillStyle = 'black';
  // ctx.fillRect(0, 0, canvas.width, canvas.height);

  // // This will leave some paint behind very little transparent
  // ctx.fillStyle = 'rgba(0,0,0,0.01)';
  // ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Multicolor trail
  hue += 2; // Can change faster or slower to make color change faster or slower

  handleParticles(mouse.x, mouse.y);
  requestAnimationFrame(animate);
}

//////////////////////////// Particle effect on click/mousemove on screen
// canvas.addEventListener('click', function(event) {
canvas.addEventListener('mousemove', function (event) {
  mouse.x = event.x;
  mouse.y = event.y;
  // // 1 particle
  // particlesArray.push(new Particle())

  // Multiple particles - This will determine how long the trail will be
  for (let i = 0; i < 5; i++) {
    particlesArray.push(new Particle());
  }
})

animate();



















