import { capitalizeCityName } from "../../utils";
import { getWeatherIcon } from "../../utils";

const CurrentWeather = ({ weatherData }) => {
  let address = weatherData.address;
  let precipitationProbability = `Chance of rain: ${weatherData.currentConditions.precipprob} % `;
  let temperature = weatherData.currentConditions.temp;
  let icon = weatherData.currentConditions.icon;
  return (
    <>
      <div className="weather-card-name-temp">
        <div className="name-precipprob-container">
          <div className="city-name">{capitalizeCityName(address)}</div>
          <span className="city-probability">{precipitationProbability}</span>
        </div>
        <div className="city-temp">{temperature}</div>
      </div>
      <div className="weather-card-icon">
        <img src={`src/assets/weather-icons/${getWeatherIcon(icon)}`} />
      </div>
    </>
  );
};

export default CurrentWeather;
