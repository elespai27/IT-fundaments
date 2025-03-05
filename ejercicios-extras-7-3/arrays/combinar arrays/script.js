"use script";

// EXTRA_ARRAYS2 - Unión de dos arrays sin duplicados en un tercer array.
//     Ejemplo: const array1 = [1, 2, 3];
//          const array2 = [3, 4, 5];
//          Resultado --> [1, 2, 3, 4, 5]

function operar() {
  const array1 = [1, 2, 3];
  const array2 = [3, 4, 5];
  const combinado = [];
  const combinadoManual = [];
  const resultado = [];
  let resultP = document.getElementById("result");

  //Combinar ambos arrays corr
  for (let i = 0; i < array1.length; i++) {
    combinado.push(array1[i]);
    combinadoManual[combinadoManual.length] = array1[i]
  }

  for (let j = 0; j < array2.length; j++) {
    combinado.push(array2[j]);
    combinadoManual[combinadoManual.length] = array2[j]
  }

  for (let i = 0; i < combinado.length; i++) {
    let unico = true;

    for (let j = 0; j < i; j++) {
      if (combinado[i] === combinado[j]) {
        unico = false;
        break;
      }
    }

    if (unico) {
      resultado[resultado.length] = combinado[i];
    }
  }

  resultado.sort();
  resultP.innerHTML = resultado;
}
