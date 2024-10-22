function ex20() {
  var x = document.forms["omaEmail"]["email"].value;
  if (x == "") {
    alert("Oma email puuttuu. Ole hyvä, anna email.");
    return false;
  }

  ex20b();
  return false;
}

function ex20b() {
  var popup = document.getElementById("omaTeht_teksti_1");
  popup.classList.toggle("show");
}
