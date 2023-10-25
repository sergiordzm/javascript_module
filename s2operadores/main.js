/*Operadores aritméticos*/
/*
adicion -> + 
sustracción -> -
multiplicación -> *
división -> /
módulo -> %

a + b
a - b
a * b
a / b 
a % b

*/

/*Operadores de asignación*/

/*

Asignación aditiva -> +=
Asignación sustractiva -> -=
Asignación multiplicativa -> *=
Asignación divisiva -> /=
Asignación modulativa -> %=
Asignación -> =

*/

/*let a = 8;
let b = 16;
let c = 12;

let result = 0;*/

/*result = result + a;
result = result + b;
result = result + c;

console.log(result);*/

/*result += 8;

console.log(result);*/

/*let result = 4;

result += 3;

console.log(result);

result -= 1;

console.log(result);*/

/*Operadores de comparación*/

/*
    Igual a (igualdad) ->  A == B ->  
        (Compara que el valor de A sea igual al valor de B))
    Idéntico a (extrema comparación) -> A === B -> 
        (Compara que tanto el valor como el tipo de dato de A sean iguales al de B)
    Mayor que ->   A > B -> Evalua que el valor de A sea mayor que el de B
    Menor que ->   A < B -> Evalua que el valor de A sea menor que el de B
    Mayor o igual que ->   A >= B -> Evalua que el valor de A sea mayor o igual que el de B
    Menor o igual que ->   A <= B -> Evalua que el valor de A sea menor o igual que el de B
    Diferente de -> A != B -> Evalua si el valor de A es diferente que el de B
    Diferente de -> A !== B -> Evalua si el valor y el tipo de dato de A es diferente que el de B
*/

let A = "7";
let B = 7;

console.log(A == B);
console.log(A === B);
console.log(A > B);
console.log(A < B);
console.log(A >= B);
console.log(A >= B);
console.log(A != B);
console.log(A !== B);

/*Operadores lógicos*/

/*
    And -> expression1 && expression2 
    Or -> expression1 || expression2
    not -> !expression
*/

function addTwoNumbers(firstNumber, secondNumber) {
  let resultado = firstNumber + secondNumber;
  return resultado;
}

function multTwoNumbers(firstNumber, secondNumber) {
  let resultado = firstNumber * secondNumber;
  return resultado;
}

function divTwoNumbers(firstNumber, secondNumber) {
  let resultado = firstNumber / secondNumber;
  return resultado;
}

function susTwoNumbers(firstNumber, secondNumber) {
  let resultado = firstNumber - secondNumber;
  return resultado;
}

function moduleTwoNumbers(firstNumber, secondNumber) {
  let resultado = firstNumber % secondNumber;
  return resultado;
}

let suma1 = addTwoNumbers(6, 9);
let suma2 = addTwoNumbers(10, 20);
let multi1 = multTwoNumbers(6, 9);
let div1 = divTwoNumbers(18, 2);
let sus1 = susTwoNumbers(18, 5);
let module1 = moduleTwoNumbers(20, 5);

console.log(suma1);
console.log(suma2);
console.log(multi1);
console.log(div1);
console.log(sus1);
console.log(module1);

let superSuma = addTwoNumbers(suma1, suma2);

console.log(superSuma);

/* Crear una función que me diga cual es el mayor de dos números*/

function majorNumber(firstNumber, secondNumber) {
  if (firstNumber > secondNumber) {
    return firstNumber;
  } else {
    return secondNumber;
  }
}
let first = 18;
let second = 20;
let major1 = majorNumber(first, second);
console.log("El número mayor es:" + major1);

/*crear una función que me diga si un número es par o non*/

let num1 = parOrNon(122);
function parOrNon(number) {
  if (number % 2 == 0) {
    return console.log("El número es par.");
  } else {
    return console.log("El número es impar.");
  }
}
