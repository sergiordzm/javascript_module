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

/*Vamos a crear un consejero de nombre para mi mascota, este consejero necesita saber qué especie es tu mascota (perro, gato, aver)
    y ofrecer el siguiente nombre:
      perro -> Milaneso
      gato -> Michiflais
      ave -> Piolín

  Si la especie no es conocidad por el consejero, nos debe decir que no conoce esa especia 

*/

function name(especie) {
  if (especie === "perro") {
    console.log("El nombre de tu mascota es Milaneso");
  } else if (especie === "gato") {
    console.log("El nombre de tu mascota es Michiflais");
  } else if (especie === "ave") {
    console.log("El nombre de tu mascota es Piolin");
  } else {
    console.log("No conozco a esta especie");
  }
  switch (especie) {
    case "perro":
      console.log("El nombre de tu mascota es Milaneso");
      break;
    case "gato":
      console.log("El nombre de tu mascota es Michiflais");
      break;
    case "ave":
      console.log("El nombre de tu mascota es Piolin");
      break;
    default:
      console.log("No conozco a esta especie");
  }
}

name("cocodrilo");

/*Un calculador de dados. Esta calculador requiere saber los puntos que obtuviste en cada dado (considerando dos dados). Una vez que le digas 
  lod números te debe avisar si ganaste o perdiste considerando las siguientes combinaciones ganadoras:
    2,2
    4,6
    1,1 
  Caulquuier otra combinación se condiera perdedora 
  los dados sólo tienen puntos del 1 al 6
*/

function numeros(carauno, carados) {
  if (
    (carauno === 2 && carados === 2) ||
    (carauno === 4 && carados === 6) ||
    (carauno === 6 && carados === 4) ||
    (carauno === 1 && carados === 1)
  ) {
    return "Eres un ganador";
  } else {
    return "No ganaste";
  }
}

let num1 = numeros(2, 6);
let num2 = numeros(2, 2);

console.log(num1, num2);

/*Condicional ternario*/

function isAdult(age) {
  if (age >= 18) {
    return "Is adult";
  } else {
    return "Is not adult";
  }
}

function isAdultTwo(age) {
  return age >= (18 ? "Is adult" : "Is not adult");
}

let ageAdult = isAdult(12);
let ageAdultTwo = isAdultTwo(17);
console.log(ageAdult, ageAdultTwo);
