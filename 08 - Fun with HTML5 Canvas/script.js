const canvas = document.querySelector("#draw");
const ctx = canvas.getContext("2d");
let lastX = 0;
let lastY = 0;
let isDrawing = false;
let color = 0;
let lineWith = 0;
let delta = 1;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.srokeStyle = `hsl(${color}, 100%, 50%)`;
ctx.lineWidth = lineWith;

canvas.addEventListener("mouseout", () => (isDrawing = false));
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mousedown", e => {
  isDrawing = true;
  lastX = e.offsetX;
  lastY = e.offsetY;
});
canvas.addEventListener("mousemove", draw);

function draw(e) {
  if (!isDrawing) return;
  ctx.strokeStyle = `hsl(${color}, 100%, 50%)`;
  ctx.beginPath();
  ctx.lineWidth = lineWith;
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  lastX = e.offsetX;
  lastY = e.offsetY;
  setStyle();
}

function setStyle() {
  lineWith += delta;
  color++;
  lineWith < 1 && (delta = 1);
  lineWith > 100 && (delta = -1);
}
