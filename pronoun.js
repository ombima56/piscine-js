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
  
        // Find the next non-pronoun word
        for (let j = i + 1; j < words.length; j++) {
          const nextWord = words[j].replace(/[.,]/g, '').trim();
          if (!pronouns.includes(nextWord)) {
            // Only add the word if it's not already in the array
            if (!result[word].word.includes(nextWord)) {
              result[word].word.push(nextWord);
            }
            break;
          }
        }
      }
    }
  
    return result;
};

const ex1 = 'Using Array Destructuring, you you can iterate through objects easily.';
console.log(pronoun(ex1)); 

const ex2 = 'If he you want to buy something you  have to  pay.';
console.log(pronoun(ex2)); 
