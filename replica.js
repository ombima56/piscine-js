const replica = (target, ...sources) => {
    if (target === null || typeof target !== 'object') {
        return target;
    }

    sources.forEach(source => {
        if (source && typeof source === 'object') {
            Object.entries(source).forEach(([key, value]) => {
                if (value instanceof RegExp || typeof value === 'function') {
                    target[key] = value; // Directly assign functions and regex
                } else if (Array.isArray(value)) {
                    target[key] = [...value]; // Directly assign a copy of the array
                } else if (value && typeof value === 'object') {
                    // Check if target is an array
                    if (Array.isArray(target[key])) {
                        // If target is an array, replace it with the new object
                        target[key] = {};
                    } else if (!target[key] || typeof target[key] !== 'object') {
                        target[key] = {}; // Initialize as an object if it doesn't exist or is not an object
                    }
                    replica(target[key], value); // Recursively copy nested objects
                } else {
                    target[key] = value; // Assign primitive values
                }
            });
        }
    });

    return target;
}

const target = { a: 1, b: { c: 3 } };
const source1 = { b: { d: 4 }, e: 5 };
const source2 = { a: 2, f: { g: 6 } };

const result = replica(target, source1, source2);
console.log(result);