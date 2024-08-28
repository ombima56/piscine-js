function reverse(arr) {
    if (!Array.isArray(arr)) {
        throw new Error("Input must be an array");
    }

    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
    return arr;
}
