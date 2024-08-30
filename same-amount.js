function sameAmount(str, regexp1, regexp2) {
    const matches1 = str.match(regexp1) || [];
    const matches2 = str.match(regexp2) || [];

    return matches1.length === matches2.length;
}

console.log(sameAmount("hello world", /l/g, /o/g));
console.log(sameAmount("hello world", /l/g, /l/g));
