const pronoun = (str) => {
    const pronouns = ['i', 'you', 'he', 'she', 'it', 'they', 'we'];
    const result = {};

    const words = str.split(/\s+/);

    for (let i = 0; i < words.length; i++) {
        const word = words[i].toLowerCase();

        if (pronouns.includes(word)) {
            const nextWord = words[i + 1]; // Getting the word after the pronoun

            if (!result[word]) {
                result[word] = { word: [], count: 0 };
            }

            // Trim the next word of punctuation and whitespace
            if (nextWord) {
                result[word].word.push(nextWord.replace(/[.,]/g, '').trim());
            }
            result[word].count++;
        }
    }
    return result;
}

const ex1 = 'Using Array Destructuring, you you can iterate through objects easily.';
console.log(pronoun(ex1)); 

const ex2 = 'If he you want to buy something you  have to  pay.';
console.log(pronoun(ex2)); 
