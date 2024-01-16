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

const bullet = function animation() {
  context.clearRect(0, 0, width, height);
  simon.draw();

  if (simon.animation === "shoot") {
    console.log("shooting");
  }

  requestAnimationFrame(animation);
};

animation();

canvas.addEventListener("click", () => {
  if (simon.animation === "shoot") return;
  simon.setAnimation("shoot", 10);
});
