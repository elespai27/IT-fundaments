"use strict";


function calcular(params) {
    let num = parseInt(document.getElementById("num").value);
    let resultDiv = document.getElementById("result");

    resultDiv.innerHTML = "El factorial del " + num + "!" + " es:<br>" + buscarFactorial(num)
    
}

function buscarFactorial(num) {
 
    let multiplicacion = 1;
    let secuencia = "";

    for (let i = num; i > 0; i--) {
        multiplicacion *= i;

        if (i === num){
            secuencia += i //el primero no lleva el símbolo x
        }else{
            secuencia += " x " + i;
        }


    }
    return secuencia + " = " + multiplicacion;
}