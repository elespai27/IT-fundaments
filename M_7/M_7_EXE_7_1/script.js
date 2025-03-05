"use strict";

function calcularMedia() {
  const NOTAS_3 = 3;
  let resultDiv = document.getElementById("result");

  const arrNotas = introducirNotas(NOTAS_3);
  let promedio = calcularPromedio(arrNotas, NOTAS_3);
  resultDiv.innerHTML =
    "tu promdeido es " + promedio.toFixed(2) + "<br>" + validacion(promedio);
}

function introducirNotas(NOTAS_3) {
  const notas = [];
  let i = 0;

  while (i < NOTAS_3) {
    let nota = parseInt(prompt("introduce tu nota"));

    if (isNaN(nota)) {
      alert("valor inválido");
    } else {
      notas.push(nota);
      i++;
    }
  }

  return notas;
}

function calcularPromedio(notas, NOTAS_3) {
  let suma = 0;

  for (let i = 0; i < notas.length; i++) {
    suma += notas[i];
  }

  return suma / NOTAS_3;
}

function validacion(promedio) {
  let mensaje = "";

  if (promedio < 5) {
    mensaje = "No has superat el curs. Has de recuperar";
  } else if (promedio >= 5 && promedio <= 7) {
    mensaje = "Enhorabona! Has aprovat, però hauries de continuar practicant";
  } else if (promedio > 7) {
    mensaje = "Enhorabona! Has superat el curs! Passa ja al següent nivell!";
  } else {
    mensaje = "Introduce un valor correcto";
  }
  return mensaje;
}
