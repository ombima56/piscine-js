function split(str, separator) {
    if (str.length === 0) return [''];
    if (separator === undefined) return [str];
    if (separator === '') {
        return Array.from(str);
    }

    const result = [];
    let currentSubStr = '';
    const sepLength = separator.length;
    let separatorFound = false;

    for (let i = 0; i < str.length; i++) {
        if (str.slice(i, i + sepLength) === separator) {
            result.push(currentSubStr);
            currentSubStr = '';
            i += sepLength - 1;
            separatorFound = true;
        } else {
            currentSubStr += str[i];
        }
    }

    result.push(currentSubStr);

    return separatorFound ? result : [str];
}

function join(arr, separator) {
    if (arr.length === 0) return '';

    let result = '';
    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
        if (i < arr.length - 1) {
            result += separator;
        }
    }
    return result;
}