function multiply(a, b) {
    let mult = 0;
    let isNegative = false;

    // Handle negative cases
    if (b < 0) {
        b = -b;
        isNegative = true;
    }

    for (let i = 0; i < b; i++) {
        mult += a;
    }
    return isNegative ? -mult : mult;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }

    let quotient = 0;
    let isNegative = false;

    // Handle negative numbers
    if (a < 0 && b > 0) {
        a = -a;
        isNegative = true;
    } else if (a > 0 && b < 0) {
        b = -b;
        isNegative = true;
    } else if (a < 0 && b < 0) {
        a = -a;
        b = -b;
    }

    while (a >= b) {
        a -= b;
        quotient++;
    }
    return isNegative ? -quotient: quotient;
}

function modulo(a,b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }

    let isNegative = false;

    if (a < 0) {
        a = -a;
        isNegative = true;
    }

    if (b < 0) {
        b = -b;
    }

    while (a >= b) {
        a -= b;
    }

    return isNegative ? -a : a;
}