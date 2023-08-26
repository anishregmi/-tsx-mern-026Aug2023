// script.js
const characters = [
    { name: "Character 1", species: "Species A", moreInfo: "Additional info about Character 1" },
    // Add more character data
];

const characterCardsContainer = document.querySelector(".character-cards");
const modalContainer = document.querySelector(".modal");

function createCharacterCard(character) {
    const card = document.createElement("div");
    card.classList.add("character-card");
    card.style.backgroundColor = /* Set species-specific color */;
    card.innerHTML = `
        <h3>${character.name}</h3>
        <img src="https://picsum.photos/200" alt="${character.name}">
    `;

    card.addEventListener("click", () => openModal(character));
    characterCardsContainer.appendChild(card);
}

function openModal(character) {
    modalContainer.innerHTML = `
        <div class="modal-content">
            <h2>${character.name}</h2>
            <p>Species: ${character.species}</p>
            <p>${character.moreInfo}</p>
        </div>
    `;
    modalContainer.style.display = "block";
}

document.addEventListener("DOMContentLoaded", () => {
    characters.forEach(createCharacterCard);
});

modalContainer.addEventListener("click", () => {
    modalContainer.style.display = "none";
});
