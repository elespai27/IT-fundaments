"use strict";

function calculaDies() {

    let mes = parseInt(document.getElementById("mes").value);

    let resultDiv = document.getElementById("result");

    if (mes < 1 || mes > 12) {
        resultDiv.innerHTML = "El mes no és vàlid";        
    }

    switch (mes){
        case 1:
            resultDiv.innerHTML = `el mes ${mes} té 31 dies`;
            break;
        case 2:
            resultDiv.innerHTML = `el mes ${mes} té 28 dies`;
            break;
        case 3:
            resultDiv.innerHTML = `El mes ${mes} té 31 dies`;
            break;
        case 4:
            resultDiv.innerHTML = `El mes ${mes} té 30 dies`;
            break;
        case 5:
            resultDiv.innerHTML = `El mes ${mes} té 31 dies`;
            break;
        case 6:
            resultDiv.innerHTML = `El mes ${mes} té 30 dies`;
            break;
        case 7 :
            resultDiv.innerHTML = `El mes ${mes} té 31 dies`;
        case 8:
            resultDiv.innerHTML = `El mes ${mes} té 31 dies`;
            break;
        case 9:
            resultDiv.innerHTML = `El mes ${mes} té 30 dies`;
            break;
        case 10:
            resultDiv.innerHTML = `El mes ${mes} té 31 dies`;    
            break;
        case 11:
            resultDiv.innerHTML = `El mes ${mes} té 30 dies`;
        case 12:
            resultDiv.innerHTML = `El mes ${mes} té 31 dies`;
            break;
            default:
                resultDiv.innerHTML = "El mes no és vàlid";
        }



    
}