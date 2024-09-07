const circleSize = 50;
const circleRadius = circleSize / 2;
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
  circle.style.position = 'absolute'; // Ensure positioning is absolute
  setCirclePosition(circle, x, y);
  circle.style.background = 'white'; // Initial background color
  return circle;
}

// Helper function to set the circle's position
function setCirclePosition(circle, x, y) {
  circle.style.left = `${x - circleRadius}px`;
  circle.style.top = `${y - circleRadius}px`;
}

// Function to move the last created circle with the mouse
export function moveCircle(e) {
  if (!activeCircle) return;

  const boxRect = document.querySelector('.box').getBoundingClientRect();
  const newCoordinates = calculateNewCoordinates(e.clientX, e.clientY, boxRect);

  setCirclePosition(activeCircle, newCoordinates.x, newCoordinates.y);
}

// Function to calculate new coordinates for the circle
function calculateNewCoordinates(mouseX, mouseY, boxRect) {
  let newX = mouseX - circleRadius;
  let newY = mouseY - circleRadius;

  if (isInsideBox(newX, newY, boxRect)) {
    activeCircle.style.background = 'var(--purple)';
    newX = clamp(newX, boxRect.left + 1, boxRect.right - circleSize - 1);
    newY = clamp(newY, boxRect.top + 1, boxRect.bottom - circleSize - 1);
  } else {
    activeCircle.style.background = 'white'; // Reset to default color if outside
  }

  return { x: newX, y: newY };
}

// Function to clamp values within a range
function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
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
function isInsideBox(circleX, circleY, boxRect) {
  return (
    circleX >= boxRect.left + circleRadius &&
    circleX <= boxRect.right - circleRadius &&
    circleY >= boxRect.top + circleRadius &&
    circleY <= boxRect.bottom - circleRadius
  );
}

// Event listeners for mouse events
document.addEventListener('click', createCircle);
document.addEventListener('mousemove', moveCircle);
document.addEventListener('mouseup', stopDragging);
