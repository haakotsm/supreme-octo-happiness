import DarkModeSwitch from '@/components/DarkModeSwitch'
import WeatherCard from '@/components/WeatherCard'
import { DarkModeContext } from '@/context/useDarkModeContext'
import { useDarkMode } from '@/hooks/useDarkMode'
import { parseWeatherData } from '@/utils'
import { WeatherData } from '@mocks/data'
import '@styles/App.css'
import { getUnixTime } from 'date-fns'
import { FormEvent, useRef, useState } from 'react'

function App() {
  const [weatherData, setWeatherData] = useState<WeatherData[]>()
  const { isDarkMode, toggleDarkMode } = useDarkMode()
  const locationInputRef = useRef<HTMLInputElement>(null)
  const dateInputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setWeatherData([])
    const formData = new FormData(event.currentTarget)

    const location = formData.get('location')?.toString().trim() || ''
    const date = formData.get('date')?.toString().trim() || ''

    const queryParams = new URLSearchParams()
    if (location) queryParams.set('location', location)
    if (date) queryParams.set('date', date)

    fetch(`/api/weather?${queryParams.toString()}`, { method: 'GET' })
      .then(async (response) => {
        const json = await response.json()
        const weatherData = parseWeatherData(json);
        return weatherData
      })
      .then((data) => {
        setWeatherData(data)
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  }

  return (
    <DarkModeContext.Provider value={{
      isDarkMode,
      toggleDarkMode
    }}>
      <header>
        <DarkModeSwitch />
      </header>
      <main>
        <h1>Været</h1>
        <img src='https://placehold.co/600x400'></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="location">Stedsnavn
            <input name="location" id="location" type="text" ref={locationInputRef} />
          </label>
          <label htmlFor="date">Dato
            <input name='date' id="date" type="date" ref={dateInputRef} />
          </label>
          <button type="submit">Hent været</button>
        </form>
        <div className="weather-cards">
          {weatherData && weatherData.length === 0 && <p>Ingen værdata funnet</p>}
          {weatherData?.map((data) => (
            <WeatherCard
              key={data.location + getUnixTime(data.date)}
              data={data}
            />
          ))}
        </div>
      </main>
    </DarkModeContext.Provider>
  )
}

export default App

