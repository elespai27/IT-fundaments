"use strict";

function començar() {
  let numOrdinador = Math.ceil(Math.random() * 10);
  let resultDiv = document.getElementById("result");
  let numUsuario;
  let contador = 0;
  const MAX_INTENTOS = 5;


  do {
    numUsuario = parseInt(prompt("Tria un nombre"));
    contador = contador + 1;
    
  } while (numOrdinador !== numUsuario && contador < MAX_INTENTOS);

  if (numOrdinador == numUsuario) {
    resultDiv.innerHTML = "Enhorabuena el nombre era el: " + numOrdinador + ". Has necessitat " + contador + "intentos"
    
  }else{
    resultDiv.innerHTML = "GAME OVER"

  }


}
