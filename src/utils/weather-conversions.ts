import { WeatherData } from "@mocks/data";

export function parseWeatherData(
  data: Record<string, WeatherData>
): WeatherData[] {
  console.log(data);
  const result: WeatherData[] = [];
  Object.values(data).forEach((item) => {
    result.push({
      date: item.date,
      location: item.location,
      temperature: item.temperature,
      precipitation: item.precipitation,
      windSpeed: item.windSpeed,
      cloudCover: item.cloudCover,
    });
  });
  return result;
}

export function convertTemperatureToColor(temperature: number): string {
  if (temperature < 10) {
    return "blue";
  } else if (temperature < 20) {
    return "green";
  } else if (temperature < 30) {
    return "yellow";
  } else if (temperature < 40) {
    return "orange";
  } else {
    return "red";
  }
}

export function convertPrecipitationToWeatherString(
  precipitation: number
): string {
  if (precipitation < 10) {
    return "Sol";
  } else if (precipitation < 30) {
    return "Overskyet";
  } else if (precipitation < 50) {
    return "Regn";
  } else {
    return "Storm";
  }
}
