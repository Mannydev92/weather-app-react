import { useState, useEffect } from "react";
import CurrentWeather from "./components/MainContent/CurrentWeather";
import TodayForecast from "./components/MainContent/HourlyForecast/TodayForecast";
import "./App.css";
import SearchBar from "./components/MainContent/SearchBar";

function App() {
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  const [city, setCity] = useState(
    localStorage.getItem("lastCity") || "Madrid",
  );
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [now, setNow] = useState(Date.now());

  const URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/?unitGroup=metric&key=${API_KEY}`;

  const fetchWeather = async () => {
    //We set loading to because we still dont have the needed data.
    setLoading(true);
    setError(false);
    try {
      //We wait for the returned promise
      const response = await fetch(URL);
      //If something goes wrong, we throw an error
      if (!response.ok) throw new Error("City not found!");
      //If everything goes right we wait till the promise is resolved
      const data = await response.json();
      //Promise is resolved and now we can use the data because is not a json
      console.log(data);
      setWeather(data);
      localStorage.setItem("lastCity", city);
      //If there was an error before, catch will take it and the code inside will run
    } catch (error) {
      console.error("Error:", error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  //This will be triggered when we first open the app (no cities in local storage)
  useEffect(() => {
    setNow(Date.now());
    fetchWeather();
  }, [city]);

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>City not found!</p>}
      <SearchBar searchCity={setCity} />
      {weather && <CurrentWeather weatherData={weather} />}
      {weather && <TodayForecast weather={weather} now={now} />}
    </>
  );
}

export default App;
