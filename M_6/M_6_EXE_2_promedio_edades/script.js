"use strict";

function pedirMedia() {
  let numPersonas = parseInt(document.getElementById("num").value);
  let resultDiv = document.getElementById("result");
  resultDiv.innerHTML = calcularMedia(numPersonas);
}

function calcularMedia(numPersonas) {
  let promedio = 0;
  let edad;
  let i = 0;

  while (i < numPersonas) {
   
    edad = parseInt(prompt("Introduce la edad " + (i + 1)));
    if (edad >= 0 && edad <= 120) {
      promedio += edad;
      i++;
    } else {
      alert( "La edad tiene que estar comprendida entre 0 y 120");
    }
  }
  promedio = promedio / numPersonas;
  return "El promedio de edades es: " + promedio.toFixed(2);
}
