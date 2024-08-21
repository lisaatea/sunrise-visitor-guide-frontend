const APIkey = "c18cbf911cb8bb14390060ae314fd041";
const baseUrl = "https://api.openweathermap.org/data/2.5/weather";

export const processServerResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
};

export function getCurrentWeather(lat, lon) {
  const url = `${baseUrl}?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&units=imperial&appid=${APIkey}`;

  return fetch(url)
    .then(processServerResponse)
    .then((data) => formatWeatherData(data))
    .catch(console.error);
}

function formatWeatherData(data) {
  function formatTime(timestamp) {
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  return {
    temperature: Math.round(data.main.temp),
    description: data.weather[0].main,
    icon: data.weather[0].icon,
    sunrise: formatTime(data.sys.sunrise),
    sunset: formatTime(data.sys.sunset),
  };
}
