let stateText = false;
let stateImage = false;

function ex1() {
  if (!stateText) {
    document.getElementById("button-1").innerHTML = "Ylä teksti vaihdettu!";
    document.getElementById("button-2").innerHTML = "Alempi teksti vaihdettu!";
    document.getElementById("button-3").innerHTML = "Vaihda teksti takaisin";
    document.getElementById("button-4").innerHTML = "Vaihda teksti takaisin";
    stateText = true;
  } else {
    document.getElementById("button-1").innerHTML = "Teksti!";
    document.getElementById("button-2").innerHTML = "Teksti 2!";
    document.getElementById("button-3").innerHTML = "Vaihda teksti";
    document.getElementById("button-4").innerHTML = "Vaihda teksti";
    stateText = false;
  }
}

let stateImageGreen = false;
let stateImageRed = true;
function ex2() {
  if (!stateImageGreen) {
    document.getElementById("button-image-1").innerHTML =
      "Vaihda minut takaisin!";
    stateImageGreen = true;
  } else {
    document.getElementById("button-image-1").innerHTML = "Ylä teksti!";
    stateImageGreen = false;
  }
}

function ex2b() {
  if (!stateImageRed) {
    document.getElementById("button-image-4").innerHTML =
      "Vaihda minut takaisin!";
    stateImageRed = true;
  } else {
    document.getElementById("button-image-4").innerHTML = "Ala teksti!";
    stateImageRed = false;
  }
}
