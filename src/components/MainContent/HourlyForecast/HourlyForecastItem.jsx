import { getWeatherIcon, formatWeatherDatetime } from "../../../utils.js";

const HourlyForecastItem = ({ weather }) => {
  return (
    <div className="flex flex-col items-center min-w-[90px] gap-3 border-r border-slate-700/50 last:border-none px-4 group hover:bg-slate-800/30 transition-colors rounded-xl py-2">
      {/* Hora */}
      <div className="text-slate-400 text-xs font-medium uppercase">
        {formatWeatherDatetime(weather)}
      </div>

      {/* Icono - Ajustado para que no "baile" */}
      <div className="h-12 w-12 flex items-center justify-center">
        <img
          src={`src/assets/weather-icons/${getWeatherIcon(weather.icon)}`}
          alt="icon"
          className="w-10 h-10 object-contain drop-shadow-md group-hover:scale-110 transition-transform"
        />
      </div>

      {/* Temperatura */}
      <div className="text-xl font-bold text-white">
        {Math.round(weather.temp)}°
      </div>
    </div>
  );
};

export default HourlyForecastItem;
