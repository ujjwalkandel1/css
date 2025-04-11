document.addEventListener('DOMContentLoaded', () => {
    const cityInput = document.getElementById("city-input");
    const getWeatherBtn = document.getElementById("get-weather-btn");
    const weatherInfo = document.getElementById("weather-info");
    const cityNameDisplay = document.getElementById("city-name");
    const temperatureDisplay = document.getElementById("temperature");
    const descriptionDisplay = document.getElementById("description");
    const errorMessage = document.getElementById("error-message");

    const API_KEY = "5f56d525d1619d0a2cd2eac4ce55588e"

    getWeatherBtn.addEventListener('click', () => {
        const city = cityInput.ariaValueMax.trim()
        if(!city) return;
    })

    function fetchWeatherData(city){
        //gets the data
    }

    function displayWeatherData(weatherData){
        //display
    }
})