// OpenWeatherMap API details
const WEATHER_API_KEY = '4ec97b3938b2f16107dccf59bde91c16';
const LAT = 42.7315;
const LON = -73.686;
const WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${WEATHER_API_KEY}`;

// Scryfall API details
const SCRYFALL_URL = `https://api.scryfall.com/cards/random?q=game:paper+unique:cards`;

// --- Utility Functions ---

/**
 * Converts Kelvin to Celsius.
 * @param {number} k - Temperature in Kelvin.
 * @returns {number} Temperature in Celsius, rounded to 1 decimal place.
 */
function kelvinToCelsius(k) {
    return (k - 273.15).toFixed(1);
}

/**
 * Converts Kelvin to Fahrenheit.
 * @param {number} k - Temperature in Kelvin.
 * @returns {number} Temperature in Fahrenheit, rounded to 1 decimal place.
 */
function kelvinToFahrenheit(k) {
    return ((k - 273.15) * 9/5 + 32).toFixed(1);
}


// --- API Call Functions ---

/**
 * Fetches weather data from OpenWeatherMap API and displays it.
 */
function fetchWeatherData() {
    fetch(WEATHER_URL)
        .then(response => {
            if (!response.ok) {
                throw new Error('Weather API call failed: ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            // Extract required data (temperatures are in Kelvin by default)
            const currentTempK = data.main.temp;
            const feelsLikeTempK = data.main.feels_like;
            const highTempK = data.main.temp_max;
            const lowTempK = data.main.temp_min;
            const humidity = data.main.humidity;

            // Convert temperatures
            const currentTempC = kelvinToCelsius(currentTempK);
            const currentTempF = kelvinToFahrenheit(currentTempK);
            const feelsLikeTempC = kelvinToCelsius(feelsLikeTempK);
            const feelsLikeTempF = kelvinToFahrenheit(feelsLikeTempK);
            const highTempC = kelvinToCelsius(highTempK);
            const highTempF = kelvinToFahrenheit(highTempK);
            const lowTempC = kelvinToCelsius(lowTempK);
            const lowTempF = kelvinToFahrenheit(lowTempK);
            const kelvinTemp = currentTempK.toFixed(1);

            // Construct HTML to display the weather details
            const weatherHTML = `
                <p><strong>Current Temperature:</strong> ${currentTempC}°C / ${currentTempF}°F / ${kelvinTemp} K</p>
                <p><strong>Feels Like:</strong> ${feelsLikeTempC}°C / ${feelsLikeTempF}°F</p>
                <p><strong>Today's High:</strong> ${highTempC}°C / ${highTempF}°F</p>
                <p><strong>Today's Low:</strong> ${lowTempC}°C / ${lowTempF}°F</p>
                <p><strong>Humidity:</strong> ${humidity}%</p>
                <p class="description">Weather condition: ${data.weather[0].description}</p>
            `;

            document.getElementById('weather-details').innerHTML = weatherHTML;
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
            document.getElementById('weather-details').innerHTML = `<p class="error">Failed to load weather data. Please try again later.</p>`;
        });
}

/**
 * Fetches a random Magic: The Gathering card from Scryfall API and displays it.
 */
function fetchMTGCard() {
    fetch(SCRYFALL_URL)
        .then(response => {
            if (!response.ok) {
                throw new Error('Scryfall API call failed: ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            // Extract required data
            const cardName = data.name;
            const cardImageUri = data.image_uris ? data.image_uris.normal : 'placeholder.jpg'; // Use 'normal' image
            
            // TCGPlayer pricing details (Market Price is a good standard to display)
            const tcgPlayerPrice = data.prices.usd || 'N/A'; // Use 'usd' price
            
            // Construct HTML to display the card details
            const cardHTML = `
                <img src="${cardImageUri}" alt="${cardName}" class="card-image">
                <p><strong>Card Name:</strong> ${cardName}</p>
                <p><strong>TCGPlayer Market Price:</strong> $${tcgPlayerPrice} USD</p>
            `;

            document.getElementById('card-details').innerHTML = cardHTML;
        })
        .catch(error => {
            console.error("Error fetching MTG card data:", error);
            document.getElementById('card-details').innerHTML = `<p class="error">Failed to load MTG card data. Please try again later.</p>`;
        });
}

// Call the functions to execute on page load
document.addEventListener('DOMContentLoaded', () => {
    fetchWeatherData();
    fetchMTGCard();
});