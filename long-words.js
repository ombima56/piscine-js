const longWords = (arr) => {
    return arr.every(str => str.length >= 5)
}

const testCase1 = ['apple', 'banana', 'cherry', 'mango'];

const oneLongWord = (arr) => {
    return arr.some(str => str.length >= 10)
}

const testCase2 = ['grapefruit', 'kiwi', 'watermelon'];

const noLongWords = arr => {
    return arr.every(str => str.length < 7)
}

const testCase3 = ['apple', 'banana', 'grape'];

console.log(longWords(testCase1));
console.log(oneLongWord(testCase2));
console.log(noLongWords(testCase3));
