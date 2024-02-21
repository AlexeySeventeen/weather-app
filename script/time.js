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

const daysArray = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

// day on main part
let newDate = new Date();

const thisDay = newDate.getUTCDate();
const month = newDate.getMonth();
const year = newDate.getFullYear();

day.innerHTML = `${thisDay} ${monthArray[month]} ${year}`;

// time on main part
const currDay = newDate.getDay();

function timeOnPage() {
  let newDate = new Date();
  hour = newDate.getHours();
  min = newDate.getMinutes();

  time.innerHTML = `${daysArray[currDay]}, ${hour}:${min}`;

  if (hour < 10 && min > 10) {
    time.innerHTML = `${daysArray[currDay]}, 0${hour}:${min}`;
  }
  if (min < 10 && hour > 10) {
    time.innerHTML = `${daysArray[currDay]}, ${hour}:0${min}`;
  }
  if (min < 10 && hour < 10) {
    time.innerHTML = `${daysArray[currDay]}, 0${hour}:0${min}`;
  }
}

timeOnPage();

setInterval(timeOnPage, 1000);
