const filterKeys = (obj, func) => {
    const result = {};

    for ( const key of Object.keys(obj)) {
        if (func(key)) {
            result[key] = obj[key];
        }
    }
    return result;
}

const mapKeys = (obj, func) => {
    const result = {};
    for ( const key of Object.keys(obj)) {
        result[func(key)] = obj[key];
    }
    return result;
}

const reduceKeys = (obj, func, initialValue = 0) => {
    let accumulator = initialValue;

    for (const key of Object.keys(obj)) {
        if (accumulator == '') {
            accumulator = key;
        } else {
            accumulator = func(accumulator, key);
        }
    }
    return accumulator;
}

const nutrients = { carbohydrates: 12, protein: 20, fat: 5 }
console.log(filterKeys(nutrients, (key) => /protein/.test(key)))
console.log(mapKeys(nutrients, (k) => `-${k}`))
console.log(reduceKeys(nutrients, (acc, cr) =>acc.concat(', ', cr)))