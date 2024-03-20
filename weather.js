const inputBox = document.querySelector("#inp-box")
const searchBtn = document.querySelector("#search-btn")
let wicon = document.getElementById("weather-icon")
const weatherTemp = document.querySelector(".temp")
const weatherText = document.querySelector(".weather-text")
const humidity = document.querySelector(".humidity-rate")
const wind = document.querySelector(".wind-rate")
const show = document.querySelectorAll(".show")
const notFound = document.querySelector(".error")


async function checkWeather(city) {
    const api_key = "e3ec97f1d1d81cdd491d1e11dd045f8d";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    // fetching data 
    const response = await fetch(url);
    // to get response/data
    const data = await response.json();

    // logic for location not found
    if (data.cod == '404') {
        show.forEach((val) => {
            val.classList.add("hide")
        })
        notFound.classList.remove("hide")
    } else {
        show.forEach((val) => {
            val.classList.remove("hide")
        })
        notFound.classList.add("hide")
    }

    // variable to get values
    const tem = data.main.temp;
    const wtext = data.weather[0].description;
    const humy = data.main.humidity;
    const windSpeed = data.wind.speed;
    const check = data.weather[0].main;

    // console.log(data)

    // logic for icon change
    switch (check) {
        case "Smoke":
            wicon.src = "https://cdn0.iconfinder.com/data/icons/weather-596/132/weather-16-1024.png";
            break;
        case "Clouds":
            wicon.src = "https://cdn0.iconfinder.com/data/icons/weather-596/132/weather-05-1024.png";
            break;
        case "Thunderstorm":
            wicon.src = "https://cdn0.iconfinder.com/data/icons/weather-596/132/weather-04-1024.png";
            break;
        case "Rain":
            wicon.src = "https://cdn0.iconfinder.com/data/icons/weather-596/132/weather-38-1024.png";
            break;
        case "Clear":
            wicon.src = "https://cdn0.iconfinder.com/data/icons/weather-596/132/weather-39-1024.png";
            break;
        case "Snow":
            wicon.src = "https://cdn0.iconfinder.com/data/icons/weather-596/132/weather-35-1024.png";
            break;
        case "Haze":
            wicon.src = "https://cdn0.iconfinder.com/data/icons/weather-596/132/weather-10-1024.png";
            break;
        case "Drizzle ":
            wicon.src = "https://cdn0.iconfinder.com/data/icons/weather-596/132/weather-27-256.png";
            break;
    }

    // getting exact value from data 
    weatherTemp.innerHTML = `<span>${Math.floor(tem - 273.15)}°C</span>`;
    weatherText.innerHTML = `<p>${wtext}</p>`;
    humidity.innerHTML = `<span>${humy}%</span>`
    wind.innerHTML = `<span>${windSpeed}Km/H</span>`
}


// click event on search button
searchBtn.addEventListener("click", () => {
    checkWeather(inputBox.value);
})


