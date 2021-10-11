# WeatherReport
This code helps a user to learn about weather forecast in a city. First, user enters city name and state in the following format: Chicago, IL. Name of the city is separated from two letters state abbreviation by comma and space: Chicago, IL or Austin, TX.
![image](https://user-images.githubusercontent.com/88174852/136719641-ba5820ef-b36d-4523-8e8c-2b79ee075f34.png)
As I click the search button, I am presented with current and future conditions for that city and that city is added to the search history. ![image](https://user-images.githubusercontent.com/88174852/136720475-64fb2b13-3ca7-4b0e-9730-58ec175a19a9.png)
When I view current weather conditions for that city, then I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index. When I view the UV index, then I am presented with a color that indicates whether the conditions are favorable, moderate, or severe. It is favorable in the image because I took it late in the evening, but it is red or orange during the day. When I view future weather conditions for that city,  I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity. When I click on a city in the search history, I am again presented with current and future conditions for that city.
![image](https://user-images.githubusercontent.com/88174852/136721436-ecaeb050-8104-4558-b52e-7a5ef5edbf93.png)
I use local storage to store city names as persisting data
![image](https://user-images.githubusercontent.com/88174852/136721568-15defb0b-47f6-4981-92b5-8defef59598b.png)
It is good practice to add some alerts to make sure user enters meaningful data. I set us only one. Code checks if a user enters correct US state letters. If it does not,it will show an alert in console.log. It will not interrupt the program. ![image](https://user-images.githubusercontent.com/88174852/136721775-4cbc6803-1487-4ac3-babb-c8f603d59a48.png)

If I start this code from scratch again, I will do at least two things differently. In function displayWeather, I create 5 small <divs> for each day separately. Definitely I know how to create them with for loop. Next, I will define a global function which calculates lat and lon from city name and state. Because I use it twice in the program. I could call a function both times. It may take me extra day or two. 

For some reason, using Math.floor() or Math.round() was not successful. 
![image](https://user-images.githubusercontent.com/88174852/136720294-a1948725-77e7-4567-9dec-392f0bc18d31.png)
I succeeded to create a solution to fix this problem. 
