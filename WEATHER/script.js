document.addEventListener('DOMContentLoaded', () => {
    const cityInput = document.getElementById("city-input");
    const getWeatherBtn = document.getElementById("get-weather-btn");
    const weatherInfo = document.getElementById("weather-info");
    const cityNameDisplay = document.getElementById("city-name");
    const temperatureDisplay = document.getElementById("temperature");
    const descriptionDisplay = document.getElementById("description");
    const errorMessage = document.getElementById("error-message");

    const API_KEY = "5f56d525d1619d0a2cd2eac4ce55588e"

    getWeatherBtn.addEventListener('click', async () => {
        const city = cityInput.ariaValueMax.trim()
        if(!city) return;

        try{
            const weatherData = await fetchWeatherData(city);
            displayWeatherData(weatherData);
        } catch (error){
            showError();
        }
    });

    async function fetchWeatherData(city){
        //gets the data
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

        const response = fetch(url);
        console.log(typeof response);
        console.log("RESPONSE", response);
    }
//13 min
    function displayWeatherData(weatherData){
        //display
    }
})