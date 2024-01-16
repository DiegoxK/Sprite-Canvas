import { canvas, context, width, height } from "./canvas.js";
import Sprite from "./sprite.js";
import simon_animations from "./sprites/simon.js";

const simon = new Sprite(
  context,
  simon_animations,
  50,
  57,
  100,
  70,
  1,
  60,
  0.18,
  8
);

function animation() {
  context.clearRect(0, 0, width, height);
  simon.draw();
  requestAnimationFrame(animation);
}

animation();

canvas.addEventListener("click", () => {
  simon.setAnimation("shoot", 10);

  console.log(simon.secondsToUpdate * simon.fps * 10);

  setTimeout(() => {
    simon.setAnimation("idle", 8);
  }, 10000);
});
