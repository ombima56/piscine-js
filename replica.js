const replica = (target, ...sources) => {
    if (target === null || typeof target !== 'object') {
        return target;
    }

    sources.forEach(source => {
        if (source && typeof source === 'object') {
            Object.entries(source).forEach(([key, value]) => {
                if (value && typeof value === 'object') {
                    if (!target[key]) {
                        target[key] = Array.isArray(value) ? [] : {};
                    }
                    replica(target[key], value);
                } else {
                    target[key] = value;
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