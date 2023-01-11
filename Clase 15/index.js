// fetch(url, config);
// const lista = document.getElementById("lista");

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => response.json())
//   .then((data) => {
//     data.forEach(publicacion => {
//       const li = document.createElement("li");
//       li.innerHTML = `
//         <h3>${publicacion.title}</h3>
//         <p>${publicacion.body}</p>
//       `;

//       lista.append(li);
//     });
//   })
//   .catch((error) => console.log(error));

// fetch('https://jsonplaceholder.typicode.com/posts',{
//   method: 'POST',
//   body: JSON.stringify({
//     title: "Probando",
//     body: "Nuestra primera pubicacion",
//     userId: 1
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   }
// })
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.log(error));

// const lista = document.getElementById("lista");

fetch("data.json")
.then(response => response.json())
.then(data => {
  data.forEach(producto => {
    const li = document.createElement("li");
    li.innerHTML = `
      <h3>${producto.nombre}</h3>
      <p>${producto.id}</p>
      <b>$${producto.precio}</b>
      <hr/>
    `;

    lista.append(li);
  });
});

// const lista = document.getElementById("lista");

// const traerProductos = async () => {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const data = await response.json();

//     data.forEach((publicacion) => {
//       const li = document.createElement("li");
//       li.innerHTML = `
//               <h3>${publicacion.title}</h3>
//               <p>${publicacion.body}</p>
//             `;

//       lista.append(li);
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

// traerProductos();

const traerPersonajes = async () => {
  const response = await fetch('https://rickandmortyapi.com/api/character');
  const data = await response.json();
  console.log(data.results);
}

traerPersonajes();