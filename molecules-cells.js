function RNA(str){
    let rnaStrand= '';

    for (let i=0; i<str.length;i++) {
        const molecule = str[i];
        if (molecule === 'G') {
            rnaStrand += 'C';
        } else if (molecule === 'C') {
            rnaStrand += 'G';
        } else if (molecule === 'T') {
            rnaStrand += 'A';
        } else if (molecule === 'A') {
            rnaStrand += 'U';
        }
    }
    return rnaStrand;
}

function DNA(str){
    let dnaStrand = '';

    for (let i = 0; i < str.length; i++) {
        const molecule = str[i];
        if (molecule === 'C') {
            dnaStrand += 'G';
        } else if (molecule === 'G') {
            dnaStrand += 'C';
        } else if (molecule === 'A') {
            dnaStrand += 'T';
        } else if (molecule === 'U') {
            dnaStrand += 'A';
        }
    }
    return dnaStrand;
}