"use strict"

const url = "https://api.openweathermap.org/data/2.5/weather?q=Drempt&appid=3b432d76373309b27d4048c1b4bb0c83"
$.ajax({
    url: url,
    success: function (result) {
        $("#location").text(result.name);

        let C = Math.round(result.main.temp - 273);
        let Celcius = C.toString();
        $("#temp").text(Celcius);

        let windSpeed = Math.round(result.wind.speed * 3.6)
        let wind = windSpeed.toString();
        $("#wind").text(wind);

        $("#sky").text(result.weather[0].description);
    }
})