function indexOf(arr, char) {
    for( let i = 0; i <= arr.length;i++) {
        if (arr[i] === char) {
            return i;
        }
    }
    return -1;
}

function lastIndexOf(arr, char) {
    for( let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === char) {
            return i;
        }
    }
    return -1;
}

function includes(arr, char) {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === char) {
            return true;
        }
    }
    return false;
}