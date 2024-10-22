function ex12(event) {
  if (event.which == 1) {
    document.getElementById("1").innerHTML = "CLICKASIT VASENTA NAPPIA";
  } else if (event.which == 2) {
    document.getElementById("2").innerHTML = "CLICKASIT KESKIMMÄISTÄ NAPPIA";
  } else if (event.which == 3) {
    document.getElementById("3").innerHTML = "CLICKASIT OIKEAA NAPPIA";
  }
}

function ex12b(event) {
  if (event.which == 1) {
    box.innerHTML = "YKSI";
    box.style.backgroundColor = `rgb(255, 100, 100)`;
  } else if (event.which == 2) {
    box.innerHTML = "KAKSI";
    box.style.backgroundColor = "green";
  } else if (event.which == 3) {
    box.innerHTML = "KOLME";
    box.style.backgroundColor = "blue";
  }
}
function kolmeSarjaan(r1, r2, r3) {
  Rsarja = r1 + r2 + r3;
  return Rsarja;
}
function kolmeRinnan(r1, r2, r3) {
  Rsarja = 1 / (1 / r1 + 1 / r2 + 1 / r3);
  return Rsarja;
}

function ex13(event) {
  if (event.which == 1) {
    box2.innerHTML =
      "Sarjaan kytkentä (10, 10323, 123)<br>" + kolmeSarjaan(10, 10323, 123);
  }
  if (event.which == 3 && event.altKey) {
    box2.innerHTML =
      "Rinnan kytkentä (10, 10323, 123)<br>" + kolmeRinnan(10, 10323, 123);
  }
}

document.addEventListener("contextmenu", (event) => event.preventDefault());
