import Sprite from "../sprite_class.js";
import { context } from "../canvas.js";

const animations = {
  default: {
    src: "/assets/sprites/nop-03/nop_idle.png",
    frames: 2,
    loop: true,
  },
  wrecked: {
    src: "/assets/sprites/nop-03/wrecked.png",
    frames: 4,
    loop: false,
    static: true,
    fadeout: true,
  },
};

const explosion = {
  default: {
    src: "/assets/sprites/nop-03/explosion.png",
    frames: 17,
    loop: false,
  },
};

const nop_sprite = new Sprite(context, animations, 920, 57, 90, 98, 1, 0.18);
export const explosion_sprite = new Sprite(
  context,
  explosion,
  920,
  57,
  64,
  64,
  1,
  0.08
);

export default nop_sprite;
