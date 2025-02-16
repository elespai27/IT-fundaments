"use strict";

function jugar() {
  let numAleatori = Math.ceil(Math.random() * 500);
  let numUsuaria;
  let resultado;
  let resultDiv = document.getElementById("result");
  let contador = 0;
  const MAX_INTENTOS = 3;
  
  do {
    numUsuaria = parseInt(prompt("Endevina un nombre"));

    if (isNaN(numUsuaria) || (numUsuaria < 1 || numUsuaria > 500) ) {
        resultDiv.innerHTML = "El número ha d'estar entre 1 i 500";
        return;        
    }

    if (numAleatori > numUsuaria) {
      resultado = numAleatori - numUsuaria;
      if (resultado >= 50) {
        resultDiv.innerHTML = "Fred, fred: el teu número és més petit";
      } else if (resultado >= 15 && resultado < 50) {
        resultDiv.innerHTML = "Tebi, Tebi: el teu número és més petit";
      } else if (resultado < 15) {
        resultDiv.innerHTML = "Calent, calent: el teu número és més petit";
      }
    }

    if (numAleatori < numUsuaria) {
      resultado = numUsuaria - numAleatori;
      if (resultado >= 50) {
        resultDiv.innerHTML = "Fred, fred: el teu número és més gran";
      } else if (resultado >= 15 && resultado < 50) {
        resultDiv.innerHTML = "Tebi, Tebi: el teu número és més gran";
      } else if (resultado < 15) {
        resultDiv.innerHTML = "Calent, calent: el teu número és més gran";
      }
    }
    contador = contador + 1;
  } while (numAleatori !== numUsuaria && contador < MAX_INTENTOS);

  if (numAleatori === numUsuaria) {
    resultDiv.innerHTML = "Has endevinat, el nombre era: " + numAleatori;
  }else{
    resultDiv.innerHTML = "GAME OVER";
  } 
}
