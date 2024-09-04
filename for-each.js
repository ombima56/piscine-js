const forEach = (arr, func) => {
    const result = [];
    for ( let i = 0; i < arr.length; i++) {
        result.push(func(arr[i]));
    }
    return result;
}

// const mult = num => {
//     return num * 2;
// }

// const arr = [1,2,3,4,5,]
// console.log(forEach(arr, mult))