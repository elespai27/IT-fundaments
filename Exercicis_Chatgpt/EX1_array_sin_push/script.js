"use strict";

function number() {
  let index = 0;
  let resultDiv = document.getElementById("result");
  const numbers = [];
  const MAX_NUMBERS = 9;

while (index < MAX_NUMBERS){
    numbers[index]= parseInt(prompt("enter a number"))
index++
}

resultDiv.innerHTML += "Entered numbers: " + numbers.join(", ") + "<br>";

let evenNumbers = [];

for (let index = 0; index < numbers.length; index++) {
  if (numbers[index] % 2 === 0) {
evenNumbers.push(numbers[index])
  }  
}
resultDiv.innerHTML += "Even numbers are: " + evenNumbers.join(", ");

}
