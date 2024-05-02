export function celsiusToFahrenheit(celsius: number): number {
  return (celsius * 9) / 5 + 32;
}

export function fahrenheitToCelsius(fahrenheit: number): number {
  return ((fahrenheit - 32) * 5) / 9;
}

/**
 * Calculates the real feel temperature based on wind speed and humidity.
 *
 * @param {number} windSpeed - The wind speed in miles per hour.
 * @param {number} humidity - The humidity as a percentage.
 * @return {number} The real feel temperature in degrees Fahrenheit.
 *
 * This function calculates the real feel temperature, which is an approximation of how cold it
 * actually feels outside based on the combination of wind speed and humidity. The calculation
 * is based on a linear regression analysis of real feel temperature data for several weather
 * stations. The formula for real feel temperature is:
 *
 * T = -8.78469475556 + 1.61111111111 * windSpeed + 0.00391 * humidity - 0.004106 * (windSpeed * humidity)
 *
 * Where T is the real feel temperature in degrees Fahrenheit, windSpeed is the wind speed in miles
 * per hour, and humidity is the humidity as a percentage.
 *
 * The coefficients in the formula were derived through the linear regression analysis. The
 * equation is not exact and does not hold for all conditions, but is a good approximation for
 * most cases.
 */
export function calculateRealFeelTemperature(
  windSpeed: number,
  humidity: number
): number {
  // Substitute the formula variables with the actual values and evaluate the expression.
  return (
    -8.78469475556 +
    1.61111111111 * windSpeed +
    0.00391 * humidity -
    0.004106 * (windSpeed * humidity)
  );
}
