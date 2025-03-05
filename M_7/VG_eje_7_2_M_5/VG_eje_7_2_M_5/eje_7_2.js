"use strict";

// Fes un programa que mostri el següent per pantalla:

// *

// * *

// * * *

// * * * *

// * * * * *

// * * * * * *

// El nombre de línies formades per “*”
// vindrà donat per un número que l’usuari/ària introduirà per consola.
// Condició: En tot el codi del programa només hi pot haver un *
// També, a poder ser, no utilitzis cap mètode com repeat() o substring()
// de la classe String.

function validate(num) {
  return isNaN(num);
}

function operar(num) {
  let dibujo = "";

  for (let index = 1; index < num; index++) {
    let fila = "";
    for (let jota = 1; jota <= index; jota++) {
      fila += "*";
    }
    dibujo += fila + "<br>"
  }
  return dibujo;
}

function dibujar() {
  let resultDiv = document.getElementById("result");
  let num = parseInt(document.getElementById("num").value);
  let error = `<p style= "color: red;"> NO MOLA </p>`;

  if (validate(num)) {
    return (resultDiv.innerHTML = error);
  }
  let final = operar(num);

  resultDiv.innerHTML = `${final}`;
}
