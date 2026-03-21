const AirConditions = ({ weatherData }) => {
  // Extraemos los datos de tus variables (ajusta los nombres si tu API es distinta)
  const realFeel = weatherData.currentConditions.feelslike;
  const windSpeed = weatherData.currentConditions.windspeed;
  const humidity = weatherData.currentConditions.humidity;
  const uvIndex = weatherData.currentConditions.uvindex;

  return (
    /* BG-CARD-BG: Usamos la variable que definimos en el @theme del index.css
       ROUNDED-[2REM]: Esquinas muy redondeadas como el resto de la app.
       P-8: Espaciado interno generoso.
    */
    <div className="bg-card-bg rounded-[2rem] p-8 shadow-lg w-full">
      {/* Título de la sección */}
      <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-6">
        Air Conditions
      </div>

      {/* GRID: Creamos una rejilla de 2 columnas
          GAP-Y-8: Espacio vertical entre filas
          GAP-X-4: Espacio horizontal entre columnas
      */}
      <div className="grid grid-cols-2 gap-y-8 gap-x-4">
        {/* Item: Real Feel */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 text-slate-500">
            <span className="text-lg">🌡️</span>
            <span className="text-sm font-medium">Real Feel</span>
          </div>
          <span className="text-2xl font-bold text-white ml-7">
            {Math.round(realFeel)}°
          </span>
        </div>

        {/* Item: Wind */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 text-slate-500">
            <span className="text-lg">💨</span>
            <span className="text-sm font-medium">Wind</span>
          </div>
          <span className="text-2xl font-bold text-white ml-7">
            {windSpeed} km/h
          </span>
        </div>

        {/* Item: Humidity */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 text-slate-500">
            <span className="text-lg">💧</span>
            <span className="text-sm font-medium">Humidity</span>
          </div>
          <span className="text-2xl font-bold text-white ml-7">
            {humidity}%
          </span>
        </div>

        {/* Item: UV Index */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 text-slate-500">
            <span className="text-lg">☀️</span>
            <span className="text-sm font-medium">UV Index</span>
          </div>
          <span className="text-2xl font-bold text-white ml-7">{uvIndex}</span>
        </div>
      </div>
    </div>
  );
};

export default AirConditions;
