"use strict";


function myFunction(){

    let num1 = parseFloat(document.getElementById("num1").value);
    
    let resultDiv = document.getElementById("result");

    let doble = parseFloat(num1 * 2);
    let triple = parseFloat(num1 * 3);

    resultDiv.innerHTML += `<pre>El doble del nombre és: ${doble.toFixed(2)}</pre>`;
    resultDiv.innerHTML += `<pre>El triple del nombre és: ${triple.toFixed(2)}</pre>`;        

}