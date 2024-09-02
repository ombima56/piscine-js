function isValid(dateTime) {
    const date = new Date(dateTime);
    return !isNaN(date.getTime());
}

function isAfter(date1, date2) {
    if (!(date1 instanceof Date) || !(date2 instanceof Date)) {
        throw new Error('Both arguments must be Date objects.');
    }
    return date1.getTime() > date2.getTime();
}

function isBefore(date1, date2) {
    if (!(date1 instanceof Date) || !(date2 instanceof Date)) {
        throw new Error('Both arguments must be Date objects.');
    }
    return date1.getTime() < date2.getTime();
}

function isFuture(dateTime) {
    const date = new Date(dateTime);
    
    // Check if the date is valid
    if (!isValid(dateTime)) {
        return false;
    }

    // Get the current date
    const now = new Date();
    
    // Return true if the date is after the current date
    return date.getTime() > now.getTime();
}

function isPast(dateTime) {
    const date = new Date(dateTime);
    
    // Check if the date is valid
    if (!isValid(dateTime)) {
        return false;
    }

    // Get the current date
    const now = new Date();
    
    // Return true if the date is before the current date
    return date.getTime() < now.getTime();
}


console.log(isValid(new Date('2024-09-02')));
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