import { getWeatherIcon } from "../../../utils.js";

const HourlyForecastItem = ({ weather }) => {
  return (
    <div className="hourly-item-container">
      <div className="houly-item-datetime">{weather.datetime}</div>
      <div className="houly-item-icon">
        <img src={`src/assets/weather-icons/${getWeatherIcon(weather.icon)}`} />
      </div>
      <div className="houly-item-temp">{weather.temp}</div>
    </div>
  );
};

export default HourlyForecastItem;
