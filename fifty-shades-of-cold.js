import { colors } from './fifty-shades-of-cold.data.js';

export function generateClasses() {
    const style = document.createElement('style');
    document.head.appendChild(style);

    // For each color in the colors array, generate a class
    colors.forEach(color => {
        const className = `.${color}`;
        style.innerHTML += `${className} { background: ${color}; }\n`;
    });
}

export function generateColdShades() {
    const container = document.body;

    // Filter the colors that contain cold-related terms
    const coldColors = colors.filter(color =>
        /(aqua|blue|turquoise|green|cyan|navy|purple)/i.test(color)
    );

    // For each cold in the color, create a div and add it to the page
    coldColors.forEach(color => {
        const div = document.createElement('div');
        div.className = color;
        div.textContent = color;
        container.appendChild(div);
    });
}

export function choseShade(selectedShade) {
    const allDivs = document.querySelectorAll('div');

    // Replace the class of all divs with the chosen shade
    allDivs.forEach(div => {
        div.className = selectedShade;
    });
}
