"use strict";

function operar() {
  let frase = prompt("escribe una frase");
  let mensaje = "";
  let resultP = document.getElementById("result");
  let mayusculas = false;
  let minusculas = false;

  //validamos si la frase está vacía
  if (!frase) return mensaje = "No has escrito ninguna frase";

  for (let i = 0; i < frase.length; i++) {
    let letra = frase[i];
    if (letra === letra.toUpperCase() && isNaN(letra)) {
      mayusculas = true;
    } else if (letra === letra.toLowerCase() && isNaN(letra)) {
      minusculas = true;
    }
    if (minusculas && mayusculas){
        break;
    }
  }

  if (mayusculas && minusculas) {
    mensaje = "Tu frase es un batiburrillo de mayús y ninús";
  } else if (mayusculas) {
    mensaje = "Tu frase tiene solo mayúsculas";
  } else if (minusculas) {
    mensaje = "Tu frase solo tiene minúsculas";
  } else {
    mensaje = "introduce valores correctos";
  }

  resultP.innerHTML = mensaje;
}
