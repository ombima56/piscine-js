export function pick() {
    const body = document.body;
    const hslDisplay = document.createElement('div');
    const hueDisplay = document.createElement('div');
    const luminosityDisplay = document.createElement('div');
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const axisX = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    const axisY = document.createElementNS('http://www.w3.org/2000/svg', 'line');

    hslDisplay.className = 'hsl text';
    hueDisplay.className = 'hue text';
    luminosityDisplay.className = 'luminosity text';

    body.appendChild(hslDisplay);
    body.appendChild(hueDisplay);
    body.appendChild(luminosityDisplay);
    body.appendChild(svg);

    svg.appendChild(axisX);
    svg.appendChild(axisY);

    // Set initial attributes for SVG lines
    axisX.setAttribute('id', 'axisX');
    axisY.setAttribute('id', 'axisY');
    axisX.setAttribute('stroke', 'grey');
    axisY.setAttribute('stroke', 'grey');

    // Mousemove event
    document.addEventListener('mousemove', (e) => {
        const hue = Math.round((e.clientX / window.innerWidth) * 360);
        const luminosity = Math.round((1 - e.clientY / window.innerHeight) * 100);

        // Update body background color
        body.style.background = `hsl(${hue}, 100%, ${luminosity}%)`;

        // Update displays
        hslDisplay.textContent = `hsl(${hue}, 100%, ${luminosity}%)`;
        hueDisplay.textContent = `Hue: ${hue}`;
        luminosityDisplay.textContent = `Luminosity: ${luminosity}`;

        // Update SVG lines
        axisX.setAttribute('x1', e.clientX);
        axisX.setAttribute('y1', 0);
        axisX.setAttribute('x2', e.clientX);
        axisX.setAttribute('y2', window.innerHeight);
        
        axisY.setAttribute('x1', 0);
        axisY.setAttribute('y1', e.clientY);
        axisY.setAttribute('x2', window.innerWidth);
        axisY.setAttribute('y2', e.clientY);
    });

    // Click event
    document.addEventListener('click', async () => {
        const hslValue = hslDisplay.textContent;
        if (hslValue) {
            try {
                await navigator.clipboard.writeText(hslValue);
                alert('HSL value copied to clipboard!');
            } catch (err) {
                console.error('Failed to copy: ', err);
            }
        }
    });
}
