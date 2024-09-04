function adder(arr, additionalValue = 0) {
    return arr.reduce((sum, n) => sum + n, 0) + additionalValue;
}

const numbers1 = [1, 2, 3, 4, 5];

function sumOrMul(arr, initialValue = 0) {
    if (arr.length === 0) return initialValue; // Handle empty array case

    return arr.reduce((acc, num) => {
        if (num % 2 === 0) {
            return acc * num; // If the number is even, multiply
        } else {
            return acc + num; // If the number is odd, add
        }
    }, initialValue);
}

const numbers2 = [1, 2, 3, 5, 8];

function funcExec(funcArray, initialValue) {
    return funcArray.reduce((acc, func) => func(acc), initialValue);
}

const functions = [
    (x) => x + 1,
    (x) => x * 2,
    (x) => x - 3,
];

console.log(adder(numbers1));
console.log(sumOrMul(numbers2, 5));
console.log(funcExec(functions, 5));

