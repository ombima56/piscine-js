function forEach(array, callback) {
    // Check if the first argument is an array and the second is a function
    if (!Array.isArray(array)) {
        return undefined;
    }
    if (typeof callback !== 'function') {
        return undefined;
    }

    // Iterate over the array
    for (let i = 0; i < array.length; i++) {
        // Call the callback function with the current element, index, and the array
        callback(array[i], i, array);
    }
}

// const mult = num => {
//     console.log(num * 2);
// }

// const arr = [1,2,3,4,5,]
// forEach(arr, mult)