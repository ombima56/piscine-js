import fs from 'fs';

const veryDiscoWord = (word) => {
    const midIndex = Math.ceil(word.length / 2);
    const firstHalf = word.slice(0, midIndex);
    const secondHalf = word.slice(midIndex);
    return secondHalf + firstHalf;
};

const veryDisco = (input) => {
    const words = input.split(' ');
    const discoWords = words.map(veryDiscoWord);
    return discoWords.join(' ');
};

const args = process.argv[2];
if (!args) {
    console.error('Please provide a string as an argument.');
    process.exit(1);
}

const inputString = args;
const result = veryDisco(inputString);

fs.writeFile('verydisco-forever.txt', result, (err) => {
    if (err) {
        console.error('Error writing to file:', err);
        process.exit(1);
    }
    console.log('Check result on verydisco-forever.txt');
});