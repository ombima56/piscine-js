function firstDayWeek(week, year) {
    if (week < 1 || week > 53 || isNaN(parseInt(year))) {
        throw new Error('Invalid input');
    }

    year = parseInt(year, 10);

    // Create a Date object for January 1st of the given year
    const firstJan = new Date(Date.UTC(year, 0, 1));

    // Calculate the day of the week for January 1st (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
    const dayOfWeek = firstJan.getUTCDay();

    // Calculate the first Thursday of the year to determine the first ISO week
    const firstThursday = new Date(firstJan);

    if (dayOfWeek <= 4) {
        // If January 1st is Monday, Tuesday, Wednesday, or Thursday
        firstThursday.setUTCDate(firstThursday.getUTCDate() + (4 - dayOfWeek));
    } else {
        // If January 1st is Friday, Saturday, or Sunday
        firstThursday.setUTCDate(firstThursday.getUTCDate() + (11 - dayOfWeek));
    }

    // Calculate the first Monday of the ISO week
    const firstMonday = new Date(firstThursday);
    firstMonday.setUTCDate(firstThursday.getUTCDate() - 3); // Move back to the previous Monday

    // Calculate the date of the first day of the desired week
    const desiredDate = new Date(firstMonday);
    desiredDate.setUTCDate(firstMonday.getUTCDate() + (week - 1) * 7);

    // Format the date as dd-mm-yyyy
    const day = String(desiredDate.getUTCDate()).padStart(2, '0');
    const month = String(desiredDate.getUTCMonth() + 1).padStart(2, '0');
    return `${day}-${month}-${String(year).padStart(4, '0')}`;
}

console.log(firstDayWeek(2, '0001')); // Should display 08-01-0001
console.log(firstDayWeek(1, '2023')); 
console.log(firstDayWeek(52, '2023'));
console.log(firstDayWeek(1, '2024')); 
