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
