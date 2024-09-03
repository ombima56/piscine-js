function firstDayWeek(week, year) {
    if (week < 1 || week > 53 || isNaN(parseInt(year))) {
      throw new Error('Invalid input');
    }
  
    year = parseInt(year, 10);
    
    // For week 1, always return January 1st
    if (week === 1) {
      return `01-01-${String(year).padStart(4, '0')}`;
    }
    
    // Calculate the date for the start of the specified week
    const firstDay = new Date(Date.UTC(year, 0, 1 + (week - 1) * 7));
    
    // If the calculated date is in the previous year, return January 1st
    if (firstDay.getUTCFullYear() < year) {
      return `01-01-${String(year).padStart(4, '0')}`;
    }
    
    // Format the date as dd-mm-yyyy
    const day = String(firstDay.getUTCDate()).padStart(2, '0');
    const month = String(firstDay.getUTCMonth() + 1).padStart(2, '0');
    return `${day}-${month}-${String(year).padStart(4, '0')}`;
}

// Test cases
console.log(firstDayWeek(2, '0001'));
console.log(firstDayWeek(1, '2023'));
console.log(firstDayWeek(52, '2023'));
console.log(firstDayWeek(1, '2024'));
console.log(firstDayWeek(1, '1000'));

