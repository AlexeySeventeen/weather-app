const key = 'd298739086c143b689482526241902';

const search = document.querySelector('#search');

let city = 'Pskov';

const urlJSONnow = `https://api.weatherapi.com/v1/current.json?key=${key}&q=${city}`;

const mainT = document.querySelector('#mainT');
const text = document.querySelector('#text');
const img = document.querySelector('#img');
const cityHTML = document.querySelector('#city');
const country = document.querySelector('#country');
const wind = document.querySelector('#wind');
const windDir = document.querySelector('#wind_dir');
const humidity = document.querySelector('#humidity');
const realT = document.querySelector('#realT');
const uv = document.querySelector('#UV');
const pressure = document.querySelector('#pressure');

fetch(urlJSONnow).then((value) => {
  const headers = {'Content-Type': 'application/json'};
  value
    .json()
    .then(
      (value) => (
        console.log(value),
        (mainT.innerHTML = value.current.temp_c),
        (text.innerHTML = value.current.condition.text),
        (img.src = value.current.condition.icon),
        (cityHTML.innerHTML = value.location.name),
        (country.innerHTML = value.location.country),
        (wind.innerHTML = value.current.wind_kph),
        (windDir.innerHTML = value.current.wind_dir),
        (humidity.innerHTML = value.current.humidity),
        (realT.innerHTML = value.current.feelslike_c),
        (uv.innerHTML = value.current.uv),
        (pressure.innerHTML = value.current.pressure_mb)
      )
    );
});
