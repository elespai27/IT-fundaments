"use strict";

function myFunction() {

  let amplada = parseFloat(document.getElementById("num1").value);
  let llargada = parseFloat(document.getElementById("num2").value);
  let mans = parseInt(document.getElementById("num3").value);
  const cobertura = 12;

  let resultDiv = document.getElementById("result");

  let area = amplada * llargada;
  let litres = area / cobertura;
  let total = litres * mans;

  resultDiv.innerHTML = `La superfície total a pintar és de ${area.toFixed(2)} m2. 
Es necessiten ${litres.toFixed(2)} litres de pintura per cobrir-la. 
El total de litres necessaris per a ${mans} mans és de ${total.toFixed(2)} litres.`;

}