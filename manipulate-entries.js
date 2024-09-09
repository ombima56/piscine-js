const filterEntries = (obj, func) => {
    const result = {};
    for (const [key, value] of Object.entries(obj)) {
        if (func([key, value])) {
            result[key] = value
        }
    }
    return result
}


const mapEntries = (obj, func) => {
    const result = {};
    for (const [key, value] of Object.entries(obj)) {
        const [newKey, newValue] = func([key, value]);
        result[newKey] = newValue;
    }
    return result;
}

const reduceEntries = (obj, func, initialValue) => {
    let accumulator = initialValue;

    for (const [key,value] of Object.entries(obj)) {
        accumulator = func(accumulator, [key,value]);
    }
    return accumulator;
}

// const nutritionDB = {
//     tomato:  { calories: 18,  protein: 0.9,   carbs: 3.9,   sugar: 2.6, fiber: 1.2, fat: 0.2   },
//     vinegar: { calories: 20,  protein: 0.04,  carbs: 0.6,   sugar: 0.4, fiber: 0,   fat: 0     },
//     oil:     { calories: 48,  protein: 0,     carbs: 0,     sugar: 123, fiber: 0,   fat: 151   },
//     onion:   { calories: 0,   protein: 1,     carbs: 9,     sugar: 0,   fiber: 0,   fat: 0     },
//     garlic:  { calories: 149, protein: 6.4,   carbs: 33,    sugar: 1,   fiber: 2.1, fat: 0.5   },
//     paprika: { calories: 282, protein: 14.14, carbs: 53.99, sugar: 1,   fiber: 0,   fat: 12.89 },
//     sugar:   { calories: 387, protein: 0,     carbs: 100,   sugar: 100, fiber: 0,   fat: 0     },
//     orange:  { calories: 49,  protein: 0.9,   carbs: 13,    sugar: 9,   fiber: 0.2, fat: 0.1   },
// }
  
const totalCalories = (cart) => {
    return reduceEntries(cart, (acc, [key, grams]) => {
        const caloriesPer100g = (nutritionDB[key] && nutritionDB[key].calories) || 0;
        return acc + (caloriesPer100g * (grams / 100));
    }, 0);
}

const lowCarbs = (cart) => {
    return filterEntries(cart, ([key, grams]) => {
        const carbDBPer100g = (nutritionDB[key] && nutritionDB[key].carbs) || 0;
        return (carbDBPer100g * (grams / 100)) < 50;
    });
}

const cartTotal = (cart) => {
    return mapEntries(cart, ([key, grams]) => {
        const nutrition = nutritionDB[key];

        const totalNutrition = mapEntries(nutrition, ([nutrient, value]) => {
            return [nutrient, +(value * (grams / 100)).toFixed(2)]
        });
        return [key, totalNutrition];
    });
}

const groceriesCart = { orange: 500, oil: 20, sugar: 480 };
console.log('Total calories:');
console.log(totalCalories(groceriesCart));
console.log('Items with low carbs:');
console.log(lowCarbs(groceriesCart));
console.log('Total cart nutritional facts:');
console.log(cartTotal(groceriesCart));