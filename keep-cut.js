function cutFirst(str) {
    let result = "";
    for (let i = 2; i < str.length; i++) {
        result += str[i];
    }
    return result;
}

function cutLast(str) {
    let result = "";
    for (let i = 0; i < str.length-2; i++) {
        result += str[i];
    }
    return result;
}

function cutFirstLast(str) {
    let result = "";
    let length = str.length;

    if (length <= 4) {
        return "";
    }

    for (let i = 2; i < length - 2; i++) {
        result += str[i]; 
    }

    return result;
}

function keepFirst(str) {
    let result = '';
    for (let i = 0; i < 2 && i < str.length; i++) {
        result += str[i];
    }
    return result;
}

function keepLast(str) {
    let result = '';
    for (let i = str.length-2; i < str.length; i++) {
        result += str[i];
    }
    return result;
}

function keepFirstLast(str){
    let result = '';
    let length = str.length;

    for (let i = 0; i < length; i++) {
        if (i < 2) {
            result += str[i];
        }
        if (i >= length - 2 && length > 2) {
            result += str[i];
        }
    }

    return result;
}