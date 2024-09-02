function firstDayWeek(week, year) {
    if (week < 1 || week > 53 || isNaN(parseInt(year))) {
      throw new Error('Invalid input');
    }
  
    year = parseInt(year, 10);
  
    // Special case: Week 1 always returns January 1st
    if (week === 1) {
      return `01-01-${String(year).padStart(4, '0')}`;
    }
  
    // Create a Date object for January 1st of the given year
    const firstJan = new Date(Date.UTC(year, 0, 1));
  
    // Calculate the day of the week for January 1st (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
    const dayOfWeek = firstJan.getUTCDay();
  
    // Calculate the offset to the first Monday of the year
    let dayOffset = (dayOfWeek === 0) ? 1 : (8 - dayOfWeek);
  
    // Calculate the date of the Monday of the desired week
    const desiredDate = new Date(Date.UTC(year, 0, 1 + dayOffset + (week - 2) * 7));
  
    // If the calculated date is in the previous year, return January 1st
    if (desiredDate.getUTCFullYear() < year) {
      return `01-01-${String(year).padStart(4, '0')}`;
    }
  
    // Format the date as dd-mm-yyyy
    const day = String(desiredDate.getUTCDate()).padStart(2, '0');
    const month = String(desiredDate.getUTCMonth() + 1).padStart(2, '0');
    return `${day}-${month}-${String(year).padStart(4, '0')}`;
  }


console.log(firstDayWeek(2, '0001'))
console.log(firstDayWeek(1, '2023')); 
console.log(firstDayWeek(52, '2023'));
console.log(firstDayWeek(1, '2024')); 