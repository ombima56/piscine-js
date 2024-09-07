const CIRCLE_SIZE = 50;
const CIRCLE_RADIUS = CIRCLE_SIZE / 2;
let activeCircle = null;
let isDragging = false;

// Function to create a circle at the mouse click position
export function createCircle(e) {
  if (isDragging) return;

  activeCircle = createCircleElement(e.clientX, e.clientY);
  document.body.appendChild(activeCircle);
  isDragging = true;
}

// Function to create and return a circle element
function createCircleElement(x, y) {
  const circle = document.createElement('div');
  circle.className = 'circle';
  setCirclePosition(circle, x, y);
  circle.style.background = 'white';
  return circle;
}

// Helper function to set the position of the circle
function setCirclePosition(circle, x, y) {
  circle.style.left = `${x - CIRCLE_RADIUS}px`;
  circle.style.top = `${y - CIRCLE_RADIUS}px`;
}

// Function to move the last created circle with the mouse
export function moveCircle(e) {
  if (!activeCircle) return;

  const boxRect = document.querySelector('.box').getBoundingClientRect();
  const newCoordinates = calculateNewCoordinates(e.clientX, e.clientY, boxRect);

  setCirclePosition(activeCircle, newCoordinates.x + CIRCLE_RADIUS, newCoordinates.y + CIRCLE_RADIUS);
}

// Function to calculate new coordinates for the circle
function calculateNewCoordinates(mouseX, mouseY, boxRect) {
  let newX = mouseX - CIRCLE_RADIUS;
  let newY = mouseY - CIRCLE_RADIUS;

  if (isInsideBox(activeCircle, boxRect)) {
    activeCircle.style.background = 'var(--purple)';
    newX = clamp(newX, boxRect.left + 1, boxRect.right - CIRCLE_SIZE - 1);
    newY = clamp(newY, boxRect.top + 1, boxRect.bottom - CIRCLE_SIZE - 1);
  }

  return { x: newX, y: newY };
}

// Helper function to clamp a value between a minimum and maximum
function clamp(value, min, max) {
  return Math.max(min, Math.min(value, max));
}

// Function to stop dragging the circle
export function stopDragging() {
  activeCircle = null;
  isDragging = false;
}

// Function to create the box in the center of the page
export function setBox() {
  const box = document.createElement('div');
  box.className = 'box';
  box.style.position = 'absolute';
  box.style.left = '50%';
  box.style.top = '50%';
  box.style.transform = 'translate(-50%, -50%)';
  document.body.appendChild(box);
}

// Helper function to check if the circle is inside the box
function isInsideBox(circle, boxRect) {
  const circleRect = circle.getBoundingClientRect();
  return (
    circleRect.left >= boxRect.left + 1 &&
    circleRect.right <= boxRect.right - 1 &&
    circleRect.top >= boxRect.top + 1 &&
    circleRect.bottom <= boxRect.bottom - 1
  );
}

// Event listeners for mouse events
document.addEventListener('click', createCircle);
document.addEventListener('mousemove', moveCircle);
document.addEventListener('mouseup', stopDragging);
