const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const second = document.querySelector('.second');
const time = document.querySelector('.time');
const dateElement = document.querySelector('.date');
const toggle = document.querySelector('.toggle');

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const months = [
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

const formatTime = (time) => {
  return time < 10 ? `0${time}` : time;
};

const hoursConvert = (hours) => {
  return hours >= 12 ? hours - 12 : hours;
};

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

function setTime() {
  let date = new Date();

  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  const clock = hours >= 13 ? hours % 12 : hours;

  let dayEl = date.getDay();
  let monthEl = date.getMonth();
  let dateEl = date.getDate();

  let ampm = hours >= 12 ? 'PM' : 'AM';

  hour.style.transform = `translate(-50%, -100%) rotate(${scale(
    clock,
    0,
    12,
    0,
    360
  )}deg)`;

  minute.style.transform = `translate(-50%, -100%) rotate(${scale(
    minutes,
    0,
    60,
    0,
    360
  )}deg)`;

  second.style.transform = `translate(-50%, -100%) rotate(${scale(
    seconds,
    0,
    60,
    0,
    360
  )}deg)`;

  time.innerHTML = `${hoursConvert(formatTime(hours))}:${formatTime(
    minutes
  )} ${ampm}`;
  dateElement.innerHTML = `${days[dayEl]}, ${months[monthEl]} <span class="circle">${dateEl}</span>`;
}

toggle.addEventListener('click', (e) => {
  const html = document.querySelector('html');

  if (html.classList.contains('dark')) {
    html.classList.remove('dark');
    e.target.innerHTML = 'Dark Mode'; // Change button text
  } else {
    html.classList.add('dark');
    e.target.innerHTML = 'Light Mode';
  }
});

setInterval(setTime, 1000);
