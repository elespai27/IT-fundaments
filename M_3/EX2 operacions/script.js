"use strict";

function myFunction() {
    
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let resultDiv = document.getElementById("result");

    let suma = (num1) + (num2);
    let resta = (num1) - (num2);
    let multiplicacio = (num1) * (num2);
    let divisio = (num1) / (num2);

    resultDiv.innerHTML = `<pre>El resultat de la suma és: ${suma}
El resultat de la resta és: ${resta}
El resultat de la multiplicació és: ${multiplicacio}
El resultat de la divisió és: ${divisio}</pre>`;
    

}