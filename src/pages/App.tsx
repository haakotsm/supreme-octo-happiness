import { WeatherData } from '@mocks/data'
import '@styles/App.css'
import { useState } from 'react'

function App() {
  const [weatherData, setWeatherData] = useState<WeatherData>()
  function getWeatherData() {
    fetch("/api/weather", { method: "GET" })
      .then((response) => response.json())
      .then((data) => setWeatherData(data))
  }

  return (
    <>
      <img src='https://placehold.co/600x400'></img>
      <h1>Start here</h1>
      <button onClick={getWeatherData}>Get weather data</button>
      <pre>{JSON.stringify(weatherData, null, 2)}</pre>
    </>
  )
}

export default App
