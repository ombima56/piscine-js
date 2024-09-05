const hasCity = (country, arr) => {
    return (city) => {
        if (arr.includes(city)) {
            return `${city} is a city from ${country}`;
        } else {
            return `${city} is not a city from ${country}`;
        }
    };
}

const checkUSCities = hasCity('USA', ['New York', 'Los Angeles', 'Chicago', 'Miami']);

console.log(checkUSCities('New York'));
console.log(checkUSCities('Boston'));
console.log(checkUSCities('Kenya'))
console.log(checkUSCities('Chicago'))
