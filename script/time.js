const time = document.querySelector('#time');
const day = document.querySelector('#day');

const monthArray = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

let newDate = new Date();
const currDay = newDate.getDay();

function dayOnPage() {
  const curDay = newDate.getUTCDate();
  const month = newDate.getMonth();
  const year = newDate.getFullYear();

  day.innerHTML = `${curDay} ${monthArray[month]} ${year}`;
}

dayOnPage();

function timeOnPage() {
  let newDate = new Date();
  const hour = newDate.getHours();
  const min = newDate.getMinutes();

  time.innerHTML = `${days[currDay]}, ${hour}:${min}`;

  if (hour < 10 && min > 10) {
    time.innerHTML = `0${hour}:${min}`;
  }
  if (min < 10 && hour > 10) {
    time.innerHTML = `${hour}:0${min}`;
  }
  if (min < 10 && hour < 10) {
    time.innerHTML = `0${hour}:0${min}`;
  }
}

timeOnPage();

setInterval(timeOnPage, 1000);
