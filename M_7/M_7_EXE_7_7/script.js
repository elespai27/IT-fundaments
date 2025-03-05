"use strict";

function esBisiesto() {
  //obtenemos los valores de los inputs
  let inicio = parseInt(document.getElementById("inicio").value);
  let year = parseInt(document.getElementById("year").value);
  let final = parseInt(document.getElementById("final").value);
  //los validamos
  if (isNaN(inicio) || isNaN(final)) {
    document.getElementById("result").innerHTML = "Introduce valores correctos";
    return;
  }

  if (inicio > final) {
    document.getElementById("result").innerHTML =
      "El año inicial debe ser menos o igual que el año final";
    return;
  }

  //declaramo las variables para poder imprimir

  let resultDiv = document.getElementById("result");
  const [bisiestos, noBisiestos] = acumularBisiesto(inicio, final);

  let mensajeBisiestos = bisiestos.length > 0
  ? "Estos son los años bisiestos: " +bisiestos.join(", ")
  : "No hay años bisiestos en este rango"

  let mensajeNoBisiestos = noBisiestos.length > 0
  ? "Estos son los años no bisiestos: " +noBisiestos.join(", ")
  : "No hay años no bisiestos en este rango"


  //festival de impresiones en el Div
  resultDiv.innerHTML = verificarYearMensaje(year) + "<br>";
  resultDiv.innerHTML += "Mi ternario es muy " + hacerTernario(year) + "<br>";
  resultDiv.innerHTML += mensajeBisiestos + "<br>";
  resultDiv.innerHTML += mensajeNoBisiestos + "<br>";
}

function verificarYear(year) {
  return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
}

function verificarYearMensaje(year) {
  if (verificarYear(year)) {
    return "El año " + year + " es bisiesto";
  } else {
    return "El año " + year + " no es bisiesto";
  }
}

function hacerTernario(year) {
  //porque me gusta el ternario
  return year % 400 == 0 || (year % 4 === 0 && year % 100 !== 0);
}

function acumularBisiesto(inicio, final) {
  const arrBisiestos = [];
  const arrNoBisiestos = [];

  for (let i = inicio; i <= final; i++) {
    if (hacerTernario(i)) {
      arrBisiestos.push(i);
    }else{
      arrNoBisiestos.push(i);
    }
  }
  return [arrBisiestos, arrNoBisiestos];
}


