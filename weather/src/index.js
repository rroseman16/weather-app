
let now = new Date();
let h2 = document.querySelector("h2");
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = days[now.getDay()];

let hours = now.getHours();
if (hours < 10) {
    hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
    minutes = `0${minutes}`;
}

h2.innerHTML = `${day} ${hours}:${minutes}`;

function searchCity(event) {
    event.preventDefault();
    let city = document.querySelector("#searchCity");
    let h1 = document.querySelector("h1");
    h1.innerHTML = `${city.value}`;
    let apiKey = "690d8c5ecbedebe9b6af0121cdf0ffb4";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&units=imperial&appid=${apiKey}`;
    axios.get(apiUrl).then(showTemperature);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", searchCity);

function getCurrentPosition() {
    navigator.geolocation.getCurrentPosition(showPosition);
}

function showPosition(position) {
    let apiKey = "690d8c5ecbedebe9b6af0121cdf0ffb4";
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;
    axios.get(apiUrl).then(showTemperature);
}

function showTemperature(response) {
    let temperature = Math.round(response.data.main.temp);
    let h3 = document.querySelector("h3");
    h3.innerHTML = `${temperature}°F`;
    let h1 = document.querySelector("h1");
    h1.innerHTML = `${response.data.name}`;
}

let currentLocation = document.querySelector("#find-me");
currentLocation.addEventListener("click", getCurrentPosition)


//function showWeather(response) {
//let weather = (response.data.weather.description);
//let h4 = document.querySelector("h4");
//h4.innerHTML = `${weather}`;
//}