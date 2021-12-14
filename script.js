const WORLD_WIDTH = 100;
const WORLD_HEIGHT = 30;

const worldElement = document.querySelector('[data-world]');

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