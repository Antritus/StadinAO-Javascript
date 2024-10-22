document.addEventListener("contextmenu", (event) => event.preventDefault());

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function ex14(event) {
  box.innerHTML = "<h1>" + random(1, 6) + "</h1>";
  box.style.backgroundColor = `rgb(${random(0, 255)}, ${random(
    0,
    255
  )}, ${random(0, 255)})`;
}

function ex14b(event) {
  const dice = document.getElementById("dice");
  const side = random(1, 6);
  dice.src = "dice/" + side + ".png";
}
