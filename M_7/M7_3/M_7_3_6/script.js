"use strict";

function operar() {
  const arrAleatorio = [];
  let resultP = document.getElementById("result");
  let mensajePares = 0;
  let mensajeImpares = 0;

  for (let i = 0; i < 20; i++) {
    let numero = Math.ceil(Math.random() * 50);
    arrAleatorio.push(numero);
    console.log(arrAleatorio);
    }
for (let j = 0; j < arrAleatorio.length; j++) {
    if (arrAleatorio[j] % 2 === 0) {
        mensajePares += arrAleatorio[j];
    }else if (arrAleatorio[j] % 2 !== 0){
        mensajeImpares += arrAleatorio[j];
    }

    }

    resultP.innerHTML = `la suma de los pares es ${mensajePares}
    la suma de los impares es ${mensajeImpares} 
    y los números generados fueron ${arrAleatorio.join(", ")}`

}
