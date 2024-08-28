function round(num) {
    const intPart = num < 0 ? -(-num | 0) : (num | 0);
    const decPart = num - intPart;

    if (decPart >= 0.5) {
        return intPart + 1;
    } else {
        return intPart;
    }
}

function ceil(num) {
    // if the number is an already integer
    if (num === (num | 0)) {
        return num;
    }

    if (num > 0) {
        return (num | 0) + 1;
    }
    return num | 0;
}

function floor(num){
    if (num === (num | 0)) {
        return num;
    }

    if (num > 0) {
        return num | 0;
    }

    return (num | 0) - 1;
}

function trunc(num) {
    return (num > 0 ? num | 0 : (num | 0)+ (num < 0 ? 0 : 0));
}
