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

/*Un calculador de dados. Este caklculador requiere saber los puntos que obtuviste en cada dado (considerando dos dados). Una vez que le digas 
  lod números te debe avisar si ganaste o perdiste considerando las siguientes combinaciones ganadoras:
    2,2
    4,6
    1,1 
  Caulquuier otra combinación se condiera perdedora 
  los dados sólo tienen puntos del 1 al 6
*/
