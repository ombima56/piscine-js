const filter = (arr, func) => {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i], i, arr)) {
            result.push(arr[i]);
        }
    }
    return result;
}


const reject = (arr, func) => {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (!func(arr[i], i, arr)) {
            result.push(arr[i]);
        }
    }
    return result;
}

const partition = (arr, func) => {
    return [filter(arr, func), reject(arr, func)];
}

// const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

// const result = filter(words, (word) => word.length > 6);

// console.log(result);
// console.log(reject(words, (word) => word.length > 6));
// console.log(partition(words, (word) => word.length > 6));