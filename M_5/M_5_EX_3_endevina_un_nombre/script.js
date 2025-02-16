"use strict";

function començar() {
  let numOrdinador = Math.ceil(Math.random() * 10);
  let resultDiv = document.getElementById("result");
  let numUsuario;

  if ((isNaN(numUsuario)) || (numUsuario < 1 || numUsuario > 10)) {
    resultDiv.innerHTML = `Introdueix un valor vàlid.`;
    return;
  }

  do {   
      numUsuario = parseInt(prompt("Endevina qui nombre és ( del 1 al 10)"));    
  } while (numUsuario !== numOrdinador);

resultDiv.innerHTML = "Enhorabuena el nombre era " + numOrdinador + "!";


}


// // resultDiv.innerHTML = `Enhorabona, el nombre era ${numOrdinador}!`;
// resultDiv.innerHTML = "Enhorabuena el nombre era " + numOrdinador + "!";
