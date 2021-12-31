const newYears = '1 jan 2022';

function countdown() {
   const newYearsDate = new Date(newYears);
   const currentDate = new Date();

   const totalSeconds = (newYearsDate - currentDate) / 1000;
   const minutes = Math.floor(totalSeconds / 60) % 60;
   const seconds = Math.floor(totalSeconds) % 60;

   document.getElementById('minutes').innerText = formatTime(minutes);
   document.getElementById('seconds').innerText = formatTime(seconds);
}

function formatTime(time) {
   return time < 10 ? '0' + time : time;
}

setInterval(countdown, 1000);