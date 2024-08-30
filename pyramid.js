function pyramid(str, n) {
    let pattern = '';
    const maxWidth = n * 2 - 1;

    for (let i = 1; i <= n; i++) {
        let line = '';
        const currentWidth = 2 * i - 1; 
        const padding = Math.floor((maxWidth - currentWidth) / 2);

        for (let j = 0; j < padding; j++) {
            line += ' ';
        }

        for (let k = 0; k < currentWidth; k++) {
            line += str;
        }

        pattern += line;

        if (i < n) {
            pattern += '\n';
        }
    }
    return pattern;
}

// console.log(pyramid('*', 5));