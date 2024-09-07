function pick() {
    const body = document.body;
    const hslDiv = document.createElement('div');
    const hueDiv = document.createElement('div');
    const luminosityDiv = document.createElement('div');
    
    hslDiv.className = 'hsl';
    hueDiv.className = 'hue text';
    luminosityDiv.className = 'luminosity text';
    
    body.appendChild(hslDiv);
    body.appendChild(hueDiv);
    body.appendChild(luminosityDiv);
    
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', '100%');
    svg.setAttribute('height', '100%');
    svg.style.position = 'fixed';
    svg.style.top = '0';
    svg.style.left = '0';
    svg.style.pointerEvents = 'none';
    
    const axisX = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    const axisY = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    
    axisX.id = 'axisX';
    axisY.id = 'axisY';
    
    axisX.setAttribute('stroke', 'black');
    axisY.setAttribute('stroke', 'black');
    
    svg.appendChild(axisX);
    svg.appendChild(axisY);
    body.appendChild(svg);
    
    document.addEventListener('mousemove', (event) => {
      const x = event.clientX;
      const y = event.clientY;
      
      const hue = Math.round((x / window.innerWidth) * 360);
      const luminosity = Math.round((y / window.innerHeight) * 100);
      const saturation = 50;
      
      const hslColor = `hsl(${hue}, ${saturation}%, ${luminosity}%)`;
      
      body.style.background = hslColor;
      hslDiv.textContent = hslColor;
      hueDiv.textContent = `hue: ${hue}`;
      luminosityDiv.textContent = `luminosity: ${luminosity}`;
      
      axisX.setAttribute('x1', x);
      axisX.setAttribute('x2', x);
      axisX.setAttribute('y1', 0);
      axisX.setAttribute('y2', '100%');
      
      axisY.setAttribute('x1', 0);
      axisY.setAttribute('x2', '100%');
      axisY.setAttribute('y1', y);
      axisY.setAttribute('y2', y);
    });
    
    document.addEventListener('click', () => {
      const hslValue = hslDiv.textContent;
      navigator.clipboard.writeText(hslValue).then(() => {
        console.log('HSL value copied to clipboard');
      }).catch(err => {
        console.error('Failed to copy: ', err);
      });
    });
}

  export {pick}