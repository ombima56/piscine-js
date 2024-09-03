function isFriday(date) {
    return date.getDay() === 5;
}

function isWeekend(date) {
    const day = date.getDay();
    return day === 6 || day === 0; 
}

function isLeapYear(date) {
    const year = date.getFullYear();
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function isLastDayOfMonth(date) {
    const nextDay = new Date(date);
    nextDay.setDate(date.getDate() + 1);
    return nextDay.getDate() === 1;
}

const friday = new Date('2024-09-27'); 
const saturday = new Date('2024-09-21'); 
const date1 = new Date('2024-03-01');
const date2 = new Date('2023-03-01');
const date3 = new Date('2024-03-30');
const date4 = new Date('2024-03-31');
const date5 = new Date('2024-02-29');

console.log(isFriday(friday));       
console.log(isWeekend(saturday));    
console.log(isLeapYear(date1));
console.log(isLeapYear(date2));
console.log(isLastDayOfMonth(date3));
console.log(isLastDayOfMonth(date4));
console.log(isLeapYear(date5));
