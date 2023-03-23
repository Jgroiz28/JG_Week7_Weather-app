function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperatureNumber");
  temperatureElement.innerHTML = Math.round(
    response.data.temperature.feels_like
  );
  console.log(temperatureElement);

  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.city;
  console.log(cityElement);

  let temperatureMinimumElement = document.querySelector("#temperatureMinimum");
  temperatureMinimumElement.innerHTML = response.data.temperature.minimum;
  console.log(temperatureMinimumElement);

  let temperatureMaximumElement = document.querySelector("#temperatureMaximum");
  temperatureMaximumElement.innerHTML = response.data.temperature.maximum;
  console.log(temperatureMaximumElement);

  let humidityElement = document.querySelector("#humidityElement");
  humidityElement.innerHTML = response.data.temperature.humidity;
  console.log(humidityElement);

  let windElement = document.querySelector("#windElement");
  windElement.innerHTML = response.data.wind;
  console.log(windElement);
}

let apiKey = "3ea3aa909t0c294736f1b2o85fbc5802";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=Lisbon&key=3ea3aa909t0c294736f1b2o85fbc5802&units=metric`;

axios.get(apiUrl).then(displayTemperature);
