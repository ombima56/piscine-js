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

function tempForecasts(arr) {
    return arr.map(obj => {
      // Remove spaces and extract the numeric temperature value
      const fahrenheit = parseFloat(obj.temperature.replace(/\s+/g, '').replace('°F', ''));
      
      // Convert Fahrenheit to Celsius
      const celsius = Math.round((fahrenheit - 32) * 5 / 9);
      
      // Capitalize the first letter of the state name
      const stateCapitalized = obj.state.charAt(0).toUpperCase() + obj.state.slice(1);
      
      // Format the output string
      return `${celsius}°Celsius in ${obj.city}, ${stateCapitalized}`;
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