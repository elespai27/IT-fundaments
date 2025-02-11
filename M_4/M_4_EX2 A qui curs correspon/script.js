"use strict";

function myFunction() {

    let edat = parseInt(document.getElementById("edat").value);
    let resultDiv = document.getElementById("result");

    if (edat >= 18) {
        resultDiv.innerHTML = `FP o Universitat`        
    } else if (edat >= 16){
        resultDiv.innerHTML = `batxillerat`        
    } else if (edat >= 12){
        resultDiv.innerHTML = `ESO` 
    } else if (edat >= 6){
        resultDiv.innerHTML = `Primària`        
    } else {
        resultDiv.innerHTML = `preescolar`        
    }

}