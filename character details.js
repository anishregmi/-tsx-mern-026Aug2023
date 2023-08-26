// Replace these variables with actual data from your API
const characterName = "Anish Regmi";
const heightInMeters = 1.72;
const massInKg = 77;
const dateAddedToAPI = "15-08-2023";
const numberOfFilms = 5;
const birthYear = 2000;

// Update the modal content with the actual data
document.querySelector(".character-details h2").textContent = `Name: ${characterName}`;
document.querySelector(".character-details p:nth-child(2)").textContent = `Height: ${heightInMeters} m`;
document.querySelector(".character-details p:nth-child(3)").textContent = `Mass: ${massInKg} kg`;
document.querySelector(".character-details p:nth-child(4)").textContent = `Date Added to API: ${dateAddedToAPI}`;
document.querySelector(".character-details p:nth-child(5)").textContent = `Number of Films: ${numberOfFilms}`;
document.querySelector(".character-details p:nth-child(6)").textContent = `Birth Year: ${birthYear}`;
