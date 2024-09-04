function adder(arr, num) {
    return arr.reduce((sum, n) => sum + n, 0) + num;
}

const numbers1 = [1, 2, 3, 4, 5];

function sumOrMul(arr, initialVAlue) {
    return arr.reduce((acc, num) => {
        if (num % 2 === 0) {
            return acc * num; // If the numbers are multiple
        } else {
            return acc + num; // If the number are odd add
        }
    }, initialVAlue);
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

