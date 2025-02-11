"use strict";

function traduir() {

  let num = parseInt(document.getElementById("num").value);
  let resultDiv = document.getElementById("result");

  if (isNaN(num) || num < 0 || num > 99) {
    resultDiv.innerHTML = "Escriu un valor vàlid";
    return;
  }

  const unitats = ["zero", "u", "dos", "tres", "quatre", "cinc", "sis", "set", "vuit", "nou"];
  const especials = ["deu", "onze", "dotze", "tretze", "catorze", "quinze", "setze", "disset", "divuit", "dinou"];
  const desenes = ["", "deu", "vint", "trenta", "quaranta", "cinquanta", "seixanta", "setanta", "vuitanta", "noranta"];

  let resultat = "";

  if (num < 10) {
    resultat = unitats[num];  // 0 - 9
  } else if (num < 20) {
    resultat = especials[num - 10]; // 10 - 19
  } else if (num % 10 === 0) {
    resultat = desenes[Math.floor(num / 10)]; // 20, 30, 40, ..., 90
    //Math.floor(num / 10) nos da la decena. Ejemplo: 20 / 10 = 2
  } else {
    resultat = `${desenes[Math.floor(num / 10)]}-i-${unitats[num % 10]}`; // 21-29, 31-39, etc.
    //num % 10 nos da la unidad. Ejemplo: 21 % 10 = 1
  }

  resultDiv.innerHTML = resultat;
}
