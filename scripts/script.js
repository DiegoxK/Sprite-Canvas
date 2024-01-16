import { canvas, context, width, height } from "./canvas.js";
import Sprite from "./sprite.js";
import simon_animations, { bullet } from "./sprites/simon.js";

let hasShot = false;

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

const bullet_sprite = new Sprite(context, bullet, 140, 78, 25, 55, 1, 60, 0.18);

function animation() {
  context.clearRect(0, 0, width, height);
  simon.draw();

  if (hasShot) {
    bullet_sprite.draw();
    bullet_sprite.setPosition(bullet_sprite.x + 5, bullet_sprite.y);
    if (bullet_sprite.x > width - 150) {
      hasShot = false;
      bullet_sprite.setPosition(140, 78);
      simon.setAnimation("pose");
    }
    // hasShot = false;
  }

  requestAnimationFrame(animation);
}

animation();

canvas.addEventListener("click", () => {
  simon.setAnimation("shoot");
  setTimeout(() => {
    hasShot = true;
  }, 700);
});
