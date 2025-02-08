"use strict";

function mostrar() {
    let dia = parseInt(document.getElementById("dia").value);
    let mes = parseInt(document.getElementById("mes").value);
    let resultDiv = document.getElementById("result");
  
    if (isNaN(dia) || isNaN(mes) || dia < 1 || dia > 31 || mes < 1 || mes > 12) {
      resultDiv.innerHTML = `Escriu un valor válid`;
    }

    if ((mes === 1 && dia >= 20) || (mes === 2 && dia <= 18)) {
        resultDiv.innerHTML = `El teu signo de zodíac és: Aquari`;
        
    } else if ((mes === 2 && dia >= 19) || (mes === 3 && dia <= 20)) {
        resultDiv.innerHTML = `El teu signo de zodíac és: Peixos`;
        
    } else if ((mes === 3 && dia >= 21) || (mes === 4 && dia <= 19)) {        
        resultDiv.innerHTML = `El teu signo de zodíac és: Àries`;
        
    } else if ((mes === 4 && dia >= 20) || (mes === 5 && dia <= 20)) {
        resultDiv.innerHTML = `El teu signo de zodíac és: Taure`;
        
    } else if ((mes === 5 && dia >= 21) || (mes === 6 && dia <= 20)) {
        resultDiv.innerHTML = `El teu signo de zodíac és: Bessons`;
        
    } else if ((mes === 6 && dia >= 21) || (mes === 7 && dia <= 22)) {
        resultDiv.innerHTML = `El teu signo de zodíac és: Cranc`;
        
    } else if ((mes === 7 && dia >= 23) || (mes === 8 && dia <= 22)) {                
        resultDiv.innerHTML = `El teu signo de zodíac és: Lleó`;
        
    } else if ((mes === 8 && dia >= 23) || (mes === 9 && dia <= 22)) {
        resultDiv.innerHTML = `El teu signo de zodíac és: Verge`;
        
    } else if ((mes === 9 && dia >= 23) || (mes === 10 && dia <= 22)) {
        resultDiv.innerHTML = `El teu signo de zodíac és: Balança`;
        
    } else if ((mes === 10 && dia >= 23) || (mes === 11 && dia <= 21)) {
        resultDiv.innerHTML = `El teu signo de zodíac és: Escorpi`;
        
    } else if ((mes === 11 && dia >= 22) || (mes === 12 && dia <= 21)) {
        resultDiv.innerHTML = `El teu signo de zodíac és: Sagitari`;
        
    } else if ((mes === 12 && dia >= 22) || (mes === 1 && dia <= 19)) {
        resultDiv.innerHTML = `El teu signo de zodíac és: Capricorn`;
    } else {
        resultDiv.innerHTML = `Escriu un valor válid`;
    }

}