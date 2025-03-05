"use script";

function asignarDelegadas() {
  let alumnos = parseInt(document.getElementById("alumnas").value);
  const nombres = [];
  const votos = [];
  let mensaje = "";
  let resultP = document.getElementById("result");

  let i = alumnos;
  while (i > 0) {
    nombres.push(prompt("introduce el nombre de las "  +alumnos+ " alumnas, conteo: " + (i)).toLowerCase());
    i--;
  }

  for (let i = 0; i < alumnos; i++) {
    let votoEsValido = false;

    while (!votoEsValido) {
      let voto = prompt("escribe el nombre de tu candidata favorita").toLowerCase();

      // Validamos si el voto coincide con algún nombre registrado
      for (let j = 0; j < nombres.length; j++) {
        if (voto == nombres[j]) {
          votoEsValido = true; // Marcamos como válido
          break; // Salimos del bucle porque ya encontramos una coincidencia
        }
      }

      // Si es válido, lo agregamos al array de votos
      if (votoEsValido) {
        votos.push(voto);
      } else {
        alert("Ingresa un voto válido");
      }
    }
  }

  const conteoVotos = [];
  //un array para inicializar todos los indices de nombre en conteo de votos con 0 e ir sumando votos en cada indice, después!
  for (let m = 0; m < nombres.length; m++) {
    conteoVotos[m] = 0;
  }

  // Contamos los votos
  for (let k = 0; k < votos.length; k++) {
    // Recorremos todos los votos
    for (let l = 0; l < nombres.length; l++) {
      // Recorremos todos los nombres
      if (votos[k] == nombres[l]) {
        // Si el voto coincide con un nombre registrado
        conteoVotos[l]++; // Incrementamos el contador correspondiente al índice 'l'
        break; // Salimos del bucle interno porque ya encontramos coincidencia para este voto
      }
    }
  }

  let maxVotos = 0;
  let indiceGanadoras = [];

  for (let m = 0; m < conteoVotos.length; m++) {
    if (conteoVotos[m] > maxVotos) {
      maxVotos = conteoVotos[m];
      indiceGanadoras = [m];
    } else if (conteoVotos[m] == maxVotos) {
      indiceGanadoras.push(m);
    }
  }

  if (indiceGanadoras.length > 1) {
    mensaje = "Hubo empate entre: ";
    for (let t = 0; t < indiceGanadoras.length; t++) {
      mensaje += nombres[indiceGanadoras[i]] + " ";
    }
  } else {
    mensaje = "La ganadora es " + nombres[indiceGanadoras[0]];
  }
  resultP.innerHTML = mensaje;
}

//Se muestra por pantalla quien ha ganado o si ha habido empate. Y si ha habido algun voto nulo
