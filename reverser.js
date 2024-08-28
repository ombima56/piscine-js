function reverse(arr) {
    if (typeof input !== 'string' && !Array.isArray(input)) {
        throw new TypeError('Input must be an array or a string.'); // Handle unexpected input types
    }

    const arr = typeof input === 'string' ? input.split('') : input;

    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
    return typeof input === 'string' ? arr.join('') : arr;
}
