fetch("https://rickandmortyapi.com/api/character")
  .then((response) => response.json())
  .then((data) => {
    console.log(data.results);
  });

function createCharacterCards(characters) {
  const grid = document.getElementById("grid-item");

  while (grid.firstChild) {
    grid.removeChild(grid.firstChild);
  }

  characters.forEach((character) => {
    const card = document.createElement("div");
    card.classList.add("character-card");

    const image = document.createElement("img");
    image.src = character.image;
    image.alt = character.name;
    card.appendChild(image);

    const name = document.createElement("h3");
    name.textContent = character.name;
    card.appendChild(name);

    const gender = document.createElement("p");
    gender.innerHTML = `<strong>Género:</strong> ${character.gender}`;
    card.appendChild(gender);

    const species = document.createElement("p");
    species.innerHTML = `<strong>Especie:</strong> ${character.species}`;
    card.appendChild(species);

    const status = document.createElement("p");
    status.innerHTML = `<strong>Estado:</strong> ${character.status}`;
    card.appendChild(status);

    grid.appendChild(card);
  });
}
fetch("https://rickandmortyapi.com/api/character")
  .then((response) => response.json())
  .then((data) => {
    createCharacterCards(data.results);
  });