import { getWeatherIcon, formatWeatherDatetime } from "../../../utils.js";

const HourlyForecastItem = ({ weather }) => {
  return (
    /* FLEX-SHRINK-0: ¡ESTA ES LA CLAVE! Evita que el contenedor aplaste el item.
       MIN-W-[90px]: Le damos un ancho mínimo para que siempre se vea bien.
    */
    <div className="flex flex-col items-center justify-center flex-shrink-0 min-w-[90px] py-4 border-r border-slate-700/30 last:border-none">
      <span className="text-slate-400 text-[11px] font-medium uppercase mb-3">
        {formatWeatherDatetime(weather)}
      </span>

      <img
        src={`src/assets/weather-icons/${getWeatherIcon(weather.icon)}`}
        className="w-10 h-10 object-contain mb-3"
        alt="weather icon"
      />

      <span className="text-xl font-bold text-white">
        {Math.round(weather.temp)}°
      </span>
    </div>
  );
};

export default HourlyForecastItem;
