"use strict";

function myFunction() {

    let edat = parseInt(document.getElementById("edat").value);
    let resultDiv = document.getElementById("result");

    if (edat <= 5) {
        resultDiv.innerHTML = `preescolar`        
    } else if (edat >= 6 && edat <= 11){
        resultDiv.innerHTML = `primària`        
    } else if (edat >= 12 && edat <= 15){
        resultDiv.innerHTML = `ESO` 
    } else if (edat >= 16 && edat <= 17){
        resultDiv.innerHTML = `batxillerat`        
    } else {
        resultDiv.innerHTML = `FP o Universitat`        
    }

}