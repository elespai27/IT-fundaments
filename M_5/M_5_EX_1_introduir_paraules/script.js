"use strict";





function començar() {
  let numParaules = parseInt(prompt("Quantes paraules vols introduir?"));
  let paraules = prompt("Introdueix les paraules");
  let arrayParaules = [];
  let resultDiv = document.getElementById("result");

  for (let index = 0; index < numParaules - 1; index++) {
    let paraules = prompt("Introdueix les paraules");
    arrayParaules.push(paraules)[index];
  }

    resultDiv.innerHTML = arrayParaules.join(", ");
}

