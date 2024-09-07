let lastCircle = null;
let box = null;
let isTrapped = false;

export function createCircle(event) {
  const circle = document.createElement('div');
  circle.className = 'circle';
  circle.style.left = `${event.clientX - 25}px`;
  circle.style.top = `${event.clientY - 25}px`;
  document.body.appendChild(circle);
  lastCircle = circle;
  isTrapped = false;
}

export function moveCircle(event) {
  if (lastCircle) {
    const rect = box.getBoundingClientRect();
    let n = event.clientX - 25;
    let m = event.clientY - 25;

    if (isInsideBox(n, m, rect)) {
      isTrapped = true;
      n = Math.max(rect.left + 1, Math.min(n, rect.right - 51));
      m = Math.max(rect.top + 1, Math.min(m, rect.bottom - 51));
    } else if (isTrapped) {
      n = Math.max(rect.left + 1, Math.min(n, rect.right - 51));
      m = Math.max(rect.top + 1, Math.min(m, rect.bottom - 51));
    }

    if (isTrapped) {
      lastCircle.style.background = 'var(--purple)';
    }

    lastCircle.style.left = `${n}px`;
    lastCircle.style.top = `${m}px`;
  }
}

export function setBox() {
  box = document.createElement('div');
  box.className = 'box';
  box.style.left = '50%';
  box.style.top = '50%';
  box.style.transform = 'translate(-50%, -50%)';
  document.body.appendChild(box);
}

function isInsideBox(n, m, boxRect) {
  return (
    n >= boxRect.left + 25 &&
    n <= boxRect.right - 25 &&
    m >= boxRect.top + 25 &&
    m <= boxRect.bottom - 25
  );
}

document.addEventListener('click', createCircle);
document.addEventListener('mousemove', moveCircle);
