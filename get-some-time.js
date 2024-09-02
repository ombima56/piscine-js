function firstDayWeek(week, year) {
    if (week < 1 || week > 53 || isNaN(parseInt(year))) {
        throw new Error('Invalid input');
    }

    // Parse year to integer
    year = parseInt(year);

    // Create a Date object for January 1st of the given year
    const firstJan = new Date(year, 0, 1);

    // Calculate the offset to the first Monday of the year
    let dayOffset = 1 - firstJan.getDay();
    if (dayOffset > 0) dayOffset -= 7;

    // Calculate the date of the Monday of the desired week
    const desiredDate = new Date(year, 0, 1 + dayOffset + (week - 1) * 7);

    // If the calculated date is in the previous year, return January 1st
    if (desiredDate.getFullYear() < year) {
        return '01-01-' + year;
    }

    // Format the date as dd-mm-yyyy
    const day = String(desiredDate.getDate()).padStart(2, '0');
    const month = String(desiredDate.getMonth() + 1).padStart(2, '0');
    return `${day}-${month}-${year}`;
}

console.log(firstDayWeek(1, '2023')); 
console.log(firstDayWeek(52, '2023'));
console.log(firstDayWeek(1, '2024')); 