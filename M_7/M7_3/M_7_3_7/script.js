

function calcular() {

// El programa ha de calcular les quantitats necessàries de cada ingredient, 
// el preu per persona i el preu final de la fideuà
// Els ingredients principals seran: fideus, gambes, i calamars.
// Saben que per cada quatre persones han d'utilitzar mig quilo de fideus, 
// 400 grams de calamars i 200 grams de gambes. 

let personas = parseInt(document.getElementById("personas").value);
let precioFideos = parseFloat(document.getElementById("fideos").value);
let precioGambas = parseFloat(document.getElementById("gambas").value);
let precioCalamar = parseFloat(document.getElementById("calamar").value);
let resultP = document.getElementById("result");
let totalFideos = 0;
let totalCalamares = 0;
let totalGambas = 0;
let totalPrecio = 0;
let totalPrecioPorPersona= 0;

if (isNaN(personas) || personas <= 0 || isNaN(precioFideos) || isNaN(precioGambas) || isNaN(precioCalamar)) {
    resultP.innerHTML = "Por favor, introduce valores válidos para todas las entradas."
    return;
  }


const FIDEOS_GR = 0.125;
const CALAMARES_GR = 0.1;
const GAMBAS_GR = 0.05;

if (personas > 0) {
    totalFideos = personas * FIDEOS_GR    
    totalCalamares = personas * CALAMARES_GR
    totalGambas = personas * GAMBAS_GR    
}

if (personas > 0) {
   totalPrecio = (totalFideos * precioFideos) + (totalCalamares * precioCalamar) + (totalGambas * precioGambas)
    totalPrecioPorPersona = totalPrecio/personas
}
    resultP.innerHTML = `El precio total de la fideuà es: ${totalPrecio.toFixed(2)}€
    y hay que poner ${totalPrecioPorPersona.toFixed(2)}€ por persona`
}