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
//   console.log("resultado es: ", resultado);
// }

// let resultadoSuma = sumar(10, 9);
// console.log("retorno de la funcion", resultadoSuma);

// function prueba() {
//   console.log("Hola");
//   return 4;
//   console.log("chao");
// }

// prueba();

// function calculadora(num1, num2, operacion) {
//   switch (operacion) {
//     case "+":
//       return num1 + num2;
//       break;

//     case "-":
//       return num1 - num2;
//       break;

//     case "/":
//       return num1 / num2;
//       break;

//     case "*":
//       return num1 * num2;
//       break;

//     default:
//       return "Operacion no disponible";
//       break;
//   }
// }

// let num1 = parseInt(prompt("Ingrese el numero1"));
// let num2 = parseInt(prompt("Ingrese el numero2"));
// let operacion = prompt("Ingrese la operacion deseada");

// let resultado = calculadora(num1, num2, operacion);
// let mensaje = `El resultado de la operacion es ${resultado}`;
// alert(mensaje);
/* let resultado = 0;

function sumar(num1, num2) {
  resultado = num1 + num2;
}

sumar(6, 7);

console.log(resultado); */

// function sumar(num1, num2) {
//   let resultado = num1 + num2;
// }

// sumar(6, 7);

// console.log(resultado);

// let nombre = "andres";
// nombre = "mariana";
// console.log(nombre);

// function sumar(num1, num2) {
//   let resultado = num1 + num2;
//   return resultado;
// }

// function restar(num1, num2) {
//   let resultado = num1 - num2;
//   return resultado;
// }

// const suma = function (a, b) {
//   return a + b;
// };
// console.log(suma(4, 5));

// const suma = (num1, num2) => num1 + num2;
// suma(1, 6);
/* const calculadora = (num1, num2, operacion) => {
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
 */
// saludar();

// function saludar(){
//   console.log("Hola");
// }
// saludar();

// const saludar = () => {
//   console.log("Hola");
// }

// const suma = (a, b) => a + b;
// const resta = (a, b) => a - b;
// const iva = (x) => x * 0.21;

// let precioProducto = 500;
// let descuento = 50;

// let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento);
//                 = resta(suma(500, iva(500)), 50);
//                 = resta(suma(500, 500 * 0.21), 50);
//                 = resta(500 + 500 * 0.21, 50);
//                 = (500 + 500 * 0.21) - 50;

// let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento);
// console.log(nuevoPrecio);