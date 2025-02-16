"use strict";


function sumar() {

    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let resultDiv = document.getElementById("result");
    let suma = 0;
    const nombres = [];

    for (let index = num1; index <= num2; index++) {
         suma += index;// Sumo els valors
         nombres.push(index)
        
   }
    //resultDiv.innerHTML = `La suma dels valors entre ${num1} i ${num2} és: ${suma} <br> Els nombres són: ${nombres} <br>`;
    resultDiv.innerHTML += "La suma dels valors entre " + num1 + " i " + num2 + " és: " + suma + "<br> Els nombres són: " + nombres;
} 
