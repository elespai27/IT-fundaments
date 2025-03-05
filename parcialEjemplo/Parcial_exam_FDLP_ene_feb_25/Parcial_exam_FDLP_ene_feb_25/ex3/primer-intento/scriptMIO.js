"use strict";

function iniciarCarrera() {
  // Variables iniciales
  let distancia1 = 0; // Distancia recorrida por el jugador 1
  let distancia2 = 0; // Distancia recorrida por el jugador 2
  let combustible1 = 100; // Combustible del jugador 1
  let combustible2 = 100; // Combustible del jugador 2

  let resultado = ""; // Variable para almacenar el estado de la carrera
  let i = 0;

  // Bucle while: continúa mientras ambos jugadores tengan combustible
  while (combustible1 > 0 && combustible2 > 0) {
    i++; // contador
    // Turno del jugador 1
    let avance1 = Math.ceil(Math.random() * 10); // Avance aleatorio entre 1 y 10
    if (combustible1 >= avance1) {
      distancia1 += avance1;
      combustible1 -= avance1;
    } else {
      distancia1 += combustible1; // Avanza lo que queda de combustible
      combustible1 = 0; // Se queda sin combustible
    }

    // Turno del jugador 2
    let avance2 = Math.ceil(Math.random() * 10); // Avance aleatorio entre 1 y 10
    if (combustible2 >= avance2) {
      distancia2 += avance2;
      combustible2 -= avance2;
    } else {
      distancia2 += combustible2; // Avanza lo que queda de combustible
      combustible2 = 0; // Se queda sin combustible
    }

    // Actualizar el estado de la carrera en cada turno
    resultado += `
            Turno ${i}:<br> 
            Jugador 1: ${distancia1} metros, Combustible restante: ${combustible1}
            Jugador 2: ${distancia2} metros, Combustible restante: ${combustible2}
            
        `;
  }

  // Determinar el ganador al final del bucle
  if (distancia1 > distancia2) {
    resultado += `¡Jugador 1 gana la carrera!`;
  } else if (distancia2 > distancia1) {
    resultado += `¡Jugador 2 gana la carrera!`;
  } else {
    resultado += `¡Es un empate!`;
  }

  // Mostrar el resultado en el div con id "estado"
  document.getElementById("result").innerHTML = resultado;
}
