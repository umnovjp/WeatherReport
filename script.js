//changed google PW to B****!******; project-name: Bootcamp homework; project ID: bootcamp=homework-328003
var cityButton = document.getElementById('enterCity');
var fahrTemp
// var enterYear0 = document.getElementById('enterYear');
usStates = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY']
var object1;
var lat;
var lon;
var city;
var state;
var date = moment().format("dddd, MMMM Do");
var day;
i = 0;

function getCityWeather () {//this part determines lat and longitude from city name and state. next time I will write a global function
var inputVal = document.getElementById('myInput').value;
cityAndState = inputVal.split(',');
state2Letters = inputVal.slice(-2);
stateUpperLetters = state2Letters.toUpperCase();
console.log(stateUpperLetters);
console.log(cityAndState[0] + ' ' + cityAndState[1]);
if (!usStates.includes(stateUpperLetters)) {console.log('there is no such state')};
var city = cityAndState[0];
var state = cityAndState[1]; 

var cityEntry = 'city' + i; //former line 40
localStorage.setItem(cityEntry, city);
// var cityValueI = 'cityValue' + i;
cityValue0 = document.createElement('button'); 
cityValue0.setAttribute('class', 'searchParameter');
cityValue0.setAttribute('style', 'margin-left: 20px; width: 120px; font-size: 16px; background-color: lightgray; text-align: center; font-family: Arial, Helvetica, sans-serif; color: black;')
cityValue0.setAttribute('id', cityEntry);
// i++;
cityValue0.textContent = city + ', ' + state;
console.log(cityValue0.textContent + ' i = ' + i + ' cityEntry ' + cityEntry);
document.getElementById('sidenav').appendChild(cityValue0); 
i++;  // former line 51

var firstCity = document.getElementById(cityEntry); //former line 52
firstCity.addEventListener('click', whichButton);
function whichButton(event) {//console.log(event.currentTarget)
cityAndState = event.currentTarget.textContent.split('city');
cityAndState2 = cityAndState[0].split(',');
var city = cityAndState2[0];

var state = cityAndState2[1];
state = state[1] + state[2]; // not sure why state.slice(1) or state.replace(' ','') both did not work;

var requestLocation = 'http://api.openweathermap.org/geo/1.0/direct?q=' + city + ',' + state + ',US&appid=e17175c3afe7a2e923b08616e362f24c';
fetch(requestLocation)
  .then(function getCityLocation(response) {return response.json();})
  .then(function(data) {var object1 = data;
  console.log(object1[0].lat + ' ' + object1[0].lon)
  var stringLat = object1[0].lat;
  // console.log(stringLat);
  var stringLon = object1[0].lon;
  lat = parseFloat(stringLat);
  lon = parseFloat(stringLon);
  var requestURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&exclude=hourly,minutely&appid=e17175c3afe7a2e923b08616e362f24c';
  console.log('state=' + state + 'city=' + city + 'URL=' + requestURL);  
  displayWeather(requestURL);}); // end determine city from lat and longitude former line 38
};  
// next line is fomer line 27

//tried to set next 12 lines as function to get lat and lon from city and state did not work
var requestLocation = 'http://api.openweathermap.org/geo/1.0/direct?q=' + city + ',' + state + ',US&appid=e17175c3afe7a2e923b08616e362f24c';
fetch(requestLocation)
  .then(function getCityLocation(response) {return response.json();})
  .then(function(data) {var object1 = data;
  console.log(object1[0].lat + ' ' + object1[0].lon)
  var stringLat = object1[0].lat;
  // console.log(stringLat);
  var stringLon = object1[0].lon;
  lat = parseFloat(stringLat);
  lon = parseFloat(stringLon);
  var requestURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&exclude=hourly,minutely&appid=e17175c3afe7a2e923b08616e362f24c';
  console.log(requestURL); // end determine city from lat and longitude former line 38

displayWeather(requestURL);

}); // end first then deleted }
// end another then function
    $('#bigWindow').text(date) // not sure why it is not displayed most of the time
}
function displayWeather (requestURL){
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
      var fahrTempStr = fahrTemp.toString();
      var tempy = fahrTempStr[0] + fahrTempStr[1] + '.' + fahrTempStr[2] + fahrTempStr[3];  // this one did not work: 0.01*parseInt(fahrTemp);   
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
      weatherData.innerHTML = cityAndState + ' (' + daty + ') ' + realImage + '<br> Temp: ' + tempy + '\u00B0' + 'F ' + '<br> Wind: ' + windy + ' MPH ' + '<br> Humidity: ' + humy + '%' + '<br> UV Index: ' + '<span style = "background-color: ' + uvIndexyColor + ';">' + uvIndexy + '</span>'// uvIndexy //tried + '<style = background-color: green;>'
  
      document.getElementById('bigWindow').appendChild(weatherData);
      var createSpacing = document.createElement('p');
      createSpacing.textContent = ' 5 day forecast';
      createSpacing.setAttribute('style', 'font-size: 20px; text-align: left; font-family: Arial, Helvetica, sans-serif; color: black');
      document.getElementById('bigWindow').appendChild(createSpacing);
  
      var Day1 = document.createElement('div');
      Day1.setAttribute('class', 'firstDay');
      var unixDaty1 = unixDaty + 86400;
      var daty = moment.unix(unixDaty1).format('l');
      var icon = object1.daily[0].weather[0].icon;
      console.log(object1.current.weather);
      var kelvinTemp = object1.daily[0].temp.day;
      celcTemp = (kelvinTemp - 273.15)*100; 
      var fahrTemp = Math.floor(celcTemp*1.8 + 3200);
      var fahrTempStr = fahrTemp.toString();
      var tempy = fahrTempStr[0] + fahrTempStr[1] + '.' + fahrTempStr[2] + fahrTempStr[3];  // this one did not work: 0.01*parseInt(fahrTemp);
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
      Day2.setAttribute('class', 'firstDay')
      var unixDaty1 = unixDaty + 2*86400;
      var daty = moment.unix(unixDaty1).format('l');
      var icon = object1.daily[1].weather[0].icon;
      console.log(object1.current.weather);
      var kelvinTemp = object1.daily[1].temp.day;
      celcTemp = (kelvinTemp - 273.15)*100; 
      var fahrTemp = Math.floor(celcTemp*1.8 + 3200);
      var fahrTempStr = fahrTemp.toString();
      var tempy = fahrTempStr[0] + fahrTempStr[1] + '.' + fahrTempStr[2] + fahrTempStr[3];  // this one did not work: 0.01*parseInt(fahrTemp);var tempy = 0.01*parseInt(fahrTemp);
      var humy = object1.daily[1].humidity;
      var windy = object1.daily[1].wind_speed;
      var displayIcon = document.createElement('img');
      displayIcon.setAttribute('alt', 'icon did not load');
      var iconURL = 'http://openweathermap.org/img/w/' + icon + '.png';
      var realImage ='<img src =' + iconURL + '>';
      Day2.innerHTML = daty + '<br>' + realImage + '<br>Temp: ' + tempy + '\u00B0' + 'F ' + '<br>Wind: ' + windy + 'MPH ' + '<br>Humidity: ' + humy + '%';
      document.getElementById('bigWindow').appendChild(Day2);
  
      var Day3 = document.createElement('div');
      Day3.setAttribute('class', 'firstDay');
      var unixDaty1 = unixDaty + 3*86400;
      var daty = moment.unix(unixDaty1).format('l');
      var icon = object1.daily[2].weather[0].icon;
      console.log(object1.current.weather);
      var kelvinTemp = object1.daily[2].temp.day;
      celcTemp = (kelvinTemp - 273.15)*100; 
      var fahrTemp = Math.floor(celcTemp*1.8 + 3200);
      var fahrTempStr = fahrTemp.toString();
      var tempy = fahrTempStr[0] + fahrTempStr[1] + '.' + fahrTempStr[2] + fahrTempStr[3];  // this one did not work: 0.01*parseInt(fahrTemp);
      var humy = object1.daily[2].humidity;
      var windy = object1.daily[2].wind_speed;
      var displayIcon = document.createElement('img');
      displayIcon.setAttribute('alt', 'icon did not load');
      var iconURL = 'http://openweathermap.org/img/w/' + icon + '.png';
      var realImage ='<img src =' + iconURL + '>';
      Day3.innerHTML = daty + '<br>' + realImage + '<br>Temp: ' + tempy + '\u00B0' + 'F ' + '<br>Wind: ' + windy + 'MPH ' + '<br>Humidity: ' + humy + '%';
      document.getElementById('bigWindow').appendChild(Day3);
      
      var Day4 = document.createElement('div');
      Day4.setAttribute('class', 'firstDay');
      var unixDaty1 = unixDaty + 4*86400;
      var daty = moment.unix(unixDaty1).format('l');
      var icon = object1.daily[3].weather[0].icon;
      console.log(object1.current.weather);
      var kelvinTemp = object1.daily[3].temp.day;
      celcTemp = (kelvinTemp - 273.15)*100; 
      var fahrTemp = Math.floor(celcTemp*1.8 + 3200);
      var fahrTempStr = fahrTemp.toString();
      var tempy = fahrTempStr[0] + fahrTempStr[1] + '.' + fahrTempStr[2] + fahrTempStr[3];  // this one did not work: 0.01*parseInt(fahrTemp);
      var humy = object1.daily[3].humidity;
      var windy = object1.daily[3].wind_speed;
      var displayIcon = document.createElement('img');
      displayIcon.setAttribute('alt', 'icon did not load');
      var iconURL = 'http://openweathermap.org/img/w/' + icon + '.png';
      var realImage ='<img src =' + iconURL + '>';
      Day4.innerHTML = daty + '<br>' + realImage + '<br>Temp: ' + tempy + '\u00B0' + 'F ' + '<br>Wind: ' + windy + 'MPH ' + '<br>Humidity: ' + humy + '%';
      document.getElementById('bigWindow').appendChild(Day4);
  
      var Day5 = document.createElement('div');
      Day5.setAttribute('class', 'firstDay');
      var unixDaty1 = unixDaty + 5*86400;
      var daty = moment.unix(unixDaty1).format('l');
      var icon = object1.daily[4].weather[0].icon;
      console.log(object1.current.weather);
      var kelvinTemp = object1.daily[4].temp.day;
      celcTemp = (kelvinTemp - 273.15)*100; 
      var fahrTemp = Math.floor(celcTemp*1.8 + 3200);
      var fahrTempStr = fahrTemp.toString();
      var tempy = fahrTempStr[0] + fahrTempStr[1] + '.' + fahrTempStr[2] + fahrTempStr[3];  // this one did not work: 0.01*parseInt(fahrTemp);
      var humy = object1.daily[4].humidity;
      var windy = object1.daily[4].wind_speed;
      var displayIcon = document.createElement('img');
      displayIcon.setAttribute('alt', 'icon did not load');
      var iconURL = 'http://openweathermap.org/img/w/' + icon + '.png';
      var realImage ='<img src =' + iconURL + '>';
      Day5.innerHTML = daty + '<br>' + realImage + '<br>Temp: ' + tempy + '\u00B0' + 'F ' + '<br>Wind: ' + windy + 'MPH ' + '<br>Humidity: ' + humy + '%';
      // Day5.setAttribute('style', 'border: yellow; border-width:5px; border-style:solid; width: 15.7%;')
      document.getElementById('bigWindow').appendChild(Day5);
    })
    }
// event listener fetchImdbDrama.addEventListener('click', getApiDataImdb);

