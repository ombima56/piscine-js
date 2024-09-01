function groupPrice(inputString) {
    const pricePattern = /\$([\d,]+)(?:\.(\d{2}))?/g;
    let match;
    const result = [];

    // Iterate through all matches in the input string
    while ((match = pricePattern.exec(inputString)) !== null) {
        const priceBreakdown = [match[0]];
        priceBreakdown.push(match[1]);
        if (match[2]) {
            priceBreakdown.push(match[2]);
        }

        // Add the breakdown to the result array
        result.push(priceBreakdown);
    }

    return result;
}


const inputString = "The total cost is $1,234.56 and $789.99. Other items cost $45.";
const result = groupPrice(inputString);
console.log(result);