// password for geo website is B*12; link is http://api.positionstack.com/v1/forward/?access_key=f7684ffee4822effc307887dadfa27ef&query=Sachse,TX
//changed google PW to B****!******; project-name: Bootcamp homework; project ID: bootcamp=homework-328003
var cityButton = document.getElementById('enterCity');
// var bigWindow = document.getElementById('input2')
// var fetchOmdbButton = document.getElementById('searchOmdbButton');
var fahrTemp
// var enterYear0 = document.getElementById('enterYear');
// var movieTitle;
var object1;
// var inputVal = '2021'
var date = moment().format("dddd, MMMM Do");
var day;
i = 0

function getCityWeather () {//this part determines lat and longitude from city name and state
var inputVal = document.getElementById('myInput').value;
cityAndState = inputVal.split(' ');
console.log(cityAndState[0] + ' ' + cityAndState[1]);
state = 'TX';
var city = cityAndState[0];
var state = cityAndState[1];
var requestLocation = 'http://api.openweathermap.org/geo/1.0/direct?q=' + city + ',' + state + ',US&appid=e17175c3afe7a2e923b08616e362f24c';
fetch(requestLocation)
  .then(function getCityLocation(response) {return response.json();})
  .then(function(data) {var object1 = data;
  console.log(object1[0].lat + ' ' + object1[0].lon)});
  var lat = 32.9762; //object1[0].lat; 
  var lon = -96.5953; //object1[0].lon;
  console.log(typeof(object1[0].lat));
  var stringLat = object1[0].lat;
  console.log(stringLat);
  var stringLon = object1[0].lon;
  lat = parseFloat(stringLat);
  lon = parseFloat(stringLon);
var requestURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&exclude=hourly,minutely&appid=e17175c3afe7a2e923b08616e362f24c';
// cityValue0.setAttribute('id', 'cityId0');
// var entry0 = document.getElementById('cityId0').value;
var cityEntry = 'city' + i;
localStorage.setItem(cityEntry, inputVal);
var cityValue0 = document.createElement('button');
var cityHyperLink = document.createElement('a');
cityHyperLink.setAttribute('id', 'hyper');
document.getElementById('sidenav').appendChild(cityHyperLink);
cityValue0.setAttribute('class', 'searchParameter');
cityValue0.setAttribute('style', 'margin-left: 0px; width: 120px; background-color: lightgray; text-align: center; font-family: Arial, Helvetica, sans-serif; color: black;')
cityHyperLink.setAttribute('href', requestURL);
// cityValue0.setAttribute('style', 'background-color: gray; color: white; font-family: Arial, Helvetica, sans-serif; margin-left: 10%; width: 80%')
cityValue0.textContent = inputVal;
console.log(cityValue0);
document.getElementById('hyper').appendChild(cityValue0);
i++;

document.getElementById('bigWindow').textContent = '';

fetch(requestURL)

  .then(function getCityWeather(response) {
    return response.json();
  })
  .then(function (data) {var object1 = data;
    console.log(data);
    var weatherData = document.createElement('div');    
    weatherData.setAttribute('style', 'border: orange; border-width:5px; border-style:solid; width: 94.5%;')
    weatherData.setAttribute('id', 'mainWindow')
    var unixDaty = object1.current.dt;
    var daty = moment.unix(unixDaty).format('l');
    var icon = object1.current.weather[0].icon;
    var displayIcon = document.createElement('img');
    displayIcon.setAttribute('width', '50px');
    var iconURL = 'http://openweathermap.org/img/w/' + icon + '.png';
    var realImage ='<img src =' + iconURL + '>';
    console.log(object1.current.weather);
    var kelvinTemp = object1.current.temp;
    celcTemp = (kelvinTemp - 273.15)*100; 
    var fahrTemp = Math.round(celcTemp*1.8 + 3200);
    var tempy = 0.01*parseInt(fahrTemp);    
    // console.log(tempNumber);
    var windy = object1.current.wind_speed;
    var humy = object1.current.humidity;
    var uvIndexy = object1.current.uvi;
    var uvIndexyColor;
    if (uvIndexy < 3) {uvIndexyColor = 'green'}
    else if (uvIndexy > 7) {uvIndexyColor = 'red'}
    else {uvIndexyColor = 'yellow'}
    console.log(uvIndexyColor);
    // uvIndexy.setAttribute('style', 'background-color: green;')
    weatherData.innerHTML = inputVal + ' (' + daty + ') ' + realImage + '<br> Temp: ' + tempy + '\u00B0' + 'F ' + '<br> Wind: ' + windy + ' MPH ' + '<br> Humidity: ' + humy + '%' + '<br> UV Index: ' + '<br> UV Index: ' + '<span style = "background-color: ' + uvIndexyColor + ';">' + uvIndexy + '</span>'// uvIndexy //tried + '<style = background-color: green;>'

    document.getElementById('bigWindow').appendChild(weatherData);
    var createSpacing = document.createElement('p');
    createSpacing.textContent = ' 5 day forecast';
    document.getElementById('bigWindow').appendChild(createSpacing);

    var Day1 = document.createElement('div');
    Day1.setAttribute('class', 'firstDay');
    var unixDaty1 = unixDaty + 86400;
    var daty = moment.unix(unixDaty1).format('l');
    var icon = object1.daily[0].weather[0].icon;
    console.log(object1.current.weather);
    var kelvinTemp = object1.daily[0].temp.day;
    celcTemp = (kelvinTemp - 273.15)*100; 
    var fahrTemp = Math.round(celcTemp*1.8 + 3200);
    var tempy = 0.01*parseInt(fahrTemp);
    var humy = object1.daily[0].humidity;
    var windy = object1.daily[0].wind_speed;
    // var uvIndexy = object1.daily[0].uvi;
    var displayIcon = document.createElement('img');
    displayIcon.setAttribute('alt', 'icon did not load');
    var iconURL = 'http://openweathermap.org/img/w/' + icon + '.png';
    var realImage ='<img src =' + iconURL + '>';
    Day1.innerHTML = daty + '<br>' + realImage + '<br>Temp: ' + tempy + '\u00B0' + 'F ' + '<br>Wind: ' + windy + 'MPH ' + '<br>Humidity: ' + humy + '%';
    document.getElementById('bigWindow').appendChild(Day1);
    // yes, I know I can do this code more dry. Not to repeat same thing 5 times. I will do it when I have more time. I am too far behind
    var Day2 = document.createElement('div');
    // Day2.innerHTML = object1;
    Day2.setAttribute('class', 'firstDay')
    var unixDaty1 = unixDaty + 2*86400;
    var daty = moment.unix(unixDaty1).format('l');
    var icon = object1.daily[1].weather[0].icon;
    console.log(object1.current.weather);
    var kelvinTemp = object1.daily[1].temp.day;
    celcTemp = (kelvinTemp - 273.15)*100; 
    var fahrTemp = Math.round(celcTemp*1.8 + 3200);
    var tempy = 0.01*parseInt(fahrTemp);
    var humy = object1.daily[1].humidity;
    var windy = object1.daily[1].wind_speed;
    // var uvIndexy = object1.daily[1].uvi;
    var displayIcon = document.createElement('img');
    displayIcon.setAttribute('alt', 'icon did not load');
    var iconURL = 'http://openweathermap.org/img/w/' + icon + '.png';
    var realImage ='<img src =' + iconURL + '>';
    Day2.innerHTML = daty + '<br>' + realImage + '<br>Temp: ' + tempy + '\u00B0' + 'F ' + '<br>Wind: ' + windy + 'MPH ' + '<br>Humidity: ' + humy + '%';
    document.getElementById('bigWindow').appendChild(Day2);
    var Day3 = document.createElement('div');
    // Day3.innerHTML = object1;
    Day3.setAttribute('class', 'firstDay');
    var unixDaty1 = unixDaty + 3*86400;
    var daty = moment.unix(unixDaty1).format('l');
    var icon = object1.daily[2].weather[0].icon;
    console.log(object1.current.weather);
    var kelvinTemp = object1.daily[2].temp.day;
    celcTemp = (kelvinTemp - 273.15)*100; 
    var fahrTemp = Math.round(celcTemp*1.8 + 3200);
    var tempy = 0.01*parseInt(fahrTemp);
    var humy = object1.daily[2].humidity;
    var windy = object1.daily[2].wind_speed;
    // var uvIndexy = object1.daily[2].uvi;
    var displayIcon = document.createElement('img');
    displayIcon.setAttribute('alt', 'icon did not load');
    var iconURL = 'http://openweathermap.org/img/w/' + icon + '.png';
    var realImage ='<img src =' + iconURL + '>';
    Day3.innerHTML = daty + '<br>' + realImage + '<br>Temp: ' + tempy + '\u00B0' + 'F ' + '<br>Wind: ' + windy + 'MPH ' + '<br>Humidity: ' + humy + '%';
    document.getElementById('bigWindow').appendChild(Day3);
    var Day4 = document.createElement('div');
    Day4.textContent = 'day 4';
    Day4.setAttribute('id', 'forthDay')
    Day4.setAttribute('style', 'border: brown; border-width:5px; border-style:solid; width: 15.7%;')
    document.getElementById('bigWindow').appendChild(Day4);
    var Day5 = document.createElement('div');
    Day5.textContent = 'day 5';
    Day5.setAttribute('id', 'fifthDay')
    Day5.setAttribute('style', 'border: yellow; border-width:5px; border-style:solid; width: 15.7%;')
    document.getElementById('bigWindow').appendChild(Day5);
  }) // end second then function
    $('#bigWindow').text(date)
    
        //weatherData.textContent = object1;
    

    

}

// event listener fetchImdbDrama.addEventListener('click', getApiDataImdb);

