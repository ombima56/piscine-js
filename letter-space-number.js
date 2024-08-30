function letterSpaceNumber(str) {
    const regex = /[a-zA-Z]\b \d(?!\d|\w)/g;

    const match = str.match(regex);

    return match || [];

}

console.log(letterSpaceNumber('example 1, example 20'));