
var dayWeather = $(".card-body");
var weatherSelect = $("#weatherForm")
var citySelect = $("#citySelect");



var getWeather = function (x) {
    console.log(dayWeather);
    dayWeather.html("") 
    console.log(dayWeather)
    fetch(x)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var city = document.createElement("h3");
            city.textContent = `${data.name} ${moment().format('MM/DD/YYYY')}`;
            var temp = document.createElement("p");
            temp.textContent = `Temp: ${data.main.temp}`
            var wind = document.createElement("p");
            wind.textContent = `Wind: ${data.wind.speed}`;
            var humidity = document.createElement("p");
            humidity.textContent = `Humidity: ${data.main.humidity}`;
            var uvIndex = document.createElement("p");
            uvIndex.textContent = ``;
            dayWeather.append(city, temp, wind, humidity, uvIndex);
        });
}


var handleFormSubmit = function (event) {
    event.preventDefault();
    var city = citySelect.val();
    var weatherRequest = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=dcff0d0e17a31253045b9b8c99cc06a2&units=imperial`;
    getWeather(weatherRequest);

}
weatherSelect.on('submit', handleFormSubmit)
