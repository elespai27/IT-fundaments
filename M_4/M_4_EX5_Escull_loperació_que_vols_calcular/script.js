"use strict";

function operar(){

    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    let resultDiv = document.getElementById("result");

    let operador = document.getElementById("operador").value;

    if(isNaN(num1) || isNaN(num2)){ 
    //|| num1 == "" || num2 == "" || num1 == null || num2 == null són redundantes, IsnNaN ja ho comprova
        resultDiv.innerHTML = "introdueix un valor vàlid";
    }

    switch (operador)  {
        case "+":
            resultDiv.innerHTML = `El resultat de la suma és: ${num1 + num2}`;
            break;
        case "-":
            resultDiv.innerHTML = `El resultat de la resta és: ${num1 - num2}`;
            break;
        case "*":
            resultDiv.innerHTML = `El resultat de la multiplicació és: ${num1 * num2}`;
            break;
        case "/":
            if(num2 == 0){
                resultDiv.innerHTML = "No es pot dividir per 0";
            } else {
                resultDiv.innerHTML = `El resultat de la divisió és: ${num1 / num2}`;
            }
            break;

    }
}