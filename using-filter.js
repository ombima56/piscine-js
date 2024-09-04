function filterShortStateName(arr){
    return arr.filter(state => state.length < 7);
}

const states1 = ['Alabama', 'Alaska', 'California', 'Ohio', 'Florida', 'Maine'];

function filterStartVowel(arr) {
    return arr.filter(state => /^[a,e,i,o,u]/i.test(state));
}

const states2 = ['Alabama', 'Texas', 'Oregon', 'Idaho', 'California'];

function filter5Vowels(arr) {
    return arr.filter(state => {
    const vowelsCount = (state.match(/[aeiou]/gi) || []).length;
    return vowelsCount >= 5; 
    });   
}

const states3 = ['Alabama', 'California', 'Ohio', 'Mississippi', 'Sequoia'];

function filter1DistinctVowel(arr) {
    return arr.filter(state => {
      const distinctVowels = new Set(state.toLowerCase().match(/[aeiou]/gi));
      return distinctVowels.size === 1;
    });
}

const states4 = ['Alabama', 'California', 'Hawaii', 'Ohio', 'Kentucky'];

function multiFilter(arr) {
    return arr.filter(item => {
        const hasValidCapital = item.capital && item.capital.length >= 8;
        const doesNotStartWithVowel = item.name && !/^[aeiou]/i.test(item.name);
        const hasVowelInTag = item.tag && /[aeiou]/i.test(item.tag);
        const isNotInSouthRegion = item.region !== "South";

        return hasValidCapital && doesNotStartWithVowel && hasVowelInTag && isNotInSouthRegion;
    });
}

const data = [
    { name: "Australia", capital: "Canberra", tag: "country", region: "Oceania" },
    { name: "India", capital: "New Delhi", tag: "subcontinent", region: "Asia" },
    { name: "United States", capital: "Washington, D.C.", tag: "country", region: "North America" },
    { name: "Uganda", capital: "Kampala", tag: "africa", region: "Africa" },
    { name: "Ecuador", capital: "Quito", tag: "south", region: "South" },
    { name: "Albania", capital: "Tirana", tag: "europe", region: "Europe" },
];
const filteredData = multiFilter(data);

console.log(filterShortStateName(states1));
console.log(filterStartVowel(states2));
console.log(filter5Vowels(states3));
console.log(filter1DistinctVowel(states4));
console.log(filteredData);






