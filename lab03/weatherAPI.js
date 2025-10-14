function kelvinToUsefulString(kelvin) {
   let rString = "";
   let celsius = kelvin - 273.15;
   let farenheit = celsius*1.8 + 32;
   rString += celsius.toFixed(2) + "°C/" + farenheit.toFixed(2) + "°F/" + kelvin.toFixed(2) + "°K";
   return rString;
}

let weatherDataStr = "";
let scryfallDataStr = "";
let cardImage = "";
$(document).ready(function () {
   console.log('page loaded');
   $.ajax({
      url: 'https://api.openweathermap.org/data/2.5/weather?lat=42.7315&lon=-73.686&appid=4ec97b3938b2f16107dccf59bde91c16',
      method: 'get',
      dataType: 'json',
      success: function (data) {
         console.log(data);
         weatherDataStr += "The Current Temperature Is: " + kelvinToUsefulString(data["main"]["temp"]) + "<br><br>";
         weatherDataStr += "But it Feels Like: " + kelvinToUsefulString(data["main"]["feels_like"]) + "<br><br>";
         weatherDataStr += "Today's High is: " + kelvinToUsefulString(data["main"]["temp_max"]) + "<br><br>";
         weatherDataStr += "Today's Low is: " + kelvinToUsefulString(data["main"]["temp_min"]) + "<br><br>";
         weatherDataStr += "The Humidity is: " + data["main"]["humidity"] + "%<br>";
         document.getElementById("weather-data").innerHTML = weatherDataStr;  
      },
      error: function (err) {
         console.log(err);
      }
   });

});
$(document).ready(function () {
   $.ajax({
      url: 'https://api.scryfall.com/cards/random?q=game%3Apaper+unique%3Acards',
      method: 'get',
      dataType: 'json',
      success: function (data) {
         console.log(data);
         cardImage = '<img src="' + data["image_uris"]["normal"] + '">';
         scryfallDataStr += "Your random card is: " + data["name"] + "<br>";
         scryfallDataStr += "Your random card is worth: $" + data["prices"]["usd"];
         document.getElementById("scryfall-data").innerHTML = scryfallDataStr;
         document.getElementById("scryfall-img").innerHTML = cardImage;
      },
      error: function (err) {
         console.log(err);
      }
   })

});