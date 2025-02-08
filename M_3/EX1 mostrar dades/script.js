"use strict";

function miFuction() {
  let nom = document.getElementById("nom").value;
  let cognom = document.getElementById("cognom").value;
  let edat = document.getElementById("edat").value;

  let resultDiv = document.getElementById("result");

  resultDiv.innerHTML = `<pre>Les dades personals són: 
nom: ${nom} 
cognom: ${cognom} 
i la edat: ${edat}</pre>`;
}
