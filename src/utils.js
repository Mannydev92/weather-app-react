// src/weatherUtils.js

export const getWeatherIcon = (apiIcon) => {
  // Diccionario de iconos que tienes descargados
  const icons = {
    "clear-day": "clear-day.svg",
    "clear-night": "clear-night.svg",
    "partly-cloudy-day": "partly-cloudy-day.svg",
    "partly-cloudy-night": "partly-cloudy-night.svg",
    cloudy: "cloudy.svg",
    rain: "rain.svg",
    snow: "snow.svg",
    wind: "wind.svg",
    fog: "fog.svg",
    thunderstorms: "thunderstorms.svg",
    "thunder-rain": "thunderstorms-rain.svg",
    "thunder-showers-day": "thunderstorms-day-overcast-rain.svg",
    "thunder-showers-night": "thunderstorms-night-overcast-rain.svg",
  };

  if (icons[apiIcon]) {
    return icons[apiIcon];
  }

  if (apiIcon.includes("thunder")) return icons.thunderstorms;
  if (apiIcon.includes("snow")) return icons.snow;
  if (apiIcon.includes("cloud")) return icons.cloudy;
  if (apiIcon.includes("rain") || apiIcon.includes("shower")) return icons.rain;

  return icons.cloudy;
};

export const getWeatherDescription = (description) => {
  if (description.includes("clear")) return "Sunny";
  if (description.includes("cloud")) return "Cloudy";
  if (description.includes("rain")) return "Rainy";
  if (description.includes("snow")) return "Snow";
  if (description.includes("thunder")) return "Storm";
  if (description.includes("wind")) return "Windy";
};

export const capitalizeCityName = (cityName) => {
  if (!cityName) return "";

  return cityName
    .trim()
    .split(" ")
    .filter((word) => word.length > 0)
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(" ");
};

export const formatWeatherDatetime = (weather) => {
  const splitDateTime = weather.datetime.split(":");
  if (splitDateTime[0] > 0 && splitDateTime[0] < 12) {
    splitDateTime[2] = "AM";
  } else if (splitDateTime[0] === "00") {
    splitDateTime[2] = "";
  } else {
    splitDateTime[2] = "PM";
  }
  return splitDateTime[0] + ":" + splitDateTime[1] + " " + splitDateTime[2];
};

export const getDayOfTheWeek = (dateString) => {
  // .toISOString() nos da "2026-03-22T..." y con .split('T')[0] nos quedamos solo con la fecha.
  const todayDateString = new Date().toISOString().split("T")[0];

  // 2. Si el string que recibimos es exactamente igual al de hoy, devolvemos "Today"
  if (dateString === todayDateString) {
    return "Today";
  }

  const date = new Date(dateString);
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const dayIndex = date.getDay();
  return daysOfWeek[dayIndex];
};
