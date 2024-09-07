import { styles } from './pimp-my-style.data.js';

let currentIndex = -1;
let isRemoving = false;

const pimp = () => {
    const button = document.querySelector('.button');

    if (isRemoving) {
        // Remove classes in LIFo order
        if (currentIndex >= 0) {
            button.classList.remove(styles[currentIndex]);
            currentIndex--;
        }

        // If we've removed all added classes, start adding again
        if (currentIndex < 0) {
            isRemoving = false;
            button.classList.remove('unpimp')
        }
    } else {
        // Add classes in order
        currentIndex++;
        if (currentIndex < styles.length) {
            button.classList.add(styles[currentIndex]);
        }

        // If we've added all classes, start removing
        if (currentIndex === styles.length - 1) {
            isRemoving = true;
            button.classList.add('unpimp')
        }
    }
}

export{pimp}