const vowels = /[aeiou]/gi;
function vowelDots(str){
    const result = str.replace(vowels, (vowel) => vowel + '.');
    
    return result;
}

console.log(vowelDots('example'));
console.log(vowelDots('hello world')); 