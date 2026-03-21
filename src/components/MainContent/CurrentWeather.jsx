import { capitalizeCityName } from "../../utils";
import { getWeatherIcon } from "../../utils";

const CurrentWeather = ({ weatherData }) => {
  // Mantenemos tus variables exactamente igual
  let address = weatherData.address;
  let precipitationProbability = `Chance of rain: ${weatherData.currentConditions.precipprob} % `;
  let temperature = weatherData.currentConditions.temp;
  let icon = weatherData.currentConditions.icon;

  return (
    /* CAMBIO CLAVE: Quitamos bg-[#1a1f26], rounded y shadow. 
       Dejamos flex y un padding generoso para que respire.
    */
    <div className="text-white p-10 flex justify-between items-center w-full max-w-4xl">
      <div className="flex flex-col gap-2">
        <div>
          {/* Ciudad más grande y limpia */}
          <h1 className="text-5xl font-bold tracking-tight">
            {capitalizeCityName(address)}
          </h1>
          <p className="text-slate-400 text-base mt-2">
            {precipitationProbability}
          </p>
        </div>

        <div className="mt-12">
          {/* Temperatura con tracking-tighter para ese look moderno */}
          <span className="text-8xl font-bold tracking-tighter">
            {Math.round(temperature)}°
          </span>
        </div>
      </div>

      {/* Icono a la derecha */}
      <div className="relative pr-4">
        {/* El brillo ahora es más sutil sobre el fondo negro total */}
        <div className="absolute inset-0 bg-yellow-400/10 blur-[100px] rounded-full scale-150"></div>
        <img
          src={`src/assets/weather-icons/${getWeatherIcon(icon)}`}
          alt="Weather icon"
          className="w-56 h-56 object-contain relative z-10 drop-shadow-[0_25px_25px_rgba(0,0,0,0.5)]"
        />
      </div>
    </div>
  );
};

export default CurrentWeather;
