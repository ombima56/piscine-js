function sameAmount(str, regexp1, regexp2) {
    const matches1 = str.match(new RegExp(regexp1.source, 'g')) || [];
    const matches2 = str.match(new RegExp(regexp2.source, 'g')) || [];

    return matches1.length === matches2.length;
}

console.log(sameAmount("hello world", /l/g, /o/g));
console.log(sameAmount("hello world", /l/g, /l/g));
