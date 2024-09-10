const pronoun = (str) => {
    const pronouns = ['i', 'you', 'he', 'she', 'it', 'they', 'we'];
    const result = {};
    const words = str.split(/\s+/);

    for (let i = 0; i < words.length; i++) {
        const word = words[i].toLowerCase();

        if (pronouns.includes(word)) {
            if (!result[word]) {
                result[word] = { word: [], count: 0 };
            }

            // Find the next non-pronoun word
            for (let j = i + 1; j < words.length; j++) {
                const potentialNextWord = words[j].replace(/[.,]/g, '').trim();
                if (!pronouns.includes(potentialNextWord.toLowerCase())) {
                    result[word].word.push(potentialNextWord);
                    break; // Stop searching after finding the first non-pronoun word
                }
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
