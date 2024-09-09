const filterValues = (obj, func) => {

    const result = {};
    for ( const [key, value] of Object.entries(obj)) {
        if (func(value)) {

            result[key] = value;
        }
    }
    return result;
}

const mapValues = (obj, func) => {
    const result = {};

    for ( const [key, value] of Object.entries(obj)) {
        if (func(value)) {
            result[key] = func(value);
        }
    }
    return result;
}

const reduceValues = (obj, func, initialValue = 0) => {
    let acc = initialValue;
    for (const  value of Object.values(obj)) {
        acc = func(acc, value);  
    }
    return acc;
}

const nutrients = { carbohydrates: 12, protein: 20, fat: 5 };
console.log(filterValues(nutrients, (nutrient) => nutrient <= 12));
console.log(mapValues(nutrients, (v) => v + 1));
console.log(reduceValues(nutrients, (acc, cr) => acc + cr, 0));