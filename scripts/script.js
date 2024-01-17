import { canvas, context, width, height } from "./canvas.js";

import simon, {
  bullet_sprite,
  bullet_flash_sprite,
  bullet_wave_sprite,
} from "./sprites/simon.js";

let hasShot = false;
let bullet_flash = false;
let bullet_wave = false;

const destroyed_slug = new Image();
destroyed_slug.src = "/assets/sprites/metal_slug/destroyed.png";

function animation() {
  context.clearRect(0, 0, width, height);

  simon.draw();

  if (hasShot) {
    bullet_sprite.draw();
    bullet_sprite.setPosition(bullet_sprite.x + 5, bullet_sprite.y);
    if (bullet_sprite.x > width - 150) {
      hasShot = false;
      bullet_sprite.setAnimation("default");
      bullet_sprite.setPosition(140, 78);
      simon.setAnimation("pose");
    }
    if (bullet_wave) {
      bullet_wave_sprite.draw();
      setTimeout(() => {
        bullet_wave = false;
        bullet_wave_sprite.setAnimation("soundwave");
      }, 320);
    }
    if (bullet_flash) {
      bullet_flash_sprite.draw();
      setTimeout(() => {
        bullet_flash = false;
        bullet_flash_sprite.setAnimation("flash");
      }, 270);
    }
  }

  requestAnimationFrame(animation);
}

animation();

canvas.addEventListener("click", () => {
  if (!hasShot) {
    simon.setAnimation("shoot");
    setTimeout(() => {
      hasShot = true;
      bullet_flash = true;
      bullet_wave = true;
    }, 700);
  }
});
