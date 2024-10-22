function ex15() {
  var time = new Date();
  var day = [
    "Sunnuntai",
    "Maanantai",
    "Tiistai",
    "Keskiviikko",
    "Torstai",
    "Perjantai",
    "Lauantai",
  ];
  var month = [
    "Tammikuu",
    "Helmikuu",
    "Maaliskuu",
    "Huhtikuu",
    "Toukokuu",
    "Kesäkuu",
    "Heinäkuu",
    "Elokuu",
    "Syyskuu",
    "Lokakuu",
    "Marraskuu",
    "Joulukuu",
  ];
  document.getElementById("aika").innerHTML =
    day[time.getDay()] +
    ", " +
    time.getDate() +
    ". " +
    month[time.getMonth()] +
    " " +
    time.getFullYear() +
    " klo " +
    time.getHours() +
    ":" +
    time.getMinutes();
}
function ex16() {
  // ../clock.js
}

function ex17() {
  setTimeout(ex17b, 3000);
}
function ex17b() {
  document.getElementById("text-box").style.visibility = "visible";
}
