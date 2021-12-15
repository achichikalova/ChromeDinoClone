import { incrementCustomProperty, getCustomProperty, setCustomProperty } from "./updateCustomProperty.js";

let dinoElement = document.querySelector('[data-dino]');

const JUMP_SPEED = 0.45;
const GRAVITY = 0.0015;
const DINO_FRAME_COUNT = 2;
const FRAME_TIME = 100;

let isJumping;
let dinoFrame;
let currentFrameTime;
let yVelocity;

// Run Dino function
const handleRun = (delta, speedScale) => {
  if (isJumping) {
    dinoElement.src = `images/dino-stationary.png`;
    return;
  }

  if (currentFrameTime >= FRAME_TIME) {
    dinoFrame = (dinoFrame + 1) % DINO_FRAME_COUNT;
    dinoElement.src = `images/dino-run-${dinoFrame}.png`;
    currentFrameTime -= FRAME_TIME;
  }

  currentFrameTime += delta * speedScale;
}

// Jump Dino function
const handleJump = (delta) => {
  if (!isJumping) return;

  incrementCustomProperty(dinoElement, '--bottom', yVelocity * delta)

  if (getCustomProperty(dinoElement, '--bottom') <= 0) {
    setCustomProperty(dinoElement, '--bottom', 0);
    isJumping = false;
  }

  yVelocity -= GRAVITY * delta;
}

// Handle user press jump function
const onJump = (e) => {
  if (e.code !== 'Space' || isJumping) return;
  yVelocity = JUMP_SPEED;
  isJumping = true;
}

export const setupDino = () => {
  isJumping = false;
  dinoFrame = 0;
  currentFrameTime = 0;
  yVelocity = 0;
  setCustomProperty(dinoElement, '--bottom', 0);
  document.removeEventListener('keydown', onJump);
  document.addEventListener('keydown', onJump);
}
export const updateDino = (delta, speedScale) => {
  handleRun(delta, speedScale);
  handleJump(delta);
}