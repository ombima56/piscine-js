function getIntegerPart(num) {
    let result = 0;
    while (Math.abs(result) <= Math.abs(num)) {
        result += num > 0 ? 1 : -1;
    }
    return result - (num > 0 ? 1 : -1);
}

function round(num) {
    const intPart = getIntegerPart(num);
    const decPart = num - intPart;
    if (Math.abs(decPart) >= 0.5) {
        return intPart + (num >= 0 ? 1 : -1);
    } else {
        return intPart;
    }
}

function ceil(num) {
    const intPart = getIntegerPart(num);
    return num > intPart ? intPart + 1 : intPart;
}

function floor(num) {
    const intPart = getIntegerPart(num);
    return num < intPart ? intPart - 1 : intPart;
}

function trunc(num) {
    return getIntegerPart(num);
}