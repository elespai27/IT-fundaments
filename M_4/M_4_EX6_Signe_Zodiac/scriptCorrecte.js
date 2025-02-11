"use strict";

function mostrar() {
  let dia = parseInt(document.getElementById("dia").value);
  let mes = parseInt(document.getElementById("mes").value);
  let resultDiv = document.getElementById("result");

  if (isNaN(dia) || (dia < 1 || dia > 31)) {
    resultDiv.innerHTML = `Escriu un valor válid`;
    return;
  }
  //separar los condicionales mes en el switch

  switch (mes) {
    case 1://el parse int elimina el 0 davant del número
      if (dia >= 20) {
        resultDiv.innerHTML = `El teu signo de zodíac és: Aquari`;
      } else {
        resultDiv.innerHTML = `El teu signo de zodíac és: Capricorn`;
      }
      break;
    case 2:
      if (dia <= 18) {
        resultDiv.innerHTML = `El teu signo de zodíac és: Aquari`;
      } else {
        resultDiv.innerHTML = `El teu signo de zodíac és: Peixos`;
      }
      break;
    case 3:
      if (dia <= 20) {
        resultDiv.innerHTML = `El teu signo de zodíac és: Peixos`;
      } else {
        resultDiv.innerHTML = `El teu signo de zodíac és: Àries`;
      }
      break;
    case 4:
      if (dia <= 19) {
        resultDiv.innerHTML = `El teu signo de zodíac és: Àries`;
      } else {
        resultDiv.innerHTML = `El teu signo de zodíac és: Taure`;
      }
      break;
    case 5:
      if (dia <= 20) {
        resultDiv.innerHTML = `El teu signo de zodíac és: Taure`;
      } else {
        resultDiv.innerHTML = `El teu signo de zodíac és: Bessons`;
      }
      break;
    case 6:
      if (dia <= 20) {
        resultDiv.innerHTML = `El teu signo de zodíac és: Bessons`;
      } else {
        resultDiv.innerHTML = `El teu signo de zodíac és: Cranc`;
      }
      break;
    case 7:
      if (dia <= 22) {
        resultDiv.innerHTML = `El teu signo de zodíac és: Cranc`;
      } else {
        resultDiv.innerHTML = `El teu signo de zodíac és: Lleó`;
      }
      break;
    case 8:
      if (dia <= 22) {
        resultDiv.innerHTML = `El teu signo de zodíac és: Lleó`;
      } else {
        resultDiv.innerHTML = `El teu signo de zodíac és: Verge`;
      }
      break;
    case 9:
      if (dia <= 22) {
        resultDiv.innerHTML = `El teu signo de zodíac és: Verge`;
      } else {
        resultDiv.innerHTML = `El teu signo de zodíac és: Balança`;
      }
      break;
    case 10:
      if (dia <= 22) {
        resultDiv.innerHTML = `El teu signo de zodíac és: Balança`;
      } else {
        resultDiv.innerHTML = `El teu signo de zodíac és: Escorpí`;
      }
      break;
    case 11:
      if (dia <= 21) {
        resultDiv.innerHTML = `El teu signo de zodíac és: Escorpí`;
      } else {
        resultDiv.innerHTML = `El teu signo de zodíac és: Sagitari`;
      }
      break;
    case 12:
      if (dia <= 21) {
        resultDiv.innerHTML = `El teu signo de zodíac és: Sagitari`;
      } else {
        resultDiv.innerHTML = `El teu signo de zodíac és: Capricorn`;
      }
      break;
    default:
      resultDiv.innerHTML = `Escriu un mes válid`;
      break;
  }
}
