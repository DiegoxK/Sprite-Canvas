const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const width = (canvas.width = 500);
const height = (canvas.height = 500);

const frameWidth = 92;
const frameHeight = 54;

const xPos = 50;
const yPos = 80;
const scale = 1;
const fps = 60;
const secondsToUpdate = 0.18 * fps;

let frameIndex = 0;
let count = 0;

const spriteSheet = new Image();
spriteSheet.src = "Sprite-Sheet.png";

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
