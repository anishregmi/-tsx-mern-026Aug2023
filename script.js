const characterList = document.getElementById("character-list");
const loadMoreButton = document.getElementById("load-more");
const loader = document.getElementById("loader");
const error = document.getElementById("error");

let page = 1;
const apiUrl = `https://swapi.dev/api/people/?page=${page}`;

async function fetchCharacters(url) {
  try {
    loader.style.display = "block";
    const response = await fetch(url);
    const data = await response.json();
    loader.style.display = "none";
    return data;
  } catch (e) {
    loader.style.display = "none";
    error.style.display = "block";
    console.error("Error fetching data:", e);
  }
}

async function displayCharacters() {
  const data = await fetchCharacters(apiUrl);
  if (data) {
    data.results.forEach(character => {
      const characterItem = document.createElement("div");
      characterItem.innerText = character.name;
      characterList.appendChild(characterItem);
    });
  }
}

loadMoreButton.addEventListener("click", () => {
  page++;
  const nextPageUrl = `https://swapi.dev/api/people/?page=${page}`;
  displayCharacters(nextPageUrl);
});

displayCharacters();
