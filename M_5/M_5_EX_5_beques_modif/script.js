"use strict";

function solicitarBeques() {
  let resulDiv = document.getElementById("result");
  const beques = [];
  const MAX_BECAS = 5;
  let mensaje = "";
  


  do {
    let nom = prompt("Introdueix el teu nom").toLowerCase();
    let titol = prompt("Tens titol?").toLowerCase();
    let edat = parseInt(prompt("Introdueix la teva edat"));
    let atur = prompt("Estàs en el atur?").toLowerCase();

    if ((edat >= 18 && titol == "si") || (edat >= 18 && atur == "si")) {
      mensaje = "Tens concedida la beca";
      beques.push(nom);
      console.log(beques);
    } else {
      mensaje = "No tens concedida la beca";      
    }

  } while (beques.length < MAX_BECAS);

  resulDiv.innerHTML = "Les beques concedides són: " + beques.join(", ");
}
