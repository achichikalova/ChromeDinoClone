//imports
import { getCustomProperty, incrementCustomProperty, setCustomProperty } from './updateCustomProperty.js';

// Speed for ground moving
const SPEED = 0.05;

// Getting ground elements
const groundElements = document.querySelectorAll('[data-ground]');

export const setupGround = () => {
  setCustomProperty(groundElements[0], "--left", 0);
  setCustomProperty(groundElements[1], "--left", 300);
}

export const updateGround = (delta, speedScale) => {
  groundElements.forEach(ground => {
    incrementCustomProperty(ground, "--left", delta * speedScale * SPEED * -1);

    if (getCustomProperty(ground, "--left") <= -300) {
      incrementCustomProperty(ground, "--left", 600);
    }
  });
}