import { useState, useEffect } from "react";
import WeatherCard from "./components/WeatherCard/WeatherCard";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";

// Funcionalidad Core	Permitir la búsqueda de clima por nombre de ciudad.
// Integración	Consumir datos reales de la API de OpenWeatherMap.
// Estados de UI	Implementar indicadores visuales para: Cargando ⏳, Éxito ✅ y Error (ej: ciudad no encontrada) ❌.
// Visualización	Mostrar al menos: Temperatura actual, humedad y una descripción del clima.

function App() {
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
  //We save the last city we searched or a default one if is the first time the user open the app and there is no city saved in local storage
  const [city, setCity] = useState(
    localStorage.getItem("lastCity") || "Madrid",
  );
  //State to save the object with all the data of the city we searched
  const [weather, setWeather] = useState(null);
  //This state will be use to know if we should show or not a loader to the user.
  const [loading, setLoading] = useState(false);
  //This state will be use to show the user an error had ocurred
  const [error, setError] = useState(false);
  const [unit, setUnit] = useState("C");
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
    fetchWeather();
  }, [city]);

  return (
    <>
      <NavBar searchCity={setCity}></NavBar>
      {loading && <p>Cargando...</p>}
      {error && <p>Ciudad no encontrada!</p>}
      {weather && <WeatherCard weatherData={weather} />}
    </>
  );
}

export default App;
