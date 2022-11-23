/* 
estructura de las funciones

function nombre(){
  codigo de la funcion
}
*/

/* function saludar(){
  let apellido = prompt("Ingrese su apellido");
  let nombre = prompt("Ingrese el nombre");
  let mensaje = `Hola ${nombre} ${apellido}`;
  alert(mensaje);
}

saludar(); */

/* 
estructura de las funciones con parametros

function nombre(par1, par2, ..., parn){
  codigo de la funcion
}
*/

// function sumar(num1, num2){
//   let resultado = num1 + num2;
//   let mensaje = `La suma es ${resultado}`;
//   alert(mensaje);
// }

// let numero1 = parseInt(prompt("Ingrese el primer numero"));
// let numero2 = parseInt(prompt("Ingrese el segundo numero"));
// sumar(numero1, numero2);

// function sumar(num1, num2) {
//   let resultado = num1 + num2;
//   return resultado;
// }

// let resultadoSuma = sumar(10, 9);
// console.log(resultadoSuma);

// function prueba() {
//   console.log("Hola");
//   return 4;
//   console.log("chao");
// }

// prueba();

function calculadora(num1, num2, operacion) {
  switch (operacion) {
    case "+":
      return num1 + num2;
      break;

    case "-":
      return num1 - num2;
      break;

    case "/":
      return num1 / num2;
      break;

    case "*":
      return num1 * num2;
      break;

    default:
      return "Operacion no disponible";
      break;
  }
}

let num1 = parseInt(prompt("Ingrese el numero1"));
let num2 = parseInt(prompt("Ingrese el numero2"));
let operacion = prompt("Ingrese la operacion deseada");

let resultado = calculadora(num1, num2, operacion);
let mensaje = `El resultado de la operacion es ${resultado}`;
alert(mensaje);