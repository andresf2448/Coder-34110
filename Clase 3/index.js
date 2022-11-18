/* 
estructura del for
for(desde; hasta; actualizacion){
  codigo a repetir
}
*/
//i++ === i = i + 1
/* for(let i = 0; i < 100; i++){
  console.log(i);
} */

// let numero = parseInt(prompt("Ingrese un numero"));

// for(let i = 0; i <= 10; i++){
//   let resultado = numero * i;
//   let mensaje = `${numero} X ${i} = ${resultado}`;

//   alert(mensaje);
// }

/* for(let turno = 1; turno <= 3; turno++){
  let nombre = prompt("Ingrese su nombre para asignar un turno");
  let mensaje = `Turno #${turno} Nombre: ${nombre}`;

  alert(mensaje);
}

alert("Turnos agotados"); */

/* for(let i = 1; i <= 10; i++){
  if(i === 5){
    console.log("entramos al break", i);
    break;
  }

  console.log(i);
}

console.log("finalizamos"); */

// for(let i = 1; i <= 10; i++){
//   if(i === 5){
//     console.log("saltamos el paso ", i);
//     continue;
//   }

//   console.log(i);
// }

// for(let i = 1; i <= 10; i++){
//   if(usuario covid === false){
//     continue;
//   }

//   //le damos la medicina al enfermo
// }

/* 
estructura del while

while(condicion){
  codigo a ejecutar siempre que la condicion sea verdadera
}
*/

/* while(true){
  console.log("hola");
} */

/* let entrada = prompt("Ingrese un dato");

while(entrada != "ESC"){
  let mensaje = `El usuario ingreso ${entrada}`;
  alert(mensaje);

  entrada = prompt("Ingrese un dato");
}

alert("terminamos"); */

/* let usuario = prompt("Ingrese el usuario");

while(usuario != "andres"){
  alert("usuario incorrecto");
  usuario = prompt("Ingrese el usuario");
}

alert("Bienvenido usuario correcto"); */

/* 
estructura del do while

do{

}while(condicion);
*/

let repetir = false;
//while primero piensa y luego actua
// while(repetir){
//   console.log("entramos al while");
// }

//do while primero actua luego piensa
// do{
//   console.log("entramos al do while");
// }while(repetir);

/* 
estructura del switch

switch(valor){
  case valor1:
    codigo a ejecutar en caso de que el valor === valor1
    break;

  case valor2:
    codigo a ejecutar en caso de que el valor === valor2
    break;
  
    .
    .
    .

  case valorn: 
    codigo a ejecutar en caso de que el valor === valorn
    break;

  default:
    codigo a ejecutar en caso de que el valor no coincida con ninguno de los valores anteriores
    break;
}
*/

// let moneda = "cop";

// switch (moneda) {
//   case "cop":
//     console.log("moneda de colombia");
//     break;

//   case "ars":
//     console.log("moneda de argentina");
//     break;

//   case "usd":
//     console.log("dolar");
//     break;

//   default:
//     console.log("moneda no reconocida");
//     break;
// }


let entrada = prompt("Ingresar un nombre");

while(entrada != "ESC" ){
   switch (entrada) {
       case "ANA":
            alert("HOLA ANA");
            break;
        case "JUAN":
            alert("HOLA JUAN");
            break;
       default:
           alert("¿QUIÉN SOS?")
           break;
   }
   entrada = prompt("Ingresar un nombre");
}
