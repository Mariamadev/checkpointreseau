const apikey = "0b24b6e3c13ca6534955e3a860b9f70b";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="; // Added units=metric to get temperature in Celsius

const searchBox = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + '&appid=' + apikey);
    if (!response.ok) {
        console.error("Failed to fetch data");
        return;
    }

    const data = await response.json();

    console.log(data);
    document.querySelector(".city").classList.remove('error');
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
} 

searchButton.addEventListener("click", () => {
    checkWeather(searchBox.value);
});

// Optionally, you can call checkWeather() with a default city when the page loads
checkWeather("Paris");

