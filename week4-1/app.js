document.getElementById('btn').addEventListener('click', function() {
    let city = document.getElementById('cityInput').value;
    let apiKey = 'YOUR_API_KEY'; // Remember to replace 'YOUR_API_KEY' with your actual API key
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
        document.getElementById('weather-info').innerHTML = `
            <p>Weather Description: ${weather}</p>
            <p>Temperature: ${temp} °C</p>
            <p>Wind Speed: ${windSpeed} m/s</p>
        `;
    })
    .catch(error => {
        console.log(error);
        document.getElementById('weather-info').innerHTML = `<p>Error getting weather data: ${error.message}</p>`;
    });
});
