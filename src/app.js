function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = timestamp.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = timestamp.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Satursday",
  ];
  let day = days[date.getday()];
  return `${day} ${hours}:${minutes}`;
}

function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperatureNumber");
  temperatureElement.innerHTML = Math.round(
    response.data.temperature.feels_like
  );

  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.city;

  let temperatureMinimumElement = document.querySelector("#temperatureMinimum");
  temperatureMinimumElement.innerHTML = response.data.temperature.minimum;

  let temperatureMaximumElement = document.querySelector("#temperatureMaximum");
  temperatureMaximumElement.innerHTML = response.data.temperature.maximum;

  let humidityElement = document.querySelector("#humidityElement");
  humidityElement.innerHTML = response.data.temperature.humidity;

  let windElement = document.querySelector("#windElement");
  windElement.innerHTML = response.data.wind;

  let dayTimeElement = document.querySelector("#dayTime");
  dayTimeElement.innerHTML = formatDate(response.data.time * 1000);
}

let apiKey = "3ea3aa909t0c294736f1b2o85fbc5802";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=Lisbon&key=3ea3aa909t0c294736f1b2o85fbc5802&units=metric`;

axios.get(apiUrl).then(displayTemperature);
