const map = (arr, func) => {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(func(arr[i], i, arr));
    }
    return result;
}

const flatMap = (arr, func) => {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        const mapped = func(arr[i], i, arr); // Apply function to the element

        if (Array.isArray(mapped)) {
            // If the result is an array, concatenate its elements to result
            result.push(...mapped);
        } else {
            // Otherwise, just push the result
            result.push(mapped);
        }
    }
    return result;
}

// const numbers = [1, 4, 9];
// console.log(numbers);
// const root = (num) => Math.sqrt(num);
// console.log(map(numbers, root));

// const arr = [1, 2, 3];
// const func = x => [x, x * 2];

// console.log(flatMap(arr, func));
