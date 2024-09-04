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

function fahrenheitToCelsius(arr) {
    return arr.map(temp => {
        const fahrenheit = parseInt(temp); // Ensure it's an integer
        const celsius = Math.floor((fahrenheit - 32) * 5 / 9); // Convert to Celsius
        return `${celsius}°C`; // Return as string with °C suffix
    });
}

function tempForecasts(arr) {
    return arr.map(obj => {
        // Extract the numeric temperature part and create an array
        const fahrenheitArray = [parseFloat(obj.temperature.replace(/\s+/g, '').replace('°F', ''))];
        
        // Convert using the fahrenheitToCelsius function
        const celsiusArray = fahrenheitToCelsius(fahrenheitArray);
        const celsius = celsiusArray[0]; // Get the first (and only) value from the array
        
        // Capitalize the state name
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