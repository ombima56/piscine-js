const invert = (obj) => {
    const invertedObject = {};
    for (const [key, value] of Object.entries(obj)) {
        invertedObject[value] = key;
    }
    return invertedObject;
}

const obj = { a: 1, b: 2, c: 3 };
const inverted = invert(obj);
console.log(inverted);