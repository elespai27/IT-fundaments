"use strict";

function dibujar() {
  let lado = parseInt(document.getElementById("num").value);
  let chartOne = "#";
  let chartTwo = "*";
  let resultDiv = document.getElementById("result");

  let resultado = "";
  for (let i = 0; i < lado; i++) {
    let fila = "";
    for (let j = 0; j < lado; j++) {
      if (i === 0 || i === lado - 1 || j === 0 || j === lado - 1) {
        fila += chartOne;
      } else {
        fila += chartTwo;
      }
    }

    resultado += fila + "<br>";
  }

  resultDiv.innerHTML = resultado;
}
