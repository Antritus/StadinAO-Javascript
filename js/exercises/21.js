function ex21() {
  const squares = document.querySelectorAll(".teksti-alue");
  squares.forEach((square) => {
    square.addEventListener("click", function () {
      const infoBox = this.nextElementSibling;
      infoBox.style.display =
        infoBox.style.display === "block" ? "none" : "block";
    });
  });
}
