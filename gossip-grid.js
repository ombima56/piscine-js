import { gossips } from './gossip-grid.data.js'

export function grid() {
    const ranges = createRanges();
    document.body.appendChild(ranges);

    const shareForm = createShareForm();
    document.body.appendChild(shareForm);

    addGossips(gossips);
}

const createRanges = () => {
    const rangeConfig = [
        { id: 'width', min: 200, max: 800, style: 'width' },
        { id: 'fontSize', min: 20, max: 40, style: 'fontSize' },
        { id: 'background', min: 20, max: 75, style: 'background', customStyle: true }
    ];

    const rangesDivs = document.createElement('div');
    rangesDivs.className = 'ranges';

    rangeConfig.forEach(config => {
        const input = createRangeInput(config);
        rangesDivs.appendChild(input);
    });

    return rangesDivs;
}

const createRangeInput = ({ id, min, max, style, customStyle }) => {
    const input = document.createElement('input');
    input.className = 'range';
    input.id = id;
    input.type = 'range';
    input.min = min;
    input.max = max;

    input.addEventListener('input', () => {
        const gossips = document.querySelectorAll('.gossip');
        gossips.forEach(gossip => {
            if (customStyle) {
                gossip.style[style] = `hsl(280, 50%, ${input.value}%)`;
            } else {
                gossip.style[style] = `${input.value}px`;
            }
        });
    });

    return input;
}

const createShareForm = () => {
    const form = document.createElement('form');
    form.className = 'gossip';

    const textarea = document.createElement('textarea');
    textarea.setAttribute('placeholder', 'Got a gossip to share?');

    const button = document.createElement('button');
    button.textContent = 'Share gossip!';

    form.appendChild(textarea);
    form.appendChild(button);

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        if (textarea.value.trim()) {
            addGossip(textarea.value);
            textarea.value = '';
        }
    });

    return form;
}

const addGossip = (text) => {
    const gossip = document.createElement('div');
    gossip.className = 'gossip';
    gossip.textContent = text;
    document.body.insertBefore(gossip, document.querySelector('.gossip').nextSibling);
}

const addGossips = (gossips) => {
    gossips.forEach(gossip => {
        const gossipElement = document.createElement('div');
        gossipElement.className = 'gossip';
        gossipElement.textContent = gossip;
        document.body.appendChild(gossipElement);
    });
}