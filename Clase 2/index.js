//Estructura de un condicional
/* 
if(condicion){
  codigo en caso de que la condicion sea verdadera
}
*/

// if(true){
//   console.log("entramos");
// }

// console.log("finalizamos");

// let nombre = prompt("Ingrese su nombre");

// if(nombre === "andres"){
//   alert("Hola andrés");
// }

// alert("Finalizamos");
/* 
= significa asignacion
=== compara tanto tipo de dato como valor
== compara solamente valor
*/

/* 
estructura del if else

if(condicion){
  codigo a ejecutar en caso de que la condicion sea verdadera
}else{
  codigo a ejecutar en caso de que la condicion sea falsa
}
*/

/* let respuesta = prompt("Finalizaste la tarea???").toLowerCase();

if(respuesta === "si"){
  alert("Puedes salir a jugar");
}else{
  alert("No puedes salir a jugar");
} */

/* 
estructura condicionales anidados
if(condicion1){
  codigo a ejecutar en caso de que la condicion1 sea verdadera
}else if(condicion2){
  codigo a ejecutar en caso de que la condicion2 sea verdadera
}else if(condicion3){
  codigo a ejecutar en caso de que la condicion3 sea verdadera
}else{
  codigo a ejecutar cuando ninguna de las condiciones es verdadera
}
*/

// let numero = 140;

// if(numero < 4){
//   console.log("es menor que 4");
// }else if(numero < 8){
//   console.log("es menor que 8");
// }else if(numero < 15){
//   console.log("es menor que 15");
// }else{
//   console.log("es mayor o igual a 15");
// }

// let edad = 56;
// let valor = edad === 56;

// if(""){
//   console.log("entramos");
// }

// let edad = parseInt(prompt("Ingrese su edad"));

// if(edad <= 14){
//   alert("No puedes entrar a la fiesta");
// }else if(edad < 18){
//   alert("Puedes entrar con un adulto");
// }else{
//   alert("Puedes entrar a la fiesta");
// }

/* 
valor1 && valor2 es verdadero cuando ambos son verdaderos
                 de lo contrario es falso

valor1 && valor2 es verdadero cuando al menos uno de los valores es  verdadero de contrario es falso           
*/

/* let nombre = prompt("Ingrese el nombre");

if(nombre != "" && nombre === "andres"){
  alert("Hola andres");
}else{
  alert("valor ingresado incorrecto");
} */

if(!"andres".includes("p")){
  console.log("no la contiene");
}else{
  console.log("si la contiene");
}

