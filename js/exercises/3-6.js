function ex3() {
  let r1 = document.getElementById("r1").value;
  let r2 = document.getElementById("r2").value;
  let r3 = document.getElementById("r3").value;

  document.getElementById("r4").innerHTML =
    1 / (1 / r1 + 1 / r2 + 1 / r3) + "omh";
}

function ex4() {
  updateField(
    "ex-4-head",
    document.getElementById("ex-4-head").innerHTML +
      document.getElementById("ex-4-head-2").innerHTML
  );
  updateField(
    "ex-4-para",
    document.getElementById("ex-4-para").innerHTML +
      document.getElementById("ex-4-para-2").innerHTML
  );
  updateField("ex-4-head-2", "");
  updateField("ex-4-para-2", "");
}

function updateField(field, value) {
  document.getElementById(field).innerHTML = value;
}

function ex5() {
  let nums = [10, 42, 2321, 32];

  document.getElementById("ex5").innerHTML =
    nums[3] +
    "<br>" +
    nums[2] +
    "<br>" +
    nums[1] +
    "<br>" +
    nums[0] +
    "<br><br>" +
    "Keski arvo: " +
    (nums[0] + nums[1] + nums[2] + nums[3]) / 4;
}

function ex6() {
  var nums = [
    ["Luku 1.", "Luku 2.", "Luku 3.", "Luku 4."],
    [3, 5, 7, 9],
  ];

  document.getElementById("ex6").innerHTML =
    nums[0][3] +
    " = " +
    nums[1][3] +
    "<br>" +
    nums[0][2] +
    " = " +
    nums[1][2] +
    "<br>" +
    nums[0][1] +
    " = " +
    nums[1][1] +
    "<br>" +
    nums[0][0] +
    " = " +
    nums[1][0] +
    "<br><br>" +
    "Keski arvo: " +
    (nums[1][0] + nums[1][1] + nums[1][2] + nums[1][3]) / 4;
}

function ex6() {
  var info = [
    ["V60 D3 Momentum", "110/150", "137", "35500", "5555,97"],
    ["V60 D3 Momentum aut", "110/150", "146", "36400", "67"],
  ];
  var nums = [
    ["Luku 1.", "Luku 2.", "Luku 3.", "Luku 4."],
    [3, 5, 7, 9],
  ];

  document.getElementById("ex6").innerHTML =
    nums[0][3] +
    " = " +
    nums[1][3] +
    "<br>" +
    nums[0][2] +
    " = " +
    nums[1][2] +
    "<br>" +
    nums[0][1] +
    " = " +
    nums[1][1] +
    "<br>" +
    nums[0][0] +
    " = " +
    nums[1][0] +
    "<br><br>" +
    "Keski arvo: " +
    (nums[1][0] + nums[1][1] + nums[1][2] + nums[1][3]) / 4;
}

function ex7() {
  let table = document.getElementById("paska-tehtava");
  let info = [
    ["V60 D3 Momentum", "110/150", 137, 35500, 5555.97],
    ["V60 D3 Momentum aut", "110/150", 146, 36400, 6747.8],
    ["V60 D3 AWD Momentum aut", "110/150", 150, 38400, 7697.43],
    ["V60 D4 Momentum", "140/190", 138, 38000, 6047.6],
    ["V60 D4 Momentum aut", "140/190", 145, 39100, 7095.55],
    ["V60 D4 AWD Momentum aut", "140/190", 150, 40600, 8141.49],
  ];

  generateInfo(
    table,
    info[0][0],
    info[0][1],
    info[0][2],
    info[0][3],
    info[0][4]
  );
  generateInfo(
    table,
    info[1][0],
    info[1][1],
    info[1][2],
    info[1][3],
    info[1][4]
  );
  generateInfo(
    table,
    info[2][0],
    info[2][1],
    info[2][2],
    info[2][3],
    info[2][4]
  );
  generateInfo(
    table,
    info[3][0],
    info[3][1],
    info[3][2],
    info[3][3],
    info[3][4]
  );
  generateInfo(
    table,
    info[4][0],
    info[4][1],
    info[4][2],
    info[4][3],
    info[4][4]
  );
  generateInfo(
    table,
    info[5][0],
    info[5][1],
    info[5][2],
    info[5][3],
    info[5][4]
  );
}
function generateInfo(table, model, teho, co2, alv, tax) {
  const row = document.createElement("tr");
  generateData(6, "name", row, model);
  generateData(1, null, row, teho);
  generateData(1, null, row, co2);
  generateData(1, null, row, alv);
  generateData(1, null, row, tax);
  let fullPrice = alv + tax;
  generateData(1, null, row, fullPrice);
  table.appendChild(row);
}

function generateData(colSize, clazz, row, data) {
  const col = document.createElement("td");
  col.innerHTML = data;
  col.setAttribute("colspan", colSize);
  col.setAttribute("class", clazz);
  row.appendChild(col);
}
