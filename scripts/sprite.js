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
    secondsToUpdate = 1
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
  }

  draw() {
    const current_animation = this.animations[this.animation];

    this.frames = current_animation.frames;
    this.ctx.imageSmoothingEnabled = false;
    this.spriteSheet.src = current_animation.src;

    // if (this.frameIndex + 1 >= this.frames && current_animation.fadeout) {
    //   this.ctx.globalAlpha -= 0.1;
    // }

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
      if (current_animation.loop === true) {
        this.frameIndex = 0;
      } else if (current_animation.static === true) {
        this.frameIndex = this.frames - 1;
      } else if (current_animation.fadeout) {
        this.frameIndex = this.frames - 1;
        // this.ctx.globalAlpha = 1;
      } else {
        this.setAnimation("default", 8);
      }
    }
  }

  setAnimation(animation, frames) {
    this.frameIndex = 0;
    this.animation = animation;
    this.frames = frames;
  }

  setPosition(x, y) {
    this.x = x;
    this.y = y;
  }
}
