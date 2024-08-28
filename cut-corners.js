function getIntegerPart(num) {
    let sign = num >= 0 ? 1 : -1;
    num = Math.abs(num);
    let result = 0;
    let place = 1;
    
    while (place <= num) {
        place *= 10;
    }
    place /= 10;

    while (place >= 1) {
        while (result + place <= num) {
            result += place;
        }
        place /= 10;
    }

    return sign * result;
}

function round(num) {
    let intPart = getIntegerPart(num);
    let decPart = num - intPart;
    if (Math.abs(decPart) >= 0.5) {
        return intPart + (num >= 0 ? 1 : -1);
    }
    return intPart;
}

function ceil(num) {
    let intPart = getIntegerPart(num);
    return num > intPart ? intPart + 1 : intPart;
}

function floor(num) {
    let intPart = getIntegerPart(num);
    return num < intPart ? intPart - 1 : intPart;
}

function trunc(num) {
    return getIntegerPart(num);
}