
$(document).ready(function() {
document.body.style.backgroundColor = "black";
document.getElementById("button").onclick = function() {getZip()};
document.getElementById("button2").onclick = function() {getType()};
});

var t = 'f';
function getType(){
  if (t == 'f'){
     t = 'c';
  }
  else {
     t = 'f';
    }
getZip();
  }

function getZip() {
    document.getElementById("button").innerHTML = "Submit";
$(document).ready;
    $.simpleWeather({
      location: document.getElementById('zip').value,
      woeid: '',
      unit: t,

      success: function(weather) {
        html = '<h2><i class="icon-'+weather.code+'"></i> '+weather.temp+'&deg;'+weather.units.temp+'</h2>';
        html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
        html += '<li class="currently">'+weather.currently+'</li>';
        html += '<li>'+weather.wind.direction+' '+weather.wind.speed+' '+weather.units.speed+'</li></ul>';
            if (weather.currently.includes('Cloudy')){
                document.body.style.backgroundImage = "url('http://cdn.weatheravenue.com/img/background/background.jpg')";
              }
            if (weather.currently.includes('Sunny') || weather.currently.includes('Clear')) {
                console.log('sunny');
                document.body.style.backgroundImage = "url('http://runitlikeamom.com/wp-content/uploads/2016/03/Sunshine-and-Rainbows.jpg')";
              }
            if (weather.currently.includes('Rain') || weather.currently.includes('Showers') || weather.currently.includes('Thunderstorms')){
                console.log('rain');
                document.body.style.backgroundImage = "url('https://wallpapercave.com/wp/oScSlk7.jpg')";
            }
            if (weather.currently.includes('Snow') || weather.currently.includes('Showers') || weather.currently.includes('Thunderstorms')){
                console.log('rain');
                document.body.style.backgroundImage = "url('http://findingfabulous.co.za/wp-content/uploads/2016/06/DSC_0408.jpg')";
              }
            else{
              console.log('fail');
            }

        $("#weather").html(html);
      },
      error: function(error) {
        $("#weather").html('<p>'+error+'</p>');
      }
    });
}
