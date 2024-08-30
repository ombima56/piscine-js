function ionOut(str) {
    const words = str.split(/\s|,\s*/); // Split by whitespace or commas

    const result = words
    .filter(word => /t.*ion$/.test(word) && /t.*ion$/.exec(word)[0] === word) // Check for 't' followed by 'ion'
        .map(word => word.replace(/ion$/, '')); // Replace 'ion' at the end
    
    return result;
}

console.log(ionOut("The nation was in motion, but the attention was lacking."));
console.log(ionOut('attention, direction')); 