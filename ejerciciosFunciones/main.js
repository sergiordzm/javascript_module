/*function addTwoNumbers(number1, number2) {
  let result = number1 + number2;
  return result;
}

let suma = addTwoNumbers(5, 5);
console.log(suma);*/

function testIf(number) {
  if (number === 10) {
    console.log("Ganaste 10 puntos.");
  } else if (number === 5) {
    console.log("Ganaste 5 puntos.");
  } else if (number === 3) {
    console.log("Ganaste 3 puntos.");
  } else {
    console.log("No ganaste nada.");
  }
  switch (number) {
    case 10:
      console.log("Ganaste 10 puntos.");
      break;
    case 5:
      console.log("Ganaste 5 puntos.");
      break;
    default:
      console.log("No ganaste nada.");
      break;
  }
}

testIf(5);
