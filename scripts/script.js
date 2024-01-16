import { canvas, context, width, height } from "./canvas.js";
import Sprite from "./sprite.js";
import simon_animations, { bullet } from "./sprites/simon.js";

let hasShot = false;
let bullet_flash = false;
let bullet_sfx = false;

const simon = new Sprite(
  context,
  simon_animations,
  50,
  57,
  100,
  70,
  1,
  60,
  0.18
);

const bullet_sprite = new Sprite(context, bullet, 160, 78, 25, 55, 1, 60, 0.18);
const bullet_flash_sprite = new Sprite(
  context,
  bullet,
  135,
  78,
  25,
  55,
  1,
  60,
  0.08
);
bullet_flash_sprite.setAnimation("flash");
const bullet_soundfsx = new Sprite(
  context,
  bullet,
  125,
  78,
  25,
  55,
  1,
  60,
  0.07
);
bullet_soundfsx.setAnimation("soundsfx");

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
    if (bullet_sfx) {
      bullet_soundfsx.draw();
      setTimeout(() => {
        bullet_sfx = false;
        bullet_soundfsx.setAnimation("soundsfx");
      }, 360);
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
  simon.setAnimation("shoot");
  setTimeout(() => {
    hasShot = true;
    bullet_flash = true;
    bullet_sfx = true;
  }, 700);
});
