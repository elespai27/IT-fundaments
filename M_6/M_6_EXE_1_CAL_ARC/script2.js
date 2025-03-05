"use strict";

function operar() {
  letnum1 = parseInt(document.getElementById("num1").value);
  let num2 = parseInt(document.getElementById("num2").value);
  let operacion = document.getElementById("op").value;
  let resultDiv = document.getElementById("result"); // Inicialización del elemento donde imprimir

  switch (operacion) {
    case "+":
      suma(num1, num2, resultDiv);
      break;
    case "-":
      resta(num1, num2, resultDiv);
      break;
    case "*":
      multiplicacion(num1, num2, resultDiv);
      break;
    case "/":
      division(num1, num2, resultDiv);
      break;
    case "%":
      modulo(num1, num2, resultDiv);
      break;
    default:
      imprimir(resultDiv, "Operación no válida");
      break;
  }
}

function suma(num1, num2, resultDiv) {
  let resultado = num1 + num2;
  imprimir(resultDiv, resultado); // Usar la función imprimir
}

function resta(num1, num2, resultDiv) {
  let resultado = num1 - num2;
  imprimir(resultDiv, resultado); // Usar la función imprimir
}

function multiplicacion(num1, num2, resultDiv) {
  let resultado = num1 * num2;
  imprimir(resultDiv, resultado); // Usar la función imprimir
}

function division(num1, num2, resultDiv) {
  if (num2 === 0) {
    imprimir(resultDiv, "Error: División por cero"); // Usar la función imprimir
  } else {
    let resultado = num1 / num2;
    imprimir(resultDiv, resultado); // Usar la función imprimir
  }
}

function modulo(num1, num2, resultDiv) {
  if (num2 === 0) {
    imprimir(resultDiv, "Error: División por cero"); // Usar la función imprimir
  } else {
    let resultado = num1 % num2;
    imprimir(resultDiv, resultado); // Usar la función imprimir
  }
}

// Función para imprimir en un elemento HTML
function imprimir(resultDiv, contenido) {
  resultDiv.innerHTML = contenido; // Asigna el contenido al elemento HTML
}
