var koneMERKKI = "Ubiqui UniFi 7";
var price = 1000;

var R1 = 100,
  R2 = 70,
  R3 = 25,
  Rsarja;

function kolmeSarjaan() {
  Rsarja = R1 + R2 + R3;
  return Rsarja;
}
function kolmeRinnan() {
  Rsarja = 1 / (1 / R1 + 1 / R2 + 1 / R3);
  return Rsarja;
}
function ex8() {
  document.getElementById(
    "sarjaan"
  ).innerHTML = `Sarjaan (R1 ${R1}, R2 ${R2}, R3 ${R3}): ${kolmeSarjaan(
    R1,
    R2,
    R3
  )}omh`;
  document.getElementById(
    "rinnan"
  ).innerHTML = `Rinnan (R1 ${R1}, R2 ${R2}, R3 ${R3}): ${kolmeRinnan(
    R1,
    R2,
    R3
  )}omh`;
}

function area(size) {
  return 4 * Math.PI * Math.pow(size, 2);
}
function volume(size) {
  return (4 / 3) * Math.PI * Math.pow(size, 3);
}

function ex9() {
  document.getElementById("pinta-ala").innerHTML = area(
    document.getElementById("sadesaadin").value
  );
  document.getElementById("tilavuus").innerHTML = volume(
    document.getElementById("sadesaadin").value
  );
}

function ex10() {
  let r = [10, 10, 23];
  document.getElementById("rinnan-2").innerHTML =
    1 / (1 / r[0] + 1 / r[1] + 1 / r[2]) + "omh";
}

function ex11() {
  document.getElementById("koe10").innerHTML =
    "Netti boksi <br>" + window.koneMERKKI + " " + price + "€";
}

// TODELLA PASKA TAPA TEHDÄ TÄMÄ
document.addEventListener("contextmenu", (event) => event.preventDefault());
