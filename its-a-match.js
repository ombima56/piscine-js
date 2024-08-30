// function normal(str){
//     const regex = /hi/;
//     const match = str.match(regex);
//     return match ? match[0]: null;
// }

// function begin(str){
//     const regex = /^(hi)/;
//     const match = str.match(regex);
//     return match ? match[0] : null;
// }

// function end(arr) {
//     const regex = /(hi)$/;
//     const match = arr.match(regex);
//     return match ? match[0] : null;
// }

// function beginEnd(str){
//     const regex = /^(hi)(.*)(hi)$/;
//     const match = str.match(regex);
//     return match? match[0] : null;
// }

function regularExpression(){
    const normal = /hi/;
    const begin = /^(hi)/;
    const end = /(hi)$/;
    const beginEnd = /^(hi)(.*)(hi)$/;

    return {
        normal,
        begin,
        end,
        beginEnd,
    };
}

// const regexExpressions = regularExpression();
// console.log(regexExpressions);

// const testStrings = [
//     "hi",
//     "hi there",
//     "there hi",
//     "hi there hi",
//     "hello",
//     "hi hi"
// ];

// testStrings.forEach(str => {
//     console.log(`Testing "${str}":`);
//     console.log(`normal: ${regexExpressions.normal.test(str)}`);
//     console.log(`begin: ${regexExpressions.begin.test(str)}`);
//     console.log(`end: ${regexExpressions.end.test(str)}`);
//     console.log(`beginEnd: ${regexExpressions.beginEnd.test(str)}`);
//     console.log('------------------');
// });
