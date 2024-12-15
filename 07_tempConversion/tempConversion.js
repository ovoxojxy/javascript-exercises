const convertToCelsius = function(temp) {
  let result = (temp - 32) * 5/9
  result = result.toFixed(1)
  result = parseFloat(result)

  return result
};

const convertToFahrenheit = function(temp) {
  let result = (temp * 9/5 + 32)
  result = result.toFixed(1)
  result = parseFloat(result)

  return result
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
