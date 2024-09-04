const every = (arr, func) => {
    for (let i = 0; i < arr.length; i++) {
        if (!func(arr[i])) {
            return false;
        }
    }
    return true;
}

const some = (arr, func) => {
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            return true;
        }
    }
    return false;
}

const none = (arr, func) => {
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            return false;
        }
    }
    return true;
}

const isEven = num => num % 2 === 0;
console.log(every([2, 4, 6, 8], isEven)); 
console.log(some([1, 3, 5, 8], isEven)); 
console.log(none([1, 3, 5, 7], isEven));