function ionOut(str) {
    const words = str.split(/\s|,\s*/); // Split by whitespace

    const result = words
        .filter(word => /t.*ion/.test(word)) // Check for 'ion' following 't'
        .map(word => word.replace(/ion$/, ''));
            return result;
}

console.log(ionOut("The nation was in motion, but the attention was lacking."));
console.log(ionOut('attention, direction')); 