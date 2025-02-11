"use strict";

function començar() {
  let numOrdinador = Math.ceil(Math.random() * 10);
  let resultDiv = document.getElementById("result");

  for (let index = 0; index < 5; index++) {
    let numUsuario = parseInt(prompt("Endevina qui nombre és ( del 1 al 10)"));

    if (isNaN(numUsuario) || numUsuario < 1 || numUsuario > 10) {
      resultDiv.innerHTML = `Introdueix un valor vàlid.`;
      return;
    }

    if (numUsuario === numOrdinador) {
      resultDiv.innerHTML = `Enhorabona, el nombre era ${numOrdinador}!`;
      return;
    } else {
      resultDiv.innerHTML = "No és correcte. Torna-ho a provar.";
    }
  }

  resultDiv.innerHTML = `Ho sento, has esgotat les oporuitats, el nombre era ${numOrdinador}.`;
}
