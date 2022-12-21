// let edad = 34;
// let nombre = "andres";

/* if(edad === 10){
  console.log("tienes 10");
}else{
  console.log("no tienes 10");
}

if(edad <= 10){
  console.log("tienes menos de 10");
}else if(edad < 30){
  console.log("tienes mas de 10 y menos de 30");
}else{
  console.log("tienes 30 o mas");
} */

// let usuario = prompt("Ingrese su usuario");

// while(usuario != "rafa"){
//   alert("Usuario incorrecto");
//   usuario = prompt("Ingrese su usuario");
// }

// alert("Bienvenido");
// console.log(suma(4,5));

// function suma(x, y) {
//   return x + y;
// }

// console.log(resta(4, 5));
// const resta = (x, y) => x - y;

// const persona = {
//   nombre: "melito",
//   edad: 56,
//   direccion: "av",
// };

// console.log(persona.direccion);
// console.log(persona.edad);
// console.log(persona["nombre"]);

// function Persona(nombre, edad, direccion){
//   this.edad = edad;
//   this.nombre = nombre;
//   this.direccion = direccion;
//   this.hablar = function(){console.log("Hola soy ", this.nombre);}
// }

// class Persona{
//   constructor(nombre, edad, direccion){
//     this.nombre = nombre;
//     this.edad = edad;
//     this.direccion = direccion;
//   }

//   hablar(){
//     console.log("Hola soy ", this.nombre);
//   }
// }

// let persona1 = new Persona("pepito", 45, "AV");

// const personas = ["andres", "marian", "carlitos", "sofia"];

// personas.forEach(nombre => console.log("Hola", nombre));
// let transformacion = personas.map(nombre => `hola ${nombre}`);
// console.log(transformacion);

// let filtrados = personas.filter(nombre => nombre.includes("o"));
// console.log(filtrados);

// let filtrado = personas.find(nombre => nombre.includes("o"));
// console.log(filtrado);
let historial = document.getElementById("historial");
let usuariosNuevos;

let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  let inputs = e.target.children;

  let usuario = {
    nombre: inputs[0].value,
    edad: inputs[1].value,
  };

  let usuariosStorage = JSON.parse(localStorage.getItem("usuariosStorage"));
  if (usuariosStorage) {
    usuariosNuevos = usuariosStorage;
  } else {
    usuariosNuevos = [];
  }

  usuariosNuevos.push(usuario);

  localStorage.setItem("usuariosStorage", JSON.stringify(usuariosNuevos));
});

historial.addEventListener("click", () => {
  let usuariosStorage = JSON.parse(localStorage.getItem("usuariosStorage"));

  usuariosStorage.forEach((usuario) => {
    let div = document.createElement("div");
    div.innerHTML = `
      Nombre: ${usuario.nombre}
      Edad: ${usuario.edad}
    `;

    tareas.append(div);
  });
});
