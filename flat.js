function flat(arr, depth = 1) {
    let result = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i]) && depth > 0) {
            result = result.concat(flat(arr[i], depth - 1));
        } else {
            result.push(arr[i]);
        }
    }
    
    return result;
}

console.log(flat([1, [2, 3]]));
console.log(flat([1, [2, [3, [4]]]], 2));
console.log(flat([1, [2, [3, [4]]]], Infinity))