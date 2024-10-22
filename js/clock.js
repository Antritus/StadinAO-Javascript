function updateClock() {
  const date = new Date();
  const clockElement = document.getElementById("header-clock");
  if (clockElement == null) {
    return;
  }
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  hours = fixFormat(hours);
  minutes = fixFormat(minutes);
  seconds = fixFormat(seconds);

  clockElement.innerHTML = hours + ":" + minutes + ":" + seconds;
  setTimeout(updateClock, 500);
}

function fixFormat(value) {
  if (value < 10) {
    return "0" + value;
  }
  return value;
}

updateClock();
