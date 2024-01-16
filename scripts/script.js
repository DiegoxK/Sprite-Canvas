import { context, width, height } from "./canvas.js";

const frameWidth = 100;
const frameHeight = 70;

const xPos = 50;
const yPos = 57;
const scale = 1;
const fps = 60;
const secondsToUpdate = 0.18 * fps;

let frameIndex = 0;
let count = 0;

const spriteSheet = new Image();
spriteSheet.src = "/assets/sprites/simon/idle.png";

function animate() {
  context.imageSmoothingEnabled = false;
  context.drawImage(
    spriteSheet,
    frameIndex * frameWidth,
    0,
    frameWidth,
    frameHeight,
    xPos,
    yPos,
    frameWidth * scale,
    frameHeight * scale
  );

  count++;

  if (count > secondsToUpdate) {
    frameIndex++;
    count = 0;
  }

  if (frameIndex >= 8) {
    frameIndex = 0;
  }
}

function frame() {
  context.clearRect(0, 0, width, height);
  animate();
  requestAnimationFrame(frame);
}

frame();
