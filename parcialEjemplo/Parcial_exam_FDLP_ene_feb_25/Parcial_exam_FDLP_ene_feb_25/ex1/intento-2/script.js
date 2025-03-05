"use strict";

function recibirArraysEntrada1() {
  const nombresProductos = [
    "Manzanas",
    "Naranjas",
    "Plátanos",
    "Peras",
    "Uvas",
  ];
  const cantidades = [10, null, 5, undefined, -3];
  const precios = [2, 3, 1.5, 2.5, 4];
  let valorTotalInventario = 0;
  let valorTotalInventarioEntrada2 = recibirArraysEntrada2(nombresProductos);
  let resultado = document.getElementById("result");

  if (nombresProductos.length == cantidades.length && cantidades.length == precios.length) {
    console.log("se cumple que la longitud de los 3 arrays es la misma");
  } else {
    console.log("no se cumple la comprobación de longitud de los 3 arrays");
  }

  for (let i = 0; i < nombresProductos.length; i++) {
    if (cantidades[i] !== null && cantidades[i] !== undefined && cantidades[i] >= 0)    
    valorTotalInventario += cantidades[i] * precios [i]
    
}
resultado.innerHTML = 
`${valorTotalInventario} 
${valorTotalInventarioEntrada2}`

}

function recibirArraysEntrada2(nombresProductos) {
  const cantidades = [15, 8, null, 12, undefined];
  const precios = [1.5, 2, 3, 2.5, 4];
  let valorTotalInventario = 0;
  console.log(nombresProductos);

  
  if (nombresProductos.length == cantidades.length && cantidades.length == precios.length) {
    console.log("se cumple que la longitud de los 3 arrays es la misma");
  } else {
    console.log("no se cumple la comprobación de longitud de los 3 arrays");
  }

  for (let i = 0; i < nombresProductos.length; i++) {
    if (cantidades[i] !== null && cantidades[i] !== undefined && cantidades[i] >= 0)    
     valorTotalInventario += cantidades[i] * precios [i]
}
return valorTotalInventario
}
