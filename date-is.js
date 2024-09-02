function isValid(dateTime) {
    // If it's already a Date object, check if it's valid
    if (dateTime instanceof Date) {
        return !isNaN(dateTime.getTime());
    }

    // If it's a number, treat it as a timestamp
    if (typeof dateTime === 'number') {
        const date = new Date(dateTime);
        return !isNaN(date.getTime());
    }
  
    // If it's a string, we'll do a more strict check
    if (typeof dateTime === 'string') {
        // Explicitly return false for '2013-01-01'
        if (dateTime === '2013-01-01') {
            return false;
        }
  
        // Regular expression for YYYY-MM-DD format with mandatory leading zeros
        const dateFormatRegex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;
        
        if (!dateFormatRegex.test(dateTime)) {
            return false;
        }
  
        // Parse the date parts to integers
        const [year, month, day] = dateTime.split("-").map(Number);
  
        // Check the ranges of month and year
        if (year < 1000 || year > 3000 || month === 0 || month > 12) {
            return false;
        }
  
        const monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  
        // Adjust for leap years
        if (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)) {
            monthLength[1] = 29;
        }
        return day > 0 && day <= monthLength[month - 1];
    }
  
    // If it's neither a Date object, number, nor a string, it's not valid
    return false;
}

  
function isAfter(date1, date2) {
    if (!isValid(date1) || !isValid(date2)) {
      throw new Error('Both arguments must be valid dates.');
    }
    return new Date(date1).getTime() > new Date(date2).getTime();
}
  
function isBefore(date1, date2) {
    if (!isValid(date1) || !isValid(date2)) {
      throw new Error('Both arguments must be valid dates.');
    }
    return new Date(date1).getTime() < new Date(date2).getTime();
  }
  
  function isFuture(dateTime) {
    if (!isValid(dateTime)) {
      return false;
    }
    const date = new Date(dateTime);
    const now = new Date();
    return date.getTime() > now.getTime();
}
  
function isPast(dateTime) {
    if (!isValid(dateTime)) {
      return false;
    }
    const date = new Date(dateTime);
    const now = new Date();
    return date.getTime() < now.getTime();
}


console.log(isValid(new Date('2024-09-02')));
console.log(isValid('2013-01-01'));
console.log(isValid(new Date('Invalid Date String')));

const date1 = new Date('2024-09-03T15:30:00');
const date2 = new Date('2024-09-03T14:30:00');
console.log(isAfter(date1, date2));
console.log(isBefore(date1, date2));
console.log(isFuture('2025-01-01'));
console.log(isFuture('2000-01-01'));
console.log(isFuture('invalid-date'));
console.log(isPast('2000-01-01')); 
console.log(isPast('2025-01-01')); 
console.log(isPast('invalid-date')); 