function slice(input, start = 0, end = input.length) {
    if (start < 0) {
        start = input.length + start;
    }

    if (end < 0) {
        end = input.length + end;
    }

    if (start < 0) {
        start = 0;
    }

    if (end > input.length) {
        end = input.length;
    }

    if (start >= end || start >= input.length) {
        return Array.isArray(input) ? [] : '';
    }

    let result = Array.isArray(input) ? [] : '';

    for (let i = start; i < end; i++) {
        if (Array.isArray(input)) {
            result.push(input[i]);
        } else {
            result += input[i];
        }
    }

    return result;
}