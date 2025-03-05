"use strict";


function calcular() {
    

let dni = document.getElementById("dni").value.toUpperCase();
//let resultP = document.getElementById("result");
let indiceDni = dni.length - 1;
let letraDni = dni[indiceDni];
let numeroDni = 0;
let letraCorrecta = "";
console.log(letraDni, numeroDni)

const letraTabla = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"]
console.log(letraTabla)

for (let i = 0; i < dni.length - 1; i++) {
    numeroDni += dni[i] 
    numeroDni= parseInt(numeroDni)  
    console.log(numeroDni)
}

letraCorrecta = numeroDni % 23
console.log(letraCorrecta)
if (!(letraDni == letraTabla[letraCorrecta])){
    console.log("la letra del dni no es correcta, la letra correcta es: " +letraTabla[letraCorrecta])
} else {
    console.log("la letra del dni es correcta ") 
}

}


