function matchCron(cron, date) {
    const cronParts = cron.split(' ');
    if (cronParts.length !== 5) {
        throw new Error('Invalid cron string');
    }

    const [cronMinute, cronHour, cronDayOfMonth, cronMonth, cronDayOfWeek] = cronParts;

    const minute = date.getMinutes();
    const hour = date.getHours();
    const dayOfMonth = date.getDate();
    const month = date.getMonth() + 1; // getMonth returns 0-11, so add 1
    const dayOfWeek = date.getDay() === 0 ? 7 : date.getDay(); // Which will present sunday

    return (
        (cronMinute === '*' || parseInt(cronMinute, 10) === minute) &&
        (cronHour === '*' || parseInt(cronHour, 10) === hour) &&
        (cronDayOfMonth === '*' || parseInt(cronDayOfMonth, 10) === dayOfMonth) &&
        (cronMonth === '*' || parseInt(cronMonth, 10) === month) &&
        (cronDayOfWeek === '*' || parseInt(cronDayOfWeek, 10) === dayOfWeek)
    );
}

console.log(matchCron('9 * * * *', new Date('2020-05-30 18:09:00'))); 
console.log(matchCron('9 * * * *', new Date('2020-05-30 19:09:00'))); 
console.log(matchCron('9 * * * *', new Date('2020-05-30 19:21:00')));
