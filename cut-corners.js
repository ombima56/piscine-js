function round(num) {
    const intPart = num < 0 ? -(-num | 0) : (num | 0);
    const decPart = num - intPart; // Get the decimal part

    // If decimal part is 0.5 or more, round up
    if (decPart >= 0.5) {
        return intPart + 1;
    } else {
        return intPart;
    }
}

function ceil(num) {
    const intPart = num | 0;
    if (num === intPart) {
        return intPart;
    }

    // For positive numbers or non-integers, return intPart + 1
    return num > 0 ? intPart + 1 : intPart;
}

function floor(num) {
    const intPart = num | 0; // Get the integer part

    // If num is already an integer, return it
    if (num === intPart) {
        return intPart; 
    }

    // For positive numbers, return the integer part
    return num > 0 ? intPart : intPart - 1;
}

function trunc(num) {
    return num < 0 ? -(-num | 0) : (num | 0);
}
