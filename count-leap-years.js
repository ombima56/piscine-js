function countLeapYears(date) {
    const year = date.getFullYear();
    let leapYearCount = 0;

    for (let i = 1; i <= year; i++) {
        if ((i % 4 === 0 && i % 100 !== 0) || (i % 400 === 0)) {
            leapYearCount++;
        }
    }

    return leapYearCount;
}

const date = new Date('2024-01-01');
console.log(countLeapYears(date));