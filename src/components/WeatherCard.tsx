import { convertPrecipitationToWeatherString, convertTemperatureToColor, formatDate, parseDate } from "@/utils"
import { WeatherData } from "@mocks/data"
import "@styles/weather-card.css"
function WeatherCard({ data }: { data: WeatherData }) {
    return (
        <div className="weather-card">
            <div className="weather-card__header">
                <h2 className="weather-card__location">{data.location}</h2>
                <div className="weather-card__date">{formatDate(parseDate(data.date, "iso"))}</div>
            </div>
            <div className="weather-card__content">
                <div className="weather-card__temperature" style={{ color: convertTemperatureToColor(data.temperature) }}>
                    <span>Temperatur</span>
                    <span>
                        {data.temperature.toFixed(2)}°C
                    </span>
                </div>
                <div className="weather-card__precipitation">
                    <span>Precipitation:</span>
                    <span>{convertPrecipitationToWeatherString(data.precipitation)
                    } mm</span>
                </div>
                <div className="weather-card__wind-speed">
                    <span>Wind Speed:</span>
                    <span>{data.windSpeed.toFixed(2)} m/s</span>
                </div>
                <div className="weather-card__cloud-cover">
                    <span>Cloud Cover:</span>
                    <span>{data.cloudCover.toFixed(2)} %</span>
                </div>
            </div>
        </div >
    )
}

export default WeatherCard