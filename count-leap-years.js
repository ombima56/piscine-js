function countLeapYears(date) {
    const year = date.getFullYear();
    let leapYearCount = 0;

    // Loop through each year from 1 to the year of the provided date
    for (let i = 1; i <= year; i++) {
        // Check if the current year is a leap year
        if ((i % 4 === 0 && i % 100 !== 0) || (i % 400 === 0)) {
            leapYearCount++;
        }
    }

    // Check if the date is before or on February 28 of the current year
    const isBeforeLeapDay = date.getMonth() < 2 || (date.getMonth() === 1 && date.getDate() < 29);
    
    // If the current year is a leap year and the date is before February 29, subtract 1
    if (isBeforeLeapDay && (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0))) {
        leapYearCount--;
    }

    return leapYearCount;
}

console.log(countLeapYears(new Date('2024-01-01')));
console.log(countLeapYears(new Date('1664-08-09')));
const date = new Date('2024-01-01');
console.log(countLeapYears(date));