function ionOut(str) {
    const words = str.split(/\s+/); // Split by whitespace

    const result = words
        .filter(word => /t.*ion/.test(word)) // Check for 'ion' following 't'
        .map(word => word.replace(/ion$/, '')); // Remove 'ion' from the end of the word

    return result;
}

console.log(ionOut("The nation was in motion, but the attention was lacking."));