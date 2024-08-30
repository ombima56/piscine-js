function ionOut(str) {
    const regex = /\b(\w+t)ion\b/g;
    const matches = str.match(regex) || [];
    return matches.map(word => word.slice(0, -3));
}


console.log(ionOut("The nation was in motion, but the attention was lacking."));
console.log(ionOut('attention, direction')); 