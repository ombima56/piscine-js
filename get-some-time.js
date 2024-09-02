function firstDayWeek(week, year) {
    if (week < 1 || week > 53 || isNaN(parseInt(year))) {
        throw new Error('Invalid input');
    }

    year = parseInt(year, 10);

    // Create a Date object for January 1st of the given year
    const firstJan = new Date(year, 0, 1);

    // Calculate the day of the week for January 1st
    const dayOfWeek = firstJan.getUTCDay();

    // Calculate the offset to the first Monday of the year
    let dayOffset = (dayOfWeek <= 1) ? (1 - dayOfWeek) : (8 - dayOfWeek); // Adjust so that Monday is 1

    // Calculate the date of the Monday of the desired week
    const desiredDate = new Date(Date.UTC(year, 0, 1 + dayOffset + (week - 1) * 7));

    // Format the date as dd-mm-yyyy
    const day = String(desiredDate.getUTCDate()).padStart(2, '0');
    const month = String(desiredDate.getUTCMonth() + 1).padStart(2, '0');
    return `${day}-${month}-${String(year).padStart(4, '0')}`;
}

console.log(firstDayWeek(2, '0001'))
console.log(firstDayWeek(1, '2023')); 
console.log(firstDayWeek(52, '2023'));
console.log(firstDayWeek(1, '2024')); 