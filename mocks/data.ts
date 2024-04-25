import seedrandom from "seedrandom";
export type WeatherData = {
  date: string;
  location: string;
  temperature: number;
  precipitation: number;
  windSpeed: number;
  cloudCover: number;
};

export const weatherData: WeatherData[] = [...generateLocationData()];

function generateLocationData() {
  const weatherData: WeatherData[] = [];
  // Add 30 records, 6 records per location, each with an incremented date
  const locations = [
    "Oslo",
    "Bergen",
    "Stavanger",
    "Tromsø",
    "Kristiansand",
    "Drammen",
    "Fåberg",
    "Hamar",
    "Åmot",
    "Hov",
  ];
  locations.forEach((location) => {
    const incrementedDate = new Date("2024-04-25T12:00:00Z");
    for (let i = 0; i < 10; i++) {
      incrementedDate.setDate(incrementedDate.getDate() + 1);

      const randomSeed =
        location
          .split("")
          .reduce((a, b) => a + b.charCodeAt(0), 0)
          .toString() + incrementedDate.getTime().toString();
      const randomFunc = seedrandom(randomSeed);
      const temperature = 5 + randomFunc() * (25 - 5);
      const precipitation = 5 + randomFunc() * (20 - 5);
      const windSpeed = 1 + randomFunc() * 4;
      const cloudCover = 0.1 + randomFunc() * 0.4;
      const record = {
        date: incrementedDate.toISOString(),
        location,
        temperature: temperature,
        precipitation: precipitation,
        windSpeed: windSpeed,
        cloudCover: cloudCover,
      };
      weatherData.push(record);
    }
  });
  weatherData.sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );
  return weatherData;
}
