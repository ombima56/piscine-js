function slice(str, start = 0, end = str.length) {
    if (start < 0) {
        start = str.length + start;
    }

    if (end < 0) {
        end = str.length + end;
    }

    // Handle special cases
    if (end === 0) {
        return null;
    }

    if (start < 0) {
        start = 0;
    }

    if (end > str.length) {
        end = str.length;
    }

    if (start >= end || start >= str.length) {
        return null;
    }

    let result = '';
    for (let i = start; i < end; i++) {
        result += str[i];
    }

    return result;
}