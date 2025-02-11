"use strict";

function començar() {
  let numOrdinador = Math.ceil(Math.random() * 10);
  let resultDiv = document.getElementById("result");
  let numUsuario = parseInt(prompt("Endevina qui nombre és ( del 1 al 10)"));

  if (isNaN(numUsuario) || numUsuario < 1 || numUsuario > 10) {
    resultDiv.innerHTML = `Introdueix un valor vàlid.`;
    return;
  }

  while (numUsuario !== numOrdinador) {
  
      resultDiv.innerHTML = "No és correcte. Torna-ho a provar.";
      numUsuario = parseInt(prompt("Endevina qui nombre és ( del 1 al 10)"));
    }
  
  resultDiv.innerHTML = `Enhorabona, el nombre era ${numOrdinador}!`;
}
