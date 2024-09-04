const fold = (arr, func, acc) => {
    let intialValue = acc;
    if (arr.length === 0) return 0;
    for (let i = 0; i < arr.length; i++) {
        intialValue = func(intialValue, arr[i]);
    }
    return intialValue;
}

const foldRight = (arr, func, acc) => {
    let intialValue = acc;
    if (arr.length === 0) return 0;
    for (let j = arr.length-1; j >= 0; j--) {
        intialValue = func(intialValue, arr[j]);
    }
    return intialValue;
}

const reduce = (arr, func) => {
    if (arr.length == 0) return 0;
    let acc = arr[0];
    for (let i = 1; i < arr.length; i++) {
        acc = func(acc, arr[i]);
    }
    return acc;
}

const reduceRight = (arr, func) => {
    if (arr.length == 0) return 0;
    let acc = arr[arr.length-1];
    for (let i = arr.length-2;i >= 0; i--) {
        acc = func(acc, arr[i]);
    }
    return acc;
}

const adder = (a, b) => a + b
const result = reduceRight([1, 2, 3], adder)
// const result2 = foldRight([1, 2, 3], adder, 2)
// const array = [15, 16, 17, 18, 19];
// const result = fold(array, adder, 10)
// console.log(result)
console.log(result);