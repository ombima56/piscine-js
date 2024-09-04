const map = (arr, func) => {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(func(arr[i], i, arr));
    }
    return result;
}

// const numbers = [1, 4, 9];
// console.log(numbers);
// const root = (num) => Math.sqrt(num);
// console.log(map(numbers, root));