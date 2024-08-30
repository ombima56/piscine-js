function pyramid(str, n) {
    let pattern = '';
    const maxWidth = n * 2 - 1;
    for (let i = 1; i <= n; i++) {
        let line = '';
        const currentWidth = i * 2 - 1;
        const padding = (maxWidth - currentWidth) / 2;
        
        for (let j = 0; j < padding; j++) {
            line += ' ';
        }
        
        // Add the string pattern
        for (let k = 0; k < currentWidth; k++) {
            line += str;
        }
        
        // Add the line to the pattern
        pattern += line;
        
        if (i < n) {
            pattern += '\n';
        }
    }
    return pattern;
}

console.log(pyramid('*', 5));