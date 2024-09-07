let lastCircle;

function createCircle() {
    document.addEventListener('click', (event) => {
        const circle = document.createElement('div');
        circle.classList.add('circle');
        circle.style.backgroundColor = 'white'; // Initially set the background to white
        circle.style.left = `${event.pageX - 25}px`;
        circle.style.top = `${event.pageY - 25}px`;
        document.body.appendChild(circle);
        lastCircle = circle; // Keep track of the last created circle
    });
}

function moveCircle() {
    document.addEventListener('mousemove', (event) => {
        if (!lastCircle) return;

        const x = event.pageX - 25;
        const y = event.pageY - 25;

        lastCircle.style.left = `${x}px`;
        lastCircle.style.top = `${y}px`;

        // Check if circle is inside the box
        const box = document.querySelector('.box');
        const boxRect = box.getBoundingClientRect();
        const circleRect = lastCircle.getBoundingClientRect();

        const circleInsideBox =
            circleRect.left > boxRect.left &&
            circleRect.right < boxRect.right &&
            circleRect.top > boxRect.top &&
            circleRect.bottom < boxRect.bottom;

        if (circleInsideBox) {
            lastCircle.style.backgroundColor = 'var(--purple)';
        } else {
            lastCircle.style.backgroundColor = 'white';
        }
    });
}

function setBox() {
    const box = document.createElement('div');
    box.classList.add('box');
    box.style.position = 'absolute';
    box.style.left = '50%';
    box.style.top = '50%';
    box.style.transform = 'translate(-50%, -50%)';
    document.body.appendChild(box);
}

export { setBox, createCircle, moveCircle };

