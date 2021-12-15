let dinoElement = document.querySelector('[data-dino]');

const JUMP_SPEED = 0.45;
const GRAVITY = 0.011;
const DINO_FRAME_COUNT = 2;
const FRAME_TIME = 100;

let isJumping;
let dinoFrame;
let currentFrameTime;

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
const handleJump = () => {

}

export const setupDino = () => {
  isJumping = false;
  dinoFrame = 0;
  currentFrameTime = 0;
}
export const updateDino = (delta, speedScale) => {
  handleRun(delta, speedScale);
  handleJump();
}