import Sprite from "../sprite_class.js";
import { context } from "../canvas.js";

const animations = {
  default: {
    src: "/assets/sprites/simon/idle.png",
    frames: 8,
    loop: true,
  },
  pose: {
    src: "/assets/sprites/simon/pose.png",
    frames: 7,
    loop: false,
    static: true,
    fadeout: true,
  },
  shoot: {
    src: "/assets/sprites/simon/shoot.png",
    frames: 10,
    loop: false,
  },
};

const bullet = {
  default: {
    src: "/assets/sprites/simon/bullet.png",
    frames: 9,
    loop: false,
    static: true,
  },
  flash: {
    src: "/assets/sprites/simon/flash.png",
    frames: 4,
    loop: false,
    static: true,
  },
  soundwave: {
    src: "/assets/sprites/simon/soundsfx.png",
    frames: 5,
    loop: false,
    static: true,
  },
};

const simon = new Sprite(context, animations, 50, 57, 100, 70, 1, 0.18);

export const bullet_sprite = new Sprite(
  context,
  bullet,
  160,
  78,
  25,
  55,
  1,
  0.1
);

export const bullet_flash_sprite = new Sprite(
  context,
  bullet,
  135,
  78,
  25,
  55,
  1,
  0.08
);
bullet_flash_sprite.setAnimation("flash");

export const bullet_wave_sprite = new Sprite(
  context,
  bullet,
  125,
  78,
  25,
  55,
  1,
  0.06
);
bullet_wave_sprite.setAnimation("soundwave");

export default simon;
