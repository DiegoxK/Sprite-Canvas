import { canvas, context, width, height } from "./canvas.js";
import simon, {
  bullet_sprite,
  bullet_flash_sprite,
  bullet_wave_sprite,
} from "./sprites/simon.js";
import nop_sprite, { explosion_sprite } from "./sprites/nop.js";

let hasShot = false;
let bullet_flash = false;
let bullet_wave = false;
let explosion = false;

const destroyed_slug = new Image();
destroyed_slug.src = "images/sprites/metal_slug/destroyed.png";

function animation() {
  context.clearRect(0, 0, width, height);
  simon.draw();
  nop_sprite.draw();

  context.drawImage(destroyed_slug, 11, 226, 71, 52, 400, 160, 71, 50);

  if (explosion) {
    explosion_sprite.draw();
    setTimeout(() => {
      explosion = false;
      explosion_sprite.setFrameIndex(0);
    }, 1050);
  }

  if (hasShot) {
    bullet_sprite.draw();
    bullet_sprite.setPosition(bullet_sprite.x + 10, bullet_sprite.y);

    if (bullet_sprite.x > width - 200) {
      hasShot = false;
      bullet_sprite.setAnimation("default");
      bullet_sprite.setPosition(140, 78);

      explosion = true;
      nop_sprite.setAnimation("wrecked");

      setTimeout(() => {
        simon.setAnimation("pose");
      }, 750);
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
