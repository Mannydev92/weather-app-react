import HourlyForecastItem from "./HourlyForecastItem";
import { useState } from "react";

const TodayForecast = ({ weather }) => {
  const [now] = useState(() => Date.now());

  const nowInSeconds = now / 1000;
  let todayHours = weather.days[0].hours.filter((hour) => {
    return hour.datetimeEpoch > nowInSeconds;
  });
  if (todayHours.length < 24) {
    const hoursNeeded = 24 - todayHours.length;
    const rest = weather.days[1].hours.slice(0, hoursNeeded);
    todayHours = [...todayHours, ...rest];
  }
  return (
    <div className="bg-[#1a1f26] rounded-[2rem] p-6 shadow-lg">
      <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-6 ml-2">
        TODAY'S FORECAST
      </div>
      <div className="flex overflow-x-auto flex-nowrap gap-2 pb-4 scroll-smooth custom-scrollbar">
        {todayHours.map((hour) => (
          <HourlyForecastItem
            key={hour.datetimeEpoch}
            weather={hour}
          ></HourlyForecastItem>
        ))}
      </div>
    </div>
  );
};

export default TodayForecast;
