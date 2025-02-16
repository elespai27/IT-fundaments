"use strict";

function dibuixar() {
  let alçada = parseInt(document.getElementById("alçada").value);
  let resultDiv = document.getElementById("result");
  let horizontal = parseInt(alçada / 2 + 1);

  for (let i = 1; i < alçada; i++) {
    resultDiv.innerHTML += "* <br>";
    if (i === alçada - 1)
      for (let j = 1; j <= horizontal; j++) {
        resultDiv.innerHTML += "* ";
      }
  }
}
