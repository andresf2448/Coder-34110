// const getCharacters = async () => {
//   try {
//     const response = await fetch("https://rickandmortyapi.com/api/character");
//     const data = await response.json();

//     let filtro = prompt("Ingrese el status a filtrar");
//     let filtrados = data.results.filter((item) => item.status.includes(filtro));

//     filtrados.forEach((character) => {
//       let div = document.createElement("div");
//       div.innerHTML = `
//         <img src="${character.image}" />
//       `;

//       document.body.append(div);
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

// getCharacters();

const getCharacters = async () => {
  try {
    const response = await axios("https://rickandmortyapi.com/api/character");
    const data = response.data.results;

    data.forEach((character) => {
      let div = document.createElement("div");
      div.innerHTML = `
        <img src="${character.image}" />
      `;

      document.body.append(div);
    });
  } catch (error) {
    console.log(error);
  }
};

getCharacters();