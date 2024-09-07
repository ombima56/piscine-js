let lastCircle = null; // To track the last created circle
let box = null; // To store the box element

// Function to create a circle on click
export function createCircle() {
    document.addEventListener('click', (event) => {
        // Create a div for the circle
        const circle = document.createElement('div');
        circle.classList.add('circle');
        circle.style.backgroundColor = 'white'; // Set the background to white
        circle.style.left = `${event.clientX - 25}px`; // Adjust for circle center
        circle.style.top = `${event.clientY - 25}px`;
        document.body.appendChild(circle);
        lastCircle = circle; // Update last created circle
    });
}

// Function to move the last created circle along with the mouse
export function moveCircle() {
    document.addEventListener('mousemove', (event) => {
        if (lastCircle) {
            lastCircle.style.left = `${event.clientX - 25}px`; // Adjust for circle center
            lastCircle.style.top = `${event.clientY - 25}px`;
            checkIfInsideBox(lastCircle);
        }
    });
}

// Function to create the box in the center of the page
export function setBox() {
    // Create a box
    box = document.createElement('div');
    box.classList.add('box');
    box.style.position = 'absolute';
    box.style.left = `${(window.innerWidth - box.offsetWidth) / 2}px`;
    box.style.top = `${(window.innerHeight - box.offsetHeight) / 2}px`;

    // Center the box in the page
    const boxWidth = window.innerWidth * 0.25; // 25vw
    const boxHeight = window.innerHeight * 0.25; // 25vh
    box.style.width = `${boxWidth}px`;
    box.style.height = `${boxHeight}px`;
    box.style.left = `${(window.innerWidth - boxWidth) / 2}px`;
    box.style.top = `${(window.innerHeight - boxHeight) / 2}px`;

    document.body.appendChild(box);
}

// Function to check if a circle is inside the box
function checkIfInsideBox(circle) {
    const circleRect = circle.getBoundingClientRect();
    const boxRect = box.getBoundingClientRect();

    // Check if the circle is entirely inside the box
    const isInside = (
        circleRect.left >= boxRect.left &&
        circleRect.right <= boxRect.right &&
        circleRect.top >= boxRect.top &&
        circleRect.bottom <= boxRect.bottom
    );

    // If the circle is inside, change its background to purple and trap it
    if (isInside) {
        circle.style.backgroundColor = 'var(--purple)';
        circle.style.pointerEvents = 'none'; // Disable interaction to prevent escape
    }
}
