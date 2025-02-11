"use stirct";

function calcular() {

    let dividend = parseInt(document.getElementById("dividend").value);
    let divisor= parseInt(document.getElementById("divisor").value);
    let resultDiv= document.getElementById("result");
    

    if (divisor == 0 || dividend == 0) {
        resultDiv.innerHTML = "El divisor o el dividendo no poden ser 0";
        return;
    }
    if (isNaN(divisor) || isNaN(dividend) || dividend < divisor){
        resultDiv.innerHTML = "Introduce un número válido";
        return;
    }

    if (dividend % divisor == 0){
        resultDiv.innerHTML = `El nombre ${dividend} es múltiplo de ${divisor}`;

    } 

}