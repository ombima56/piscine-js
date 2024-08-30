function vowelDots(str){
    const vowels = /[aeiou]/gi;
    const result = str.replace(vowels, (vowel) => vowel + '.');
    
    return result;
}

console.log(vowelDots('example'));
console.log(vowelDots('hello world')); 