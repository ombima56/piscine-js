const fusion = (obj1, obj2) => {
    const result = {};

    const keys = new Set([...Object.keys(obj1), ...Object.keys(obj2)]);

    for (const key of keys) {
        const value1 = obj1[key];
        const value2 = obj2[key];

        if (Array.isArray(value1) && Array.isArray(value2)) {
            result[key] = [...value1, ...value2];
        } else if (typeof value1 === 'string' && typeof value2 === 'string') {
            result[key] = value1 + ' ' + value2;
        } else if (typeof value1 === 'number' && value2 === 'number') {
            result[key] = value1 + value2;
        } else if (typeof value1 === 'object' && typeof value2 === 'object' && !Array.isArray(value1) && !Array.isArray(value2)) {
            result[key] = fusion(value1, value2);
        } else {
            result[key] = value2 !== undefined ? value2 : value1
        }
    }
    return result
}

console.log(fusion({ arr: [1, "2"] }, { arr: [2] })); 
console.log(fusion({ arr: [], arr1: [5] },{ arr: [10, 3], arr1: [15, 3], arr2: ["7", "1"] }));
console.log(fusion({ str: "salem" }, { str: "alem" })); 