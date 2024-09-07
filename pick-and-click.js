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
    axisX.setAttributeNS(null, 'id', 'axisX');
    axisY.setAttributeNS(null, 'id', 'axisY');
    axisX.setAttributeNS(null, 'stroke', 'grey');
    axisY.setAttributeNS(null, 'stroke', 'grey');

    // Mousemove event
    const mousemoveHandler = (e) => {
        const hue = Math.round((e.clientX / window.innerWidth) * 360);
        const luminosity = Math.round((1 - e.clientY / window.innerHeight) * 100);

        // Update body background color
        body.style.background = `hsl(${hue}, 100%, ${luminosity}%)`;

        // Update displays
        hslDisplay.textContent = `hsl(${hue}, 100%, ${luminosity}%)`;
        hueDisplay.textContent = `Hue: ${hue}`;
        luminosityDisplay.textContent = `Luminosity: ${luminosity}`;

        // Update SVG lines
        axisX.setAttributeNS(null, 'x1', e.clientX);
        axisX.setAttributeNS(null, 'y1', 0);
        axisX.setAttributeNS(null, 'x2', e.clientX);
        axisX.setAttributeNS(null, 'y2', window.innerHeight);
        
        axisY.setAttributeNS(null, 'x1', 0);
        axisY.setAttributeNS(null, 'y1', e.clientY);
        axisY.setAttributeNS(null, 'x2', window.innerWidth);
        axisY.setAttributeNS(null, 'y2', e.clientY);
    };

    document.addEventListener('mousemove', mousemoveHandler);

    // Click event
    const clickHandler = async () => {
        const hslValue = hslDisplay.textContent;
        if (hslValue) {
            try {
                await navigator.clipboard.writeText(hslValue);
                alert('HSL value copied to clipboard!');
            } catch (err) {
                console.error('Failed to copy: ', err);
            }
        }
    };

    document.addEventListener('click', clickHandler);
}