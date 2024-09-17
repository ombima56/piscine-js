const veryDiscoWord = (word) => {
    const midIndex = Math.ceil(word.length / 2); 
        const firstHalf = word.slice(0, midIndex);
    const secondHalf = word.slice(midIndex);
    return firstHalf + secondHalf;
};

const veryDisco = (input) => {
    const words = input.split(' ');
    const discoWords = words.map(veryDiscoWord);
    return discoWords.join(' ');
}

const args = process.argv.slice(2);
if (args.length === 0) {
    console.error('Please provide a string as an argument.');
    process.exit(1);
}

const inputString = args.join(' ');

const result = veryDisco(inputString);
console.log(result);
