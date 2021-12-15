// imports:
import { setupGround, updateGround } from './ground.js'
import { setupDino, updateDino } from './dino.js'

const WORLD_WIDTH = 100;
const WORLD_HEIGHT = 30;
const SPEED_SCALE_INCREASE = .00001;

const worldElement = document.querySelector('[data-world]');
const scoreElement = document.querySelector('[data-score]');
const startScreenElement = document.querySelector('[data-start-screen]');

// Update Loop for smooth moving of the elements on the screen
let lastTime;
let speedScale;
let score;

// Function to update speed scale
const updateSpeedScale = (delta) => {
  speedScale += delta * SPEED_SCALE_INCREASE;
}

// Function to update score
const updateScore = (delta) => {
  score += delta * 0.01;
  scoreElement.textContent = Math.floor(score);
}

const update = (time) => {
  
  if (lastTime == null) {
    lastTime = time;
    window.requestAnimationFrame(update);
    return;
  }
  
  const delta = time - lastTime;
  
  // Ground moving functions
  updateGround(delta, speedScale);
  updateDino(delta, speedScale);
  updateSpeedScale(delta);
  updateScore(delta);
  
  lastTime = time;
  window.requestAnimationFrame(update);
}

// Function to check if user press any key to start moving the ground
const handleStart = () => {
  lastTime = null;
  speedScale = 1;
  score = 0;
  // Setup ground
  setupGround();
  setupDino();
  startScreenElement.classList.add('hide');
  window.requestAnimationFrame(update);
} 

// Setup event listener for ground to start moving only after user start the game
document.addEventListener('keydown', handleStart, { once: true });

// World Scaling
const setWorldScale = () => {
  let worldScale;

  if (window.innerWidth / window.innerHeight < WORLD_WIDTH / WORLD_HEIGHT) {
    worldScale = window.innerWidth / WORLD_WIDTH;
  } else {
    worldScale = window.innerHeight / WORLD_HEIGHT;
  }

  worldElement.style.width = `${WORLD_WIDTH * worldScale}px`;
  worldElement.style.height = `${WORLD_HEIGHT * worldScale}px`;
}

setWorldScale();
window.addEventListener('resize', setWorldScale);