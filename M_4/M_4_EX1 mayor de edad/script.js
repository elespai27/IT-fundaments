"use strict";

function myFunction() {

  let nom = document.getElementById("nom").value;
  let cognom = document.getElementById("cognom").value;
  let edat = document.getElementById("edat").value;
  let resultDiv = document.getElementById("result");

  if (edat >= 18 && edat < 100) {
    resultDiv.innerHTML = `${nom} ${cognom} ets MAJOR d'edat`;
  } else if (edat > 0 && edat < 18) {
    resultDiv.innerHTML = `${nom} ${cognom} ets MENOR d'edat`;
  } else {
    resultDiv.innerHTML = `Introdueix un valor vàlid`;
  }


}
