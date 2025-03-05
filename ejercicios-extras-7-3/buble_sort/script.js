"use strict";

function operar() {
  const array1 = [];
  const array2 = [];

  //un bucle que en una vuelta incluya los números del 100 al 5
  //en intervalos de 5, y en el array2 los múltiplos de 3 de la serie
  //anterior. una vez finalizado el bucle, ordenar los elementos
  //ascendentes i mostrarlos en la pantalla

  for (let i = 100; i > 0; i -= 5) {
    if (i % 5 == 0) {
      array1.push(i);
    }
    if (i % 3 == 0) {
      array2.push(i);
    }
  }
  
  //buble sort
  for (let i = 0; i < array2.length; i++) {
    for (let j = 0; j < array2.length - 1; j++) {
        if (array2[j] > array2[j + 1]) {
            let aux = array2[j];
            array2[j] = array2[j + 1];
            array2[j + 1] = aux
            
        };
        
    }
    
  }

  console.log(array1);
  console.log(array2);
}
