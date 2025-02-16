"use strict";

function print() {
  //   const numbers = [];
  //   let resultDiv = document.getElementById("result");
  //   const MAX_NUMBERS = 9;
  //   let number = 0;

  //   while (number < MAX_NUMBERS) {
  //     numbers[number] = parseInt(
  //       prompt("Enter numbers " + (number + 1) + " of " + MAX_NUMBERS + ":")
  //     );
  //     number++;
  //   }

  //   resultDiv.innerHTML += "Entered numbers are: " + numbers;

  //   let maxNumber = numbers[0];
  //   for (let index = 1; index < numbers.length; index++) {
  //     if (maxNumber < numbers[index]) {
  //       maxNumber = numbers[index];
  //     }
  //   }
  //   resultDiv.innerHTML +=
  //     "<br> The largest number in the array is: " + maxNumber;

  //suma de los elementos de un aarray
  const n = [1, 2, 3, 4, 5];
  let sum = 0;
  for (let index = 0; index < n.length; index++) {
    sum += n[index];
  }
  console.log(sum); // Expected output: 15
  //_________________________________________________

  const n2 = [10, 25, 5, 45, 20];
  let largest2 = n2[0];
  for (let index = 1; index < n2.length; index++)
    if (largest2 < n2[index]) {
      largest2 = n2[index];
    }
  console.log(largest2);

  //___________________________________________________

  const arrReverse = [];
  for (let index = n2.length - 1; index >= 0; index--) {
    arrReverse.push(n2[index]);
  }
  console.log(arrReverse);

  //____________________________________________________

  const arrOdd = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const oddNumber = [];
  let print;

  for (let index = 0; index < arrOdd.length; index++) {
    if (arrOdd[index] % 2 !== 0) {
      oddNumber.push(arrOdd[index]);
    }
  }
  print = arrOdd;
  console.log(oddNumber.length);
  console.log(print);

  //______________________________________________
  const arrSmallest = [12, 34, 54, 65, 878, 990, 3, 0];
  let smallest = arrSmallest[0];

  for (let index = 0; index < arrSmallest.length; index++) {
    if (smallest > arrSmallest[index]) {
      smallest = arrSmallest[index];
    }
  }
  console.log(smallest);
  //_______________________________________________________
  const evenN = [];
  for (let index = 0; index < arrSmallest.length; index++) {
    if (arrSmallest[index] % 2 == 0) {
      evenN.push(arrSmallest[index]);
    }
  }
  console.log(evenN);
  console.log(evenN.length);

  //__________________________________________________
  const sumOdd = [];
  let suma = 0;

  for (let index = 0; index < arrSmallest.length; index++) {
    if (arrSmallest[index] % 2 !== 0) {
      sumOdd.push(arrSmallest[index]);
    }
  }

  for (let i = 0; i < sumOdd.length; i++){
    suma += sumOdd[i]
  }

  console.log(suma);

  //____________________________________________



  
}
