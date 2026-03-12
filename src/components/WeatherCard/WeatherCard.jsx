const WeatherCard = ({ weatherData }) => {
  return (
    <div className="weather-card">
      <div className="city-name">{weatherData.address}</div>
      <div className="city-temp">{weatherData.currentConditions.temp}</div>
    </div>
  );
};

export default WeatherCard;
