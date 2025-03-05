"use strict";
function comenzar() {
  const titulosLibros = [
    "El Quijote",
    "Cien Años de Soledad",
    "1984",
    "Moby Dick",
    "Hamlet",
  ];
  const cantidades = [5, null, 10, undefined, -2];
  const precios = [20, 15, 10, 25, 30];
  let resultDiv = document.getElementById("result");

  // Filtrar datos inválidos
  const cantidadesValidadas = filtrarDatosInvalidos(cantidades);

  // Validar longitudes antes de realizar cálculos
  if (!validarLongitudArrays(titulosLibros, cantidadesValidadas, precios)) {
    resultDiv.innerHTML = "Los arrays no tienen la misma longitud.";
    return;
  }

  // Calcular el valor total del inventario
  const valorTotalInventario = calcularValorInventario(
    cantidadesValidadas,
    precios,
    titulosLibros
  );

  resultDiv.innerHTML = `El valor total del inventario es: ${valorTotalInventario}`;
}

function validarLongitudArrays(titulosLibros, cantidades, precios) {
  return (
    titulosLibros.length === cantidades.length &&
    cantidades.length === precios.length
  );
}

function filtrarDatosInvalidos(cantidades) {
  let arraAux = [];

  for (let i = 0; i < cantidades.length; i++) {
    if (
      cantidades[i] == null ||
      cantidades[i] == undefined ||
      cantidades[i] < 0
    ) {
      arraAux.push(1); // Reemplazar valores inválidos por 1
    } else {
      arraAux.push(cantidades[i]); // Mantener valores válidos
    }
  }
  return arraAux;
}

function calcularValorInventario(cantidadesValidadas, precios, titulosLibros) {
  let valorTotalInventario = 0; // Inicializamos aquí el acumulador

  for (let i = 0; i < titulosLibros.length; i++) {
    console.log(
      `Libro: ${titulosLibros[i]}, Cantidad: ${cantidadesValidadas[i]}, Precio: ${precios[i]}`
    ); // Depuración: Verificar valores en cada iteración

    valorTotalInventario += precios[i] * cantidadesValidadas[i];
  }

  return valorTotalInventario;
}
