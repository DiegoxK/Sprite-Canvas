export default class Sprite {
  frameIndex = 0;
  count = 0;
  spriteSheet = new Image();
  animation = "idle";

  constructor(
    ctx,
    animations,
    x,
    y,
    width,
    height,
    scale = 1,
    fps = 60,
    secondsToUpdate = 1,
    frames
  ) {
    this.ctx = ctx;
    this.animations = animations;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.scale = scale;
    this.fps = fps;
    this.secondsToUpdate = secondsToUpdate;
    this.frames = frames;
  }

  draw() {
    this.ctx.imageSmoothingEnabled = false;
    this.spriteSheet.src = this.animations[this.animation];

    this.ctx.drawImage(
      this.spriteSheet,
      this.frameIndex * this.width,
      0,
      this.width,
      this.height,
      this.x,
      this.y,
      this.width * this.scale,
      this.height * this.scale
    );

    this.count++;

    if (this.count > this.secondsToUpdate * this.fps) {
      this.frameIndex++;
      this.count = 0;
    }

    if (this.frameIndex >= this.frames) {
      this.frameIndex = 0;
    }
  }

  setAnimation(animation, frames) {
    this.frameIndex = 0;
    this.animation = animation;
    this.frames = frames;
  }
}
