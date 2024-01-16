export default class Sprite {
  frameIndex = 0;
  count = 0;
  spriteSheet = new Image();
  animation = "default";

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
    const current_animation = this.animations[this.animation];

    this.ctx.imageSmoothingEnabled = false;
    this.spriteSheet.src = current_animation.src;

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

    if (current_animation.loop === true) {
      if (this.count > this.secondsToUpdate * this.fps) {
        this.frameIndex++;
        this.count = 0;
      }

      if (this.frameIndex >= this.frames) {
        this.frameIndex = 0;
      }
    } else {
      if (this.count > this.secondsToUpdate * this.fps) {
        this.frameIndex++;
        this.count = 0;
      }

      if (this.frameIndex >= this.frames) {
        this.setAnimation("default", 8);
      }
    }
  }

  setAnimation(animation, frames) {
    this.frameIndex = 0;
    this.animation = animation;
    this.frames = frames;
  }
}
