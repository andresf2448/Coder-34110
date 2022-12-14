// let boton = document.getElementById("boton");

// const ejecutar0 = (nombre) => {
//   console.log("click en el boton", nombre);
// }

// const ejecutar = (nombre) => {
//   console.log("click en el boton", nombre);
// }

//Primera forma
// let evento = prompt("Ingrese el evento deseado");
// boton.addEventListener(evento, ejecutar);

//Segunda forma
// boton.onclick = ejecutar0;

// boton.addEventListener("click", () => ejecutar("andres"));

// let boton = document.getElementById("boton");
// boton.addEventListener("mousedown", () => console.log("mousedown"));
// boton.addEventListener("mouseup", () => console.log("mouseup"));
// boton.addEventListener("mouseover", () => console.log("mouseover"));
// boton.addEventListener("mouseout", () => console.log("mouseout"));
// boton.addEventListener("mousemove", () => console.log("mousemove"));
// boton.addEventListener("click", () => console.log("click"));
// let saludo = document.getElementById("saludo");

// boton.addEventListener("mousedown", () => {
//   saludo.className = "azul";
// });
// boton.addEventListener("click", () => {
//   saludo.className = "verde";
// });
// boton.addEventListener("mouseover", () => {
//   saludo.className = "rojo";
// });
// boton.addEventListener("mouseout", () => {
//   saludo.className = "amarillo";
// });

// let saludo = document.getElementById("saludo");
// let input = document.getElementById("nombre");
// input.addEventListener("keyup", (e) => {
//   if(e.key === "a"){
//     saludo.className = "amarillo";
//   }else if(e.key === "s"){
//     saludo.className = "rojo";
//   }else if(e.key === "d"){
//     saludo.className = "verde";
//   }else{
//     saludo.className = "azul";
//   }
// });

// input.addEventListener("keydown", () => console.log("keydown"));
// input.addEventListener("change", () => console.log("change"));
// input.addEventListener("input", () => {
//   if(input.value.includes("andres")){
//     saludo.className = "azul";
//   }else{
//     saludo.className = "rojo";
//   }
// });
// let formulario = document.getElementById("formulario");

// formulario.addEventListener("submit", (e) => {
//   e.preventDefault();
//   let inputs = e.target.children;

//   if(!inputs[0].value.includes("@")){
//     inputs[0].value = "";
//   }
// });

const productos = [
  { id: 1, nombre: "camisa", precio: 3000 },
  { id: 2, nombre: "pantalon", precio: 700 },
  { id: 3, nombre: "gorra", precio: 300 },
  { id: 4, nombre: "zapato", precio: 200 },
];

productos.forEach(item => {
  let div = document.createElement("div");
  div.innerHTML = `
    <h2>ID: ${item.id}</h2>
    <p>Nombre: ${item.nombre}</p>
    <b>$${item.precio}</b>
    <button id="boton${item.id}">Agregar</button>
  `;

  document.body.append(div);
  let boton = document.getElementById(`boton${item.id}`);

  const ejecutar = (id) => {
    console.log(id);
  }
  boton.addEventListener("click", () => ejecutar(item.id));
});