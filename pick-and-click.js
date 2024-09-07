export function pick() {
    const body = document.body;
    
    // Create and append display elements
    const hslDisplay = createDisplayElement('hsl');
    const hueDisplay = createDisplayElement('hue');
    const luminosityDisplay = createDisplayElement('luminosity');
    
    const svg = createSVGWithLines(['axisX', 'axisY']);
    document.body.append(svg);

    document.addEventListener('mousemove', (e) => handleMouseMove(e, body, hslDisplay, hueDisplay, luminosityDisplay));
    document.addEventListener('click', () => copyToClipboard(hslDisplay.textContent));
}

function createDisplayElement(className) {
    const element = document.createElement('div');
    element.className = className;
    document.body.appendChild(element);
    return element;
}

function createSVGWithLines(lineIds) {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    
    lineIds.forEach(id => {
        const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
        line.id = id;
        line.setAttribute('stroke', 'grey');
        svg.appendChild(line);
    });
    
    return svg;
}

function handleMouseMove(e, body, hslDisplay, hueDisplay, luminosityDisplay) {
    const hue = Math.round((e.clientX / window.innerWidth) * 360);
    const luminosity = Math.round((1 - (e.clientY / window.innerHeight)) * 100);
    const hslValue = `hsl(${hue}, 100%, ${luminosity}%)`;
    
    body.style.backgroundColor = hslValue;
    hslDisplay.textContent = hslValue;
    hueDisplay.textContent = `Hue: ${hue}`;
    luminosityDisplay.textContent = `Luminosity: ${luminosity}`;
    
    updateSVGLines(e, ['axisX', 'axisY']);
}

function updateSVGLines(e, lineIds) {
    const [lineX, lineY] = lineIds.map(id => document.getElementById(id));
    
    lineX.setAttribute('x1', e.clientX);
    lineX.setAttribute('x2', e.clientX);
    lineX.setAttribute('y1', 0);
    lineX.setAttribute('y2', window.innerHeight);
    
    lineY.setAttribute('y1', e.clientY);
    lineY.setAttribute('y2', e.clientY);
    lineY.setAttribute('x1', 0);
    lineY.setAttribute('x2', window.innerWidth);
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
        .then(() => console.log('HSL value copied to clipboard:', text))
        .catch(err => console.error('Could not copy text: ', err));
}

