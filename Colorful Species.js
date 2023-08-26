document.addEventListener("DOMContentLoaded", function () {
    const characterCards = document.querySelectorAll(".character-card");
    const modal = document.getElementById("modal");

    characterCards.forEach(card => {
        card.addEventListener("click", () => {
            // Populate the modal with character information
            const characterInfo = getCharacterInfo(card.id); // Replace with your data retrieval logic
            updateModalContent(characterInfo);

            // Show the modal
            modal.style.display = "block";
        });
    });

    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            // Hide the modal when clicking outside its content
            modal.style.display = "none";
        }
    });
});

function getCharacterInfo(characterId) {
    // Replace this with your data retrieval logic
    // Fetch character information based on the characterId
}

function updateModalContent(characterInfo) {
    const modalContent = document.querySelector(".modal-content");
    // Update modal content with character information
}
