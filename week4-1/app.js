document.getElementById('btn').addEventListener('click', function() {
    let city = document.getElementById('city-info').value;
    let apiKey = 'af0135b4b614ba0e00a6dac2bf540b64'; 
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        let weather = data.weather[0].description;
        let temp = data.main.temp;
        let windSpeed = data.wind.speed;

        // Create a new div element for the weather information
        let newWeatherDiv = document.createElement('div');
        newWeatherDiv.classList.add('weather-entry'); // Add a class for CSS

        // Set the innerHTML of the new div
        newWeatherDiv.innerHTML = `
            <p>Weather Description: ${weather}</p>
            <p>Temperature: ${temp} °C</p>
            <p>Wind Speed: ${windSpeed} m/s</p>
        `;

        // Append the new div to the weather-info container
        document.getElementById('weather-info').appendChild(newWeatherDiv);

        // Clear the city input text box
        document.getElementById('city-info').value = '';
    })
    .catch(error => {
        console.log(error);
        document.getElementById('weather-info').innerHTML = `<p>Error getting weather data: ${error.message}</p>`;
    });
});