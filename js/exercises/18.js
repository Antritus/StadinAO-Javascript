function ex18() {
  let object = { firstName: "Juha", surname: "Laakso", age: 104 };
  document.getElementById("object").innerHTML =
    object["firstName"] + " " + object["surname"] + " " + object["age"];
}
