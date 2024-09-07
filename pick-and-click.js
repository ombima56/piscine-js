export function pick() {
    const body = document.body;
    const hslDisplay = document.createElement('div');
    const hueDisplay = document.createElement('div');
    const luminosityDisplay = document.createElement('div');

    hslDisplay.className = 'hsl';
    hueDisplay.className = 'hue';
    luminosityDisplay.className = 'luminosity';

    document.body.appendChild(hslDisplay);
    document.body.appendChild(hueDisplay);
    document.body.appendChild(luminosityDisplay);

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const lineX = document.createElementNS("http://www.w3.org/2000/svg", "line");
    const lineY = document.createElementNS("http://www.w3.org/2000/svg", "line");

    lineX.id = 'axisX';
    lineY.id = 'axisY';
    lineX.setAttribute('stroke', 'grey');
    lineY.setAttribute('stroke', 'grey');
    svg.appendChild(lineX);
    svg.appendChild(lineY);
    document.body.appendChild(svg);

    document.addEventListener('mousemove', (e) => {
        const hue = Math.round((e.clientX / window.innerWidth) * 360);
        const luminosity = Math.round((1 - (e.clientY / window.innerHeight)) * 100);
        const hslValue = `hsl(${hue}, 100%, ${luminosity}%)`;

        body.style.backgroundColor = hslValue;
        hslDisplay.textContent = hslValue;
        hueDisplay.textContent = `Hue: ${hue}`;
        luminosityDisplay.textContent = `Luminosity: ${luminosity}`;

        // Update SVG lines
        lineX.setAttribute('x1', e.clientX);
        lineX.setAttribute('x2', e.clientX);
        lineX.setAttribute('y1', 0);
        lineX.setAttribute('y2', window.innerHeight);
        
        lineY.setAttribute('y1', e.clientY);
        lineY.setAttribute('y2', e.clientY);
        lineY.setAttribute('x1', 0);
        lineY.setAttribute('x2', window.innerWidth);
    });

    document.addEventListener('click', () => {
        const hslValue = hslDisplay.textContent;
        navigator.clipboard.writeText(hslValue).then(() => {
            console.log('HSL value copied to clipboard:', hslValue);
        }).catch(err => {
            console.error('Could not copy text: ', err);
        });
    });
}

