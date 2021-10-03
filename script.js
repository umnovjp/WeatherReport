// password for geo website is B*12; link is http://api.positionstack.com/v1/forward/?access_key=f7684ffee4822effc307887dadfa27ef&query=Sachse,TX
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

function getCityWeather () {var inputVal = document.getElementById('myInput').value;
console.log(inputVal);
document.getElementById('bigWindow').textContent = '';
// var cityValue0 = document.createElement('p');
// cityValue0.setAttribute('id', 'cityId0');
// var entry0 = document.getElementById('cityId0').value;
// localStorage.setItem('city0', entry0);
// var citySideNav0 = localStorage.getItem('city0');
// city0.textContent = citySideNav0;

// document.getElementsByClassName('sideNav').appendChild(cityValue0);
// i++;
// var scheduleContent0 = localStorage.getItem('hour0');
// hour0.textContent = scheduleContent0;
// var entry0 = document.getElementById('hour0').value;
// localStorage.setItem('hour0', entry0)
var requestURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=32.9811256&lon=-96.5642011&exclude=hourly,minutely&appid=e17175c3afe7a2e923b08616e362f24c';
fetch(requestURL)

  .then(function (response) {
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
    // for future use example how to add image dynamically
    ///var moviePoster = document.createElement('a');
             //  moviePoster.setAttribute('href', 'img.omdbapi.com');
             //  moviePoster.setAttribute('id', 'dramaPoster');
             //  var imagePoster = document.createElement('img');
             //  imagePoster.setAttribute('src', requestPosterOmdb);
             //  moviePoster.setAttribute('width', '50px');
             //  moviePoster.appendChild(imagePoster)
             //  document.getElementById('boxOfDVDsDrama').appendChild(moviePoster);
    console.log(object1.current.weather);
    var kelvinTemp = object1.current.temp;
    // I know there is method to chnage floating point position in JS. I used what looks faster, not what is more fancy
    // converted to Celsius not Fqahr :( to correct
    fahrTemp = (kelvinTemp - 273.15)*100; 
    var tempy = 0.01*parseInt(fahrTemp);    
    // console.log(tempNumber);
    var windy = object1.current.wind_speed;
    var humy = object1.current.humidity;
    var uvIndexy = object1.current.uvi;
    weatherData.innerHTML = inputVal + '<br>' + daty + '<br> Icon: ' + icon + '<br> Temp: ' + tempy + '\u00B0' + 'F ' + '<br> Wind: ' + windy + ' MPH ' + '<br> Humidity: ' + humy + '%' + '<br> UV Index: ' + uvIndexy

    document.getElementById('bigWindow').appendChild(weatherData);
    var createSpacing = document.createElement('p');
    createSpacing.textContent = ' 5 day forecast';
    document.getElementById('bigWindow').appendChild(createSpacing);

    var Day1 = document.createElement('div');
    Day1.setAttribute('id', 'firstDay');
    Day1.setAttribute('style', 'border: green; border-width:5px; border-style:solid; width: 15.7%;');
    // Day1.textContent = '\u00B0';
    // Day1.textContent = 'day 1';
    // moment().format('dddd');
    console.log(object1.daily[0].temp);
    var kelvinTemp = object1.current.temp;
    
    var unixDaty1 = unixDaty + 86400;
    var daty = moment.unix(unixDaty1).format('l');
    var icon = object1.daily[0].weather[0].icon;
    console.log(object1.current.weather);
    var tempy = object1.daily[0].temp.day;
    // var humi = object1.current.humidity;
    var humy = object1.daily[0].humidity;
    var windy = object1.daily[0].wind_speed;
    var uvIndexy = object1.daily[0].uvi;
    var displayIcon = document.createElement('<img>');
    displayIcon.setAttribute('img', 'assets/' + icon + '.png');
    Day1.appendChild(displayIcon);
    // to display degree sign I use &deg but it does not work
    Day1.innerHTML = daty + '<br> Icon: ' + icon + '<br>Temp: ' + tempy + '\u00B0' + 'F ' + '<br>Wind: ' + windy + 'MPH ' + '<br>Humidity: ' + humy + '%';
    //$('#firstDay').text(date);
    document.getElementById('bigWindow').appendChild(Day1);
    var Day2 = document.createElement('div');
    Day2.innerHTML = object1;
    Day2.setAttribute('id', 'firstDay')
    Day2.setAttribute('style', 'border: blue; border-width:5px; border-style:solid; width: 15.7%;')
    console.log(object1.daily[1].temp);
    document.getElementById('bigWindow').appendChild(Day2);
    var Day3 = document.createElement('div');
    Day3.textContent = 'day 3';
    Day3.setAttribute('id', 'firstDay')
    Day3.setAttribute('style', 'border: red; border-width:5px; border-style:solid; width: 15.7%;')
    document.getElementById('bigWindow').appendChild(Day3);
    var Day4 = document.createElement('div');
    Day4.textContent = 'day 4';
    Day4.setAttribute('id', 'firstDay')
    Day4.setAttribute('style', 'border: brown; border-width:5px; border-style:solid; width: 15.7%;')
    document.getElementById('bigWindow').appendChild(Day4);
    var Day5 = document.createElement('div');
    Day5.textContent = 'day 5';
    Day5.setAttribute('id', 'firstDay')
    Day5.setAttribute('style', 'border: yellow; border-width:5px; border-style:solid; width: 15.7%;')
    document.getElementById('bigWindow').appendChild(Day5);
  }) // end second then function
    $('#bigWindow').text(date)
    
        //weatherData.textContent = object1;
    

    

}

// event listener fetchImdbDrama.addEventListener('click', getApiDataImdb);

function getApiWeather() {
  // var genre = event.currentTarget.value;
  // console.log(genre);

}
getApiWeather()
      //three lines to create element dynamically
      
        // ugly method to replace ' ' to %20 in movieTitle, I know I was supposed to write a loop
        // movieTitleFormatted = movieTitle.replace(" ", "%20");
        // movieTitleFormatted1 = movieTitleFormatted.replace(" ", "%20");
        // movieTitleFormatted2 = movieTitleFormatted1.replace(" ", "%20");
       //  var requestURLOmdb = 'http://www.omdbapi.com/?i=tt3896198&apikey=bf124b81&t=' + movieTitleFormatted4 + '&plot=full'
    //     var requestPosterOmdb = 'http://img.omdbapi.com/?i=tt3896198&apikey=bf124b81&t=' + movieTitleFormatted4 + '&plot=full'
        // end of ugly method

        //start second fetch
     //   fetch(requestURLOmdb)
      //    .then(function (response) {
        //    return response.json();
      //    })
      //    .then(function (data) {
       //     var object1 = data;
        //    console.log(object1)
            // how to put something on display dynamically
          //  if (genre == 'Drama') {
           //   var movieName1 = document.createElement('p');
          //    movieName1.innerHTML = object1.Title;
           //   var movieData = document.createElement('p');
           //   movieData.innerHTML = 'Director: ' + object1.Director + ', Actors: ' + object1.Actors + ', Rating ' + object1.Metascore + '<br>' + object1.Plot;
          //    document.getElementById('boxOfDVDsDrama').appendChild(movieData)}

    
        //end second fetch
      



