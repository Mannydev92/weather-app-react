import HourlyForecastItem from "./HourlyForecastItem";

const TodayForecast = ({ weather, now }) => {
  let nowInSeconds = now / 1000;
  let todayHours = weather.days[0].hours.filter((hour) => {
    return hour.datetimeEpoch > nowInSeconds;
  });
  if (todayHours.length < 24) {
    const hoursNeeded = 24 - todayHours.length;
    const rest = weather.days[1].hours.slice(0, hoursNeeded);
    todayHours = [...todayHours, ...rest];
  }
  return (
    <div className="today-forecast-container">
      {todayHours.map((hour) => (
        <HourlyForecastItem
          key={hour.datetimeEpoch}
          weather={hour}
        ></HourlyForecastItem>
      ))}
    </div>
  );
};

export default TodayForecast;
