import { promises as fs } from 'fs';

const reverseVeryDiscoWord = (word) => {
    const midIndex = Math.ceil(word.length / 2); 
    const firstHalf = word.slice(0, midIndex);   
    const secondHalf = word.slice(midIndex);      
    return secondHalf + firstHalf;                
};

const veryDiscoReverso = async (filePath) => {
    try {
        const data = await fs.readFile(filePath, 'utf-8');
        const discoWords = data.split(' ').map(reverseVeryDiscoWord); 
        const result = discoWords.join(' '); 
        console.log(result);
    } catch (error) {
        console.error('Error reading the file:', error);
    }
};

const args = process.argv.slice(2);
if (args.length === 0) {
    console.error('Please provide a file path as an argument.');
    process.exit(1);
}

const filePath = args[0];
veryDiscoReverso(filePath);