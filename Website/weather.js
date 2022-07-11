"use strict"

$(document).ready(function () {

    // get current date
    var d = new Date();
    var month = d.getMonth() + 1;
    var day = d.getDate();
    var output =
        (day < 10 ? '0' : '') + day
        + '/' +
        (month < 10 ? '0' : '') + month
        + '/' +
        d.getFullYear()

    // get current time
    var dt = new Date();
    var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();

    var url = "https://api.openweathermap.org/data/2.5/weather?q=Amsterdam&appid=3b432d76373309b27d4048c1b4bb0c83"
    $.ajax({

        url: url,
        success: function (result) {

            $("#date").text(output);
            $("#time").text(time);

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
    $("#myBtn").click(function () {
        var city = $("#city").val();
        var url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=3b432d76373309b27d4048c1b4bb0c83"
        
        // get current time
        var dt = new Date();
        var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
        $.ajax({

            url: url,
            success: function (result) {

                $("#time").text(time);

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
    });

});


