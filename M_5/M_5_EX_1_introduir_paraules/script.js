"use strict";


function començar() {
  let numParaules = parseInt(prompt("Quantes paraules vols introduir?"));
  let arrayParaules = [];
  let resultDiv = document.getElementById("result");
  let respuesta = ""; 

  for (let index = 0; index < numParaules; index++) {
    let paraula = prompt("Introdueix les paraules");
    arrayParaules.push(paraula);
  }

  for (let index = 0; index < arrayParaules.length; index++) {
    respuesta += arrayParaules[index] + " ";
}
resultDiv.innerHTML = respuesta;

}

