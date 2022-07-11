"use strict"

const url = "https://api.openweathermap.org/data/2.5/weather?q=Drempt&appid={API key}"
$.ajax({
    url: url,
    succes: function(result){
        console.log(result);
    }
})