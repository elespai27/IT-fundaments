"use strict";

function jugar() {
  let combustibleJugador1 = 100;
  let combustibleJugador2 = 100;
  let cocheJugador1 = 100;
  let cocheJugador2 = 100;

  let mensaje = document.getElementById("result");

  let i = 0;

  while (cocheJugador1 >= 0 || cocheJugador2 >= 0) {


    let avanceJugador1 = Math.ceil(Math.random() * 10);
    let avanceJugador2 = Math.ceil(Math.random() * 10);

    cocheJugador1 = combustibleJugador1 - avanceJugador1;  
    combustibleJugador1 = cocheJugador1;
    if (cocheJugador1 < avanceJugador1) {
        return mensaje.innerHTML += "el jugador 1 ser ha quedado sin combustible, el ganador es el jugador 2";
      }
 
    cocheJugador2 = combustibleJugador2 - avanceJugador2;
    combustibleJugador2 = cocheJugador2;
    if (cocheJugador2 < avanceJugador2) {
        return mensaje.innerHTML += "el jugador 2 ser ha quedado sin combustible, el ganador es el jugador 1";
      }

    mensaje.innerHTML +=
      "Jugador 1 avanza " +
      avanceJugador1 +
      " unidades <br>. Combustible restante: " +
      cocheJugador1 +
      "<br>";
    mensaje.innerHTML +=
      "Jugador 2 avanza " +
      avanceJugador2 +
      " unidades <br>. Combustible restante: " +
      cocheJugador2 +
      "<br>";

    i--;
  }
}
