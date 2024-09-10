const pronoun = (str) => {
    const pronouns = ['i', 'you', 'he', 'she', 'it', 'they', 'we'];
    const result = {};
    const words = str.toLowerCase().split(/\s+/);

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        if (pronouns.includes(word)) {
            if (!result[word]) {
                result[word] = { word: [], count: 0 };
            }
            result[word].count++;

            // Check if the next word is not a pronoun and exists
            if (i + 1 < words.length && !pronouns.includes(words[i + 1])) {
                const nextWord = words[i + 1].replace(/[.,]/g, '').trim();
                result[word].word.push(nextWord);
            }
        }
    }

    return result;
}

const ex1 = 'Using Array Destructuring, you you can iterate through objects easily.';
console.log(pronoun(ex1)); 

const ex2 = 'If he you want to buy something you  have to  pay.';
console.log(pronoun(ex2)); 
