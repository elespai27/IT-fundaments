"use strict";

function pintar() {
  let num = parseInt(document.getElementById("num").value);
  let chartOne = "#";
  let chartTwo = "*";
  let resultP = document.getElementById("result");

  for (let i = 0; i < num; i++) {
    let fila = "";
    for (let j = 0; j < num; j++) {
      if (i === 0 || i === num - 1 || j === 0 || j === num - 1) {
        fila += chartOne;
      } else {
        fila += chartTwo;
      }
    }
    resultP.innerHTML += fila + "<br>";
  }
}
