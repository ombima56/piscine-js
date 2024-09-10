const deepCopy = (item) => {
    if (item === null || typeof item !== 'object') {
      return item;
    }
    
    // Handle Date objects
    if (item instanceof Date) {
      return new Date(item.getTime());
    }
    
    // Handle Array objects
    if (Array.isArray(item)) {
      return item.map(deepCopy);
    }
    
    // Handle RegExp objects
    if (item instanceof RegExp) {
        return new RegExp(item.source, item.flags);
    }

    // Handle function object
    if (item instanceof 'function') {
        return item;
    }

    // Handle Object literals
    const copy = {};
    Object.keys(item).forEach(key => {
      copy[key] = deepCopy(item[key]);
    });
    return copy;
}

// const original = {
//     a: 1,
//     b: [2, 3, { c: 4 }],
//     d: { e: 5, f: new Date() },
//     g: null,
//     h: undefined
// };
  
// const copied = deepCopy(original);
// console.log(copied);