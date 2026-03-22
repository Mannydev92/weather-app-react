import {
  getDayOfTheWeek,
  getWeatherIcon,
  getWeatherDescription,
} from "./../../utils";

const DailyForecastItem = ({ day }) => {
  return (
    <div className="flex items-center justify-between py-4 border-b border-slate-800/50 last:border-none">
      <span className="w-15 text-slate-400 font-medium text-sm">
        {getDayOfTheWeek(day.datetime)}
      </span>

      <div className="flex items-center gap-3 flex-1 px-4">
        <img
          src={`src/assets/weather-icons/${getWeatherIcon(day.icon)}`}
          alt="icon"
          className="w-10 h-10 object-contain"
        />

        <span className="text-white font-bold text-sm capitalize">
          {getWeatherDescription(day.icon)}
        </span>
      </div>

      <div className="text-right min-w-[60px]">
        <span className="text-white font-bold">{Math.round(day.tempmax)}</span>
        <span className="text-slate-500 font-medium">
          /{Math.round(day.tempmin)}
        </span>
      </div>
    </div>
  );
};

export default DailyForecastItem;
