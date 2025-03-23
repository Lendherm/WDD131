document.addEventListener("DOMContentLoaded", () => {
    const temperatureElement = document.querySelector('#temperature');
    const weatherConditionsElement = document.querySelector('#weather-conditions');
    const windSpeedElement = document.querySelector('#wind-speed');
    const feelsLikeElement = document.querySelector('#feels-like');

    if (!temperatureElement || !weatherConditionsElement || !windSpeedElement || !feelsLikeElement) {
        console.error("Uno o más elementos no existen en el DOM.");
        return;
    }

    const apiKey = '23c5b55d5da420cffada3e9319b79193'; // Reemplaza con tu API key
    const city = 'Antananarivo'; // Cambia a la ciudad que desees
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    async function fetchWeather() {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(await response.text());
            }
            const data = await response.json();
            console.log(data);
            displayWeather(data);
        } catch (error) {
            console.error("Error al obtener los datos del clima:", error);
            displayError('Failed to fetch weather data. Please try again later.');
        }
    }

    function displayWeather(data) {
        if (!data || !data.main || !data.weather || !data.wind) {
            console.error("Datos del clima inválidos");
            return;
        }
    
        // Mostrar la temperatura y la sensación térmica en diferentes lugares
        temperatureElement.textContent = `${Math.round(data.main.temp)} °C`;  // Temperatura
        feelsLikeElement.textContent = `${Math.round(data.main.feels_like)} °C`;  // Sensación térmica
        
        const description = data.weather[0].description;
        weatherConditionsElement.textContent = description.charAt(0).toUpperCase() + description.slice(1);
        
        // Convertir la velocidad del viento a km/h
        const windSpeedInKmh = (data.wind.speed * 3.6).toFixed(1);
        windSpeedElement.textContent = `${windSpeedInKmh} km/h`;
    }
    
    function displayWeather(data) {
        if (!data || !data.main || !data.weather || !data.wind) {
            console.error("Datos del clima inválidos");
            return;
        }
    
        // Mostrar la temperatura con un icono colorido
        temperatureElement.innerHTML = `<i class="wi wi-thermometer" style="color: #ff4500;"></i> ${Math.round(data.main.temp)} °C`;
    
        // Mostrar la sensación térmica con un icono colorido
        feelsLikeElement.innerHTML = `<i class="wi wi-thermometer-exterior" style="color: #ff6347;"></i> ${Math.round(data.main.feels_like)} °C`;
        
        // Mostrar las condiciones del clima (nublado, soleado, etc.)
        const description = data.weather[0].description;
        
        let conditionIcon = "wi-day-sunny";  // Por defecto, usamos el sol
        let iconColor = "#FFD700";  // Color del sol (amarillo dorado)
    
        if (description.includes("cloud")) {
            conditionIcon = "wi-cloudy";  // Nube
            iconColor = "#A9A9A9";  // Color gris para las nubes
        } else if (description.includes("rain")) {
            conditionIcon = "wi-rain";  // Lluvia
            iconColor = "#4682B4";  // Color azul para lluvia
        }
        
        weatherConditionsElement.innerHTML = `<i class="wi ${conditionIcon}" style="color: ${iconColor};"></i> ${description.charAt(0).toUpperCase() + description.slice(1)}`;
    
        // Convertir la velocidad del viento a km/h y agregar un icono colorido
        const windSpeedInKmh = (data.wind.speed * 3.6).toFixed(1);
        windSpeedElement.innerHTML = `<i class="wi wi-windy" style="color: #1E90FF;"></i> ${windSpeedInKmh} km/h`;
    }
    
    
    function displayError(message) {
        const errorElement = document.createElement('div');
        errorElement.classList.add('error-message');
        errorElement.textContent = message;
        document.body.appendChild(errorElement);
    }

    fetchWeather();
});
