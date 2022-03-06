const API_KEY='680c2ef5b9d4185fe04cbfb3b6b3bf3c';

const searchTemperature = () =>{
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

     fetch(url)
    .then(res => res.json())
    .then(data => displayTemperature(data));
}

const displayTemperature = (temperature) =>{
    document.getElementById('city').innerText = temperature.name;
    document.getElementById('temperature').innerText = temperature.main.temp;
    document.getElementById('condition').innerText = temperature.weather[0].main;

    /* set weather icon */
    const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    document.getElementById('weather-icon').setAttribute('src',url);
    console.log(temperature,url);
}