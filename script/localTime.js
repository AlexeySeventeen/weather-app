const urlJSONauto = `https://api.weatherapi.com/v1/timezone.json?key=${key}&q=auto:ip`;

const localTime = document.querySelector('#localTime');

// local time(problem with 0 and currHour)
const currDate = new Date();
const currHour = currDate.getHours();

function localTimeFn(diff, hasDiff) {
  const currDate = new Date();
  const currHour = currDate.getHours();
  const currMin = currDate.getMinutes();
  if (hasDiff === 'yes') {
    localTime.innerText = `${currHour - diff}:${currMin}`;
  }
  if (hasDiff === 'no') {
    localTime.innerText = `${currHour}:${currMin}`;
  }
}
let localHour;

fetch(urlJSONauto).then((value) =>
  value
    .json()
    .then((value) => {
      const localArray = value.location.localtime.split('');
      const localHourApi = localArray[11] + localArray[12];
      localHour = +localHourApi;
    })
    .then(() => {
      const diff = currHour - localHour;
      if (diff !== 0) {
        setInterval(localTimeFn(diff, 'yes'), 1000);
      } else {
        setInterval(localTimeFn(diff, 'no'), 1000);
      }
    })
);
