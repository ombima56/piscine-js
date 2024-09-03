function countLeapYears(date) {
    const year = date.getFullYear();
  
    // Helper function to check if a year is a leap year
    const isLeapYear = (year) => {
        return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
    };
      
    let leapYearCount = 0;
  
    // Iterate through years from 1 to the given year
    for (let i = 1; i < year; i++) {
      if (isLeapYear(i)) {
        leapYearCount++;
      }
    }
    return leapYearCount;
}

console.log(countLeapYears(new Date('2024-01-01')));
console.log(countLeapYears(new Date('1664-08-09')));
const date = new Date('2024-01-01');
console.log(countLeapYears(date));