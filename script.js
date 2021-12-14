// imports:
import { setupGround, updateGround } from './ground.js'

const WORLD_WIDTH = 100;
const WORLD_HEIGHT = 30;

const worldElement = document.querySelector('[data-world]');

// Update Loop for smooth moving of the elements on the screen
let lastTime;
let speedScale;

const update = (time) => {
  
  if (lastTime == null) {
    lastTime = time;
    window.requestAnimationFrame(update);
    return;
  }
  
  const delta = time - lastTime;
  
  // Ground moving function
  updateGround(delta, speedScale);
  
  lastTime = time;
  window.requestAnimationFrame(update);
}

// Function to check if user press any key to start moving the ground
const handleStart = () => {
  lastTime = null;
  speedScale = 1;
  // Setup ground
  setupGround();
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