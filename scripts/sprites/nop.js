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

const nop_sprite = new Sprite(context, animations, 920, 57, 90, 98, 1, 0.18);

export default nop_sprite;
