function dayOfTheYear(date) {
    // Array to store the number of days in each month
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  
    // Get year, month, and day from the date
    const year = date.getFullYear();
    const month = date.getMonth(); // 0-indexed
    const day = date.getDate();
  
    // Check if it's a leap year
    const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    if (isLeapYear) {
      daysInMonth[1] = 29;
    }
  
    // Calculate the day of the year
    let dayOfYear = day;
    for (let i = 0; i < month; i++) {
      dayOfYear += daysInMonth[i];
    }
    return dayOfYear;
}

console.log(dayOfTheYear(new Date('2024-01-01'))); 
console.log(dayOfTheYear(new Date('2024-12-31')));
console.log(dayOfTheYear(new Date('2024-02-29')));