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

const reduceKeys = (obj, func, initialValue) => {
    const keys = Object.keys(obj);
    
    // If initialValue is not provided, use the first key as the initial value
    let accumulator = initialValue !== undefined ? initialValue : keys[0];
    let startIndex = initialValue !== undefined ? 0 : 1;
    
    for (let i = startIndex; i < keys.length; i++) {
      accumulator = func(accumulator, keys[i], i);
    }
    
    return accumulator;
}

const nutrients = { carbohydrates: 12, protein: 20, fat: 5 }
console.log(filterKeys(nutrients, (key) => /protein/.test(key)))
console.log(mapKeys(nutrients, (k) => `-${k}`))
console.log(reduceKeys(nutrients, (acc, cr) =>acc.concat(', ', cr)))