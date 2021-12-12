import './style.css';
import weatherInfo from './weatherInfo';

const WEATHER = '1003f232be7e2d8830d4130f042fe209';
let unitMeasure = 'imperial';
let cityVariable = 'Las Vegas';

const btnCity = document.querySelector('#submitCity');
const btnUnit = document.querySelector('#unitsTemp');
const city = document.querySelector('#city');


function getWeather(location, measure) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${measure}&appid=${WEATHER}`, { mode: 'cors' })
        .then(function (response) {
            return response.json();
        })
        .then(function (weather) {
            let descriptionArray = weather.weather;
            let weatherData = new weatherInfo(weather.name, weather.main.temp, weather.main.temp_max, weather.main.temp_min, weather.main.humidity, descriptionArray[0].description);
            weatherData.clearData();
            weatherData.buildApp();
            
        })
        .catch(function(err){
            if(err){
                alert('Location not available.')
            }
        })
}

btnUnit.addEventListener('click', (e) => {
    let units = e.target.textContent;
    e.preventDefault();
    
    if(units === `F`){
        e.target.textContent = `C`;
        unitMeasure = 'metric';
        getWeather(cityVariable, unitMeasure);
    } else{
        e.target.textContent = `F`;
        unitMeasure = 'imperial';
        getWeather(cityVariable, unitMeasure);
    }
})

getWeather(cityVariable, unitMeasure);
btnCity.addEventListener('click', (e) => {
    if(city.value){
        cityVariable = city.value;
        getWeather(cityVariable, unitMeasure)
        city.value = '';
    }
})


