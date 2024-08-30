function triangle(str, n) {
    let pattern = '';
    for(let i = 1; i <= n;i++) {
        let line = '';
        for (let j = 0; j < i; j++) {
            line += str;
        }
        pattern += line;

        if (i < n) {
            pattern += '\n';
        }
    }
    return pattern;
}

// console.log(triangle('*', 5))