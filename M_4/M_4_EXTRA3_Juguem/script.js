"use strict";


function jugar() {
    let num = Math.floor(Math.random() * 3) + 1;
    let numUsuari = parseInt(document.getElementById("num").value);
    const opcions = ["Pedra", "Paper", "Tisora"];
    document.getElementById("resultat").innerHTML = "Jo " + opcions[num - 1] + " i tu " + opcions[numUsuari - 1] + ". ";

    if (numUsuari < 1 || numUsuari > 3) {
        document.getElementById("resultat").innerHTML = "Entenc que no vols jugar. Adeu";
    } else if (numUsuari == num) {          
        document.getElementById("resultat").innerHTML += "Empat!";
    } else if ((numUsuari == 1 && num == 3) || (numUsuari == 2 && num == 1 ) || (numUsuari == 3 && num == 2)) {
        document.getElementById("resultat").innerHTML += "Has guanyat!";
    } else {
        document.getElementById("resultat").innerHTML += "He guanyat!";
    }


}