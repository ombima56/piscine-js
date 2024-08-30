function pyramid(str, n) {
    let pattern = '';
    for(let i = 1; i <= n; i++) {
        let line = '';
        for (let j = 0; j < n - i; j++) {
            line +=' ';
        }
        for (let k = 0; k < 2 * i - 1; k++) {
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