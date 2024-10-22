function ex19() {
  let date = new Date();
  let clock = date.getHours() + date.getMinutes() / 100;

  document.getElementById("clock").innerHTML = (
    clock +
    ":" +
    date.getSeconds()
  ).replace(".", ":");
  if (clock > 5.01 && clock <= 10) {
    document.getElementById("tervehdys").innerHTML = "Hyvää huomenta!";
  } else if (clock > 10 && clock <= 14) {
    document.getElementById("tervehdys").innerHTML = "Hyvää päivää!";
  } else if (clock > 14 && clock <= 17) {
    document.getElementById("tervehdys").innerHTML = "Hyvää iltapäivää!";
  } else if (clock > 17 && clock <= 23) {
    document.getElementById("tervehdys").innerHTML = "Hyvää iltaa!";
  } else {
    document.getElementById("tervehdys").innerHTML = "Hyvää yötä!";
  }

  setInterval(ex19, 500);
}
