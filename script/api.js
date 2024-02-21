const key = 'd298739086c143b689482526241902';

const urlJSONauto = `https://api.weatherapi.com/v1/current.json?key=${key}&q=auto:ip`;
const urlJSONautoAstro = `https://api.weatherapi.com/v1/astronomy.json?key=${key}&q=auto:ip`;

// const for now
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

// now api
fetch(urlJSONauto).then((value) => {
  const headers = {'Content-Type': 'application/json'};
  value
    .json()
    .then(
      (value) => (
        (mainT.innerHTML = value.current.temp_c),
        (text.innerHTML = value.current.condition.text),
        (img.src = value.current.condition.icon),
        (cityHTML.innerHTML = value.location.region),
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

// sun/moon const
const sunRise = document.querySelector('#sunRise');
const sunSet = document.querySelector('#sunSet');
const moonRise = document.querySelector('#moonRise');
const moonSet = document.querySelector('#moonSet');

// sun/moon api
fetch(urlJSONautoAstro).then((value) => {
  const headers = {'Content-Type': 'application/json'};
  value
    .json()
    .then(
      (value) => (
        (sunRise.innerText = value.astronomy.astro.sunrise),
        (sunSet.innerText = value.astronomy.astro.sunset),
        (moonRise.innerText = value.astronomy.astro.moonrise),
        (moonSet.innerText = value.astronomy.astro.moonset)
      )
    );
});

// TODO maxT, chance of rain and localArray time

// TODO search icon hover
// TODO search
// TODO img
// TODO tomorrow
// TODO animation when waiting
