// Function to add a week and return the day name in the new 14-day week format
function addWeek(date) {
    const epoch = new Date('0001-01-01'); // The epoch of the new 14-day week
    const dayNames = [
        'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',
        'secondMonday', 'secondTuesday', 'secondWednesday', 'secondThursday', 'secondFriday', 'secondSaturday', 'secondSunday'
    ];

    // Calculate the difference in days from the epoch using integer division
    const daysDiff = Math.floor((date - epoch) / (24 * 60 * 60 * 1000));
    // Use modulo to find the corresponding day in the new 14-day week
    return dayNames[daysDiff % 14];
}

// Function to time travel by modifying the time of a given date
function timeTravel({ date, hour, minute, second }) {
    const newDate = new Date(date);

    // Modify the time if specified
    if (hour !== undefined) newDate.setUTCHours(hour);
    if (minute !== undefined) newDate.setUTCMinutes(minute);
    if (second !== undefined) newDate.setUTCSeconds(second);

    // Return the new Date object directly
    return newDate; // This change ensures we return a Date object
}

// Utility function to format date to GMT string
function formatDateToGMT(date) {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const dayName = days[date.getUTCDay()]; // Use getUTCDay for consistent day retrieval
    const monthName = months[date.getUTCMonth()]; // Use getUTCMonth for consistent month retrieval
    const day = String(date.getUTCDate()).padStart(2, '0');
    const year = date.getUTCFullYear();
    const hours = String(date.getUTCHours()).padStart(2, '0');
    const minutes = String(date.getUTCMinutes()).padStart(2, '0');
    const seconds = String(date.getUTCSeconds()).padStart(2, '0');

    const gmtOffset = "+0100";

    return `${dayName} ${monthName} ${day} ${year} ${hours}:${minutes}:${seconds} GMT${gmtOffset} (Western European Summer Time)`;
}

console.log(addWeek(new Date('0001-01-01'))); 
console.log(addWeek(new Date('0001-01-02'))); 
console.log(addWeek(new Date('0001-01-07'))); 
console.log(addWeek(new Date('0001-01-08'))); 
console.log(addWeek(new Date('0001-01-09'))); 

const modifiedDate = timeTravel({
    date: new Date('2020-05-29T23:25:22Z'),
    hour: 21,
    minute: 22,
    second: 22,
});
console.log(formatDateToGMT(modifiedDate));