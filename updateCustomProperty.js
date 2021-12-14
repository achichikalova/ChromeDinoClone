export const getCustomProperty = (element, property) => {
  return parseFloat(getComputedStyle(element).getPropertyValue(property)) || 0;
}

export const setCustomProperty = (element, property, value) => {
  element.style.setProperty(property, value);
}

export const incrementCustomProperty = (element, property, increment) => {
  setCustomProperty(element, property, getCustomProperty(element, property) + increment);
}