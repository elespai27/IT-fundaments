"use strict";

function myFunction(){
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let num3 = parseInt(document.getElementById("num3").value);
    
    let resultDiv = document.getElementById("result");

    let mitjana = parseFloat((num1 + num2 + num3) / 3);

    resultDiv.innerHTML = `<pre>La mitjana dels tres nombres és: ${mitjana.toFixed(2)}</pre>`;
}