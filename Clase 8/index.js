//getElementById
// let div = document.getElementById("aplicacion");
// console.log(div.innerHTML);
// console.log(div.innerText);

// let parrafo = document.getElementById("parrafo")
// console.log(parrafo.innerHTML);
// console.log(parrafo.innerText);

//getElementsByClassName
// let perritos = document.getElementsByClassName("perritos");
// console.log(perritos[0].innerHTML);
// console.log(perritos[1].innerHTML);
// console.log(perritos[2].innerHTML);

//getElementsByTagName
// let divs = document.getElementsByTagName("div");
// console.log(divs[0].innerHTML);
// console.log(divs[1].innerHTML);
// console.log(divs[2].innerHTML);

// let perritos = document.getElementsByClassName("perritos");

// for(const perrito of perritos){
//   console.log(perrito.innerHTML);
// }

// let saludo = document.getElementById("saludo");
// saludo.innerHTML = "Hola";

// let saludo = document.getElementById("saludo");
// let seccion = prompt("Ingrese la seccion a visitar");

// if(seccion === "carrito"){
//   saludo.className = "verde";
//   saludo.innerHTML = "<h1>Bienvenid@ al carrito</h1>";
// }else if(seccion === "favoritos"){
//   saludo.className = "amarillo";
//   saludo.innerHTML = "<h1>Bienvenid@ a los favoritos</h1>";
// }else{
//   saludo.className = "azul";
//   saludo.innerHTML = "<h1>Bienvenid@ a nuestra página</h1>";
// }

//Creación de nodos
// let parrafo = document.createElement("p"); //primer paso (creacion de la etiqueta)
// parrafo.innerHTML = "<h1>Hola a todos</h1>"; //segundo paso (asignacion de contenido)
// document.body.append(parrafo); //tercer paso (asignación de un padre)

// let contenedor = document.getElementById("contenedor");
// contenedor.append(parrafo);

//eliminar nodos
// let contenedor = document.getElementById("contenedor");
// contenedor.remove();

// let contenedor = document.getElementById("contenedor");
// const nombres = ["ema", "caro", "fabian", "lilian", "andres"];

// nombres.forEach(nombre => {
//   let li = document.createElement("li");
//   li.innerHTML = nombre;
//   contenedor.append(li);
// });

let contenedor = document.getElementById("contenedor");
const productos = [
  { id: 1, nombre: "camisa", precio: 1000 },
  { id: 2, nombre: "zapato", precio: 700 },
  { id: 3, nombre: "gorra", precio: 1350 },
  { id: 4, nombre: "pantalon", precio: 500 },
];

productos.forEach(producto => {
  let div = document.createElement("div");
  div.innerHTML = `
    <h2>ID: ${producto.id}</h2>
    <p>Nombre: ${producto.nombre}</p>
    <b>$${producto.precio}</b>
    <img src="https://cdn.pixabay.com/photo/2016/10/31/14/55/rottweiler-1785760_960_720.jpg">
  `;

  contenedor.append(div);
});