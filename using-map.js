function citiesOnly(arr) {
    return arr.map(obj => obj.city);
}

const cities = citiesOnly([
    {
        city: 'Los Angeles',
        temperature: '  101 °F   ',
      },
      {
        city: 'San Francisco',
        temperature: ' 84 ° F   ',
    },
]);

function upperCasingStates(arr) {
    return arr.map(state =>
        state
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
    );
}

const states = upperCasingStates(['alabama', 'new jersey']);

function trimTemp(arr) {
    return arr.map(obj => ({
        city: obj.city,
        temperature: obj.temperature.replace(/\s+/g, '') // Revove all spaces in the temperature
    }));
}

const trimmedTemperatures = trimTemp([
    { city: 'Los Angeles', temperature: '  101 °F   ' },
    { city: 'San Francisco', temperature: ' 84 ° F   ' }
]);

function fahrenheitToCelsius(temp) {
    const fahrenheit = parseInt(temp);
    const celsius = Math.floor((fahrenheit - 32) * 5 / 9);
    return `${celsius}°C`;
}

function tempForecasts(arr) {
    return arr.map(obj => {
        const fahrenheit = parseFloat(obj.temperature.replace(/\s+/g, '').replace('°F', ''));
        const celsius = fahrenheitToCelsius(fahrenheit); // Now passing a single value
        const stateCapitalized = obj.state.charAt(0).toUpperCase() + obj.state.slice(1);
        return `${celsius} in ${obj.city}, ${stateCapitalized}`;
    });
}
  
const forecasts = tempForecasts([
    {
      city: 'Pasadena',
      temperature: ' 101 °F',
      state: 'california',
      region: 'West',
    },
]);
  


console.log(cities);
console.log(states);
console.log(trimmedTemperatures);
console.log(forecasts);