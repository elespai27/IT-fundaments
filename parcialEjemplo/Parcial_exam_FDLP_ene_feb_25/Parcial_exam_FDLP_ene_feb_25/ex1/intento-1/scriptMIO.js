"use strict";
function principal() {
  const nombresProductos = [
    "Manzanas",
    "Naranjas",
    "Plátanos",
    "Peras",
    "Uvas",
  ];
  const cantidades = [10, null, 5, undefined, -3];
  const precios = [2, 3, 1.5, 2.5, 4];
  let resultDiv = document.getElementById("result");
  resultDiv.innerHTML = recibeArr(nombresProductos, cantidades, precios);
  //habemus
  //10 manzanas, 2€
  //null Naranjas, 3€
  //5 Platanos, 1.5€
  //undefined Peras, 2.5€
  //-3 Uvas, 4€
}
function recibeArr(nombresProductos, cantidades, precios) {
  //debe calcular el valor total del inventario
  //Los "valores negativos" | "null" | "undefined"
  // no deben afectar el cálculo del valor total.
  let resultado = 0;

  for (let i = 0; i < nombresProductos.length; i++) {
    //prettier-ignored
    if (cantidades[i] !== null && cantidades[i] !== undefined && cantidades[i] >= 0){
      resultado += cantidades[i] * precios[i];
  }

  return resultado; //valor total del inventario
}
}
