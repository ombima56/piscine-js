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
        state: obj.state,
        region: obj.region,
        temperature: obj.temperature.replace(/\s+/g, '') // Remove all spaces in the temperature
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
        // Extract the numeric temperature part
        const fahrenheit = parseFloat(obj.temperature.replace(/\s+/g, '').replace('°F', ''));
        
        // Convert using the fahrenheitToCelsius function
        const celsiusArray = fahrenheitToCelsius([fahrenheit]);
        const celsius = celsiusArray[0].replace('°C', '°Celsius'); // Change °C to °Celsius
        
        // Capitalize the state name properly
        const stateCapitalized = obj.state.split(' ').map(word => 
            word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ');

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