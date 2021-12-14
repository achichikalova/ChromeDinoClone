export default getCustomProperty = (element, property) => {
  return parseFloat(getComputedStyle(element).getPropertyValue(property)) || 0;
}

export default setCustomProperty = (element, property, value) => {
  element.style.setProperty(property, value);
}

export default incrementCustomProperty = (element, property, increment) => {
  setCustomProperty(element, property, getCustomProperty(element, property) + increment);
}