"use strict";

function imprimirResultado() {
  let numNotasTotal = parseInt(document.getElementById("num").value);
  let resultDiv = document.getElementById("result");

  const arrNotas = introducirNotas(numNotasTotal);

  resultDiv.innerHTML = "Notas introducidas: " + arrNotas.join(", ") + "<br>";
  resultDiv.innerHTML += "Promedio: " + calcularPromedio(arrNotas) + "<br>";
  resultDiv.innerHTML += "La nota máxima es " + notaMax(arrNotas)+ "<br>";
  resultDiv.innerHTML += "La nota mínima es " + notaMin(arrNotas);
}

function introducirNotas(numNotasTotal) {
  const notas = [];
  let i = 0;
  let nota;

  while (i < numNotasTotal) {
    nota = parseFloat(
      prompt("Introduce la nota " + (i + 1) + " (entre 0 y 10):")
    );

    if (isNaN(nota) || nota < 0 || nota > 10) {
      alert("La nota tiene que estar entre 0 y 10. Inténtalo de nuevo.");
    } else {
      notas.push(nota);
      i++;
    }
  }
  return notas;
}

function calcularPromedio(notas) {
  let suma = 0;

  for (let i = 0; i < notas.length; i++) {
    suma += notas[i];
  }
  return (suma / notas.length).toFixed(2);
}

function notaMax(notas) {
  let notaMax = notas[0];

  for (let i = 0; i < notas.length; i++) {
    if (notaMax < notas[i]) {
      notaMax = notas[i];
    }
  }

  return notaMax;
}

function notaMin(notas) {
  let notaMin = notas[0];

  for (let i = 0; i < notas.length; i++) {
    if (notaMin > notas[i]) {
      notaMin = notas[i];
    }
  }
  return notaMin;
}
