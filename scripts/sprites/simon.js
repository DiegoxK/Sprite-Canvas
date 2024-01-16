const animations = {
  default: {
    src: "/assets/sprites/simon/idle.png",
    frames: 8,
    loop: true,
  },
  pose: {
    src: "/assets/sprites/simon/pose.png",
    frames: 8,
    loop: true,
  },
  shoot: {
    src: "/assets/sprites/simon/shoot.png",
    frames: 10,
    loop: false,
  },
};

const props = {
  bullet: {
    src: "/assets/sprites/simon/bullet.png",
    frames: 1,
    loop: false,
  },
};

export default animations;
