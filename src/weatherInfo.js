export default class weatherInfo {
    constructor(location, currentTemp, highTemp, lowTemp, humidity, weatherDescription) {
        this.location = location;
        this.currentTemp = currentTemp;
        this.highTemp = highTemp;
        this.lowTemp = lowTemp;
        this.humidity = humidity;
        this.weatherDescription = weatherDescription;
    }

    setLocation() {
        const div = document.querySelector('#weatherContainer');

        let city = document.createElement('p');
        city.innerText = this.location;
        city.className = 'city';
        div.appendChild(city);
    }
    tempCurrent(){
        const div = document.querySelector('#weatherContainer');
        const btn = document.querySelector('#unitsTemp');

        let unitBtn = btn.textContent;

        let temp = document.createElement('p');
        temp.textContent = Math.round(this.currentTemp) + '\u00B0' + unitBtn;
        temp.className = 'currentTemp'
        div.appendChild(temp);

    }
    extraData(){
        const div = document.querySelector('#weatherContainer');

        const groupDiv = document.createElement('div');
        groupDiv.className = 'groupDiv';

        let tempHigh = document.createElement('p');
        let tempLow = document.createElement('p');
        let humidity = document.createElement('p');

        tempHigh.innerText = `Today's high: ${Math.round(this.highTemp)}\u00B0`;
        tempLow.innerText = `Today's low: ${Math.round(this.lowTemp)}\u00B0`;
        humidity.innerText = `Humidity: ${Math.round(this.humidity)}%`;

        tempHigh.className = 'tempHigh';
        tempLow.className = 'tempLow';
        humidity.className = 'humidity';

        groupDiv.appendChild(tempHigh);
        groupDiv.appendChild(tempLow);
        groupDiv.appendChild(humidity);

        div.appendChild(groupDiv);
    }
    descriptionWeather(){
        const div = document.querySelector('#weatherContainer');

        let description = document.createElement('p');
        description.innerText = this.weatherDescription;
        description.className = 'description';
        div.appendChild(description);
    }
    async descriptionGIPHY(){
        const GIPHKEY = 'TbPeltjV90S63QgT73a8WFJcqM6aXkR4';
        const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${GIPHKEY}&s=${this.weatherDescription}`, {mode: 'cors'});
        const pic = await response.json();
        
        let picURL = pic.data.images.preview_gif.url;

        const div = document.querySelector('#weatherContainer');
        
        const image = document.createElement('img');
        image.className = 'image';
       
        image.src = picURL;

        div.appendChild(image);
    }
    clearData() {
        const div = document.querySelector('#weatherContainer')

        while (div.firstElementChild) {
            div.removeChild(div.firstElementChild);
        }
    }
    buildApp(){
        this.setLocation();
        this.descriptionWeather();
        this.tempCurrent();
        this.extraData();
        this.descriptionGIPHY();
    }
}