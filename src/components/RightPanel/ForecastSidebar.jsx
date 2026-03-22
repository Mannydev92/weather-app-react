import DailyForecastItem from "./DailyForecastItem";
const ForecastSidebar = ({ weather }) => {
  const sevenDays = weather.days.slice(0, 7);

  return (
    <div className="bg-card-bg rounded-[2rem] p-8 h-full shadow-lg">
      <h3 className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-6">
        7-Day Forecast
      </h3>

      <div className="flex flex-col">
        {sevenDays.map((day) => (
          <DailyForecastItem key={day.datetime} day={day} />
        ))}
      </div>
    </div>
  );
};

export default ForecastSidebar;
