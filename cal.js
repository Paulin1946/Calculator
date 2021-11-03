let id1 = document.getElementById("id1");
let id2 = document.getElementById("id2");
let id3 = document.getElementById("id3");
let lectura_de_id1;
let lectura_de_id3;
let id4 = document.getElementById("id4");
let id5 = document.getElementById("id5");
id4.addEventListener("click", funciónAlPresionarElBoton);

function funciónAlPresionarElBoton() {
  lectura_de_id1 = parseInt(id1.value);
  lectura_de_id3 = parseInt(id3.value);

  if (id2.value == "+") {
    id5.innerHTML = Math.floor(lectura_de_id1 + lectura_de_id3) + "!";
  } else if (id2.value == "-") {
    id5.innerHTML = Math.floor(lectura_de_id1 - lectura_de_id3) + "!";
  } else if (id2.value == "*") {
    id5.innerHTML = Math.floor(lectura_de_id1 * lectura_de_id3) + "!";
  } else if (id2.value == "x") {
    id5.innerHTML = Math.floor(lectura_de_id1 * lectura_de_id3) + "!";
  } else if (id2.value == "X") {
    id5.innerHTML = Math.floor(lectura_de_id1 * lectura_de_id3) + "!";
  } else if (id2.value == "/") {
    id5.innerHTML = Math.floor(lectura_de_id1 / lectura_de_id3) + "!";
  }
}
