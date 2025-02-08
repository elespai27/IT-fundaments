"use strict";

function myFunction() {


  let edat = parseInt(document.getElementById("edat").value);
  let titol = document.getElementById("titol").value;
  let atur = document.getElementById("atur").value;
  let resultDiv = document.getElementById("result");

  if (edat >= 18 && titol == "si" && atur == "si") {
    resultDiv.innerHTML = "Tens dret a beca";
  } else {
    resultDiv.innerHTML = "No tens dret a beca";
  }
  
}

