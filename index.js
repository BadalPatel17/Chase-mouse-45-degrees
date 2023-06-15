//Play with Player Movement

//Set up Canvas and Graphics Context

let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

//Global Variables
let mouseX, mouseY;
let speed = 5;
let circle = {
  x: 300,
  y: 400,
};

// Main progrm loop
document.addEventListener("mousemove", mousemoveHandler);
function mousemoveHandler(event) {
  //Move playerBlue based on what key is pressed / held down
  let cnvRect = cnv.getBoundingClientRect();
  //Math circle
  mouseX = Math.round(event.clientX - cnvRect.left);
  mouseY = Math.round(event.clientY - cnvRect.top);
}
requestAnimationFrame(draw);
// Check collision
function draw() {
  //Drawing
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  //Draw a circle
  ctx.fillStyle = " blue";
  ctx.beginPath();
  ctx.arc(circle.x, circle.y, 40, 0, 2 * Math.PI);
  ctx.fill();

  if (mouseX > circle.x) {
    circle.x += 10;
  }
  if (mouseX < circle.x) {
    circle.x -= 10;
  }
  if (mouseY > circle.y) {
    circle.y += 10;
  }
  if (mouseY < circle.y) {
    circle.y -= 10;
  }
  //Request another Animation Frame
  requestAnimationFrame(draw);
}
