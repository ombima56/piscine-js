const veryDiscoWord = (word) => {
    const midIndex = Math.ceil(word.length / 2);
    const firstHalf = word.slice(0, midIndex);
    const secondHalf = word.slice(midIndex);
    return secondHalf + firstHalf;
};

const veryDisco = (input) => {
    const words = input.split(' ');
    return veryDiscoWord(words[0]);
};

const args = process.argv.slice(2);
if (args.length === 0) {
    console.error('Please provide a string as an argument.');
    process.exit(1);
}

const inputString = args.join(' ');
const result = veryDisco(inputString);
console.log(result);