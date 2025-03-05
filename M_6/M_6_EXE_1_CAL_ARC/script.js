"use strict";


let resultDiv = document.getElementById("result");
function operar() {

  let num1 = parseInt(document.getElementById("num1").value);
  let num2 = parseInt(document.getElementById("num2").value);
  let operacion = document.getElementById("op").value;

  switch (operacion) {
    case "+":
      suma(num1, num2);
      break;
    case "-":
      resta(num1, num2);
      break;
    case "*":
      multiplicacion(num1, num2);
      break;
    case "/":
      division(num1, num2);
      break;
    case "%":
      modulo(num1, num2);
      break;
    default:
      resultDiv.innerHTML = "Operación no válida";
      break;
  }

}


  function suma(num1, num2) {
    let resultado = num1 + num2;
    resultDiv.innerHTML = resultado;
  }

  function resta(num1, num2) {
    let resultado = num1 - num2;
    resultDiv.innerHTML = resultado;
  }

  function multiplicacion(num1, num2) {
    let resultado = num1 * num2;
    resultDiv.innerHTML = resultado;
  }

  function division(num1, num2) {
    let resultado = num1 / num2;
    resultDiv.innerHTML = resultado;
  }

  function modulo(num1, num2) {
    let resultado = num1 % num2;
    resultDiv.innerHTML = resultado;
  }

