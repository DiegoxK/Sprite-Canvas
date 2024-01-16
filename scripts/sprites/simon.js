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
    fadeout: true,
  },
  shoot: {
    src: "/assets/sprites/simon/shoot.png",
    frames: 10,
    loop: false,
  },
};

export const bullet = {
  default: {
    src: "/assets/sprites/simon/bullet.png",
    frames: 9,
    loop: false,
    static: true,
  },
};

export default animations;
