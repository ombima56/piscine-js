const pick = (obj, keys) => {
    const containKey = {};

    const keysArray = Array.isArray(keys) ? keys : [keys];
    for (const key of keysArray) {
        if (key in obj) {
            containKey[key] = obj[key];
        }
    }
    return containKey;
}

const omit = (obj, keys) => {
    const containKey = {};
    const keysArray = Array.isArray(keys) ? keys : [keys];
    for (const key of Object.keys(obj)) {
      if (!keysArray.includes(key)) {
        containKey[key] = obj[key];
      }
    }
    return containKey;
}

const obj = { a: 1, b: 2, c: 3 };
console.log(pick(obj, 'a'));
console.log(pick(obj, ['a', 'c', 'b']));

const exampleObject = {
    name: 'John',
    age: 30,
    profession: 'Engineer',
    country: 'USA'
};

const omitted = omit(exampleObject, ['age', 'profession']);
console.log(omitted);
