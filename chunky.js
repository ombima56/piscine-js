function chunk(arr, n) {
    if (n <= 0) return [];
    let result = [];
    for (let i = 0; i < arr.length; i += n) {
        let end = i + n;
        if (end > arr.length) {
            end = arr.length;
        }
        result.push(arr.slice(i, end));
    }
    return result;
}
