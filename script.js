document.addEventListener("DOMContentLoaded", function () {
    const input = document.querySelector(".input-block");
    const button = document.querySelector(".form-btn");
    const cards = document.querySelectorAll(".card");

    function filterCards() {
        const searchText = input.value.toLowerCase().trim();

        cards.forEach(card => {
            const title = card.querySelector("h3").textContent.toLowerCase();
            if (title.includes(searchText)) {
                card.style.display = "flex";
            } else {
                card.style.display = "none";
            }
        });
    }

    button.addEventListener("click", function (event) {
        event.preventDefault();
        filterCards();
    });

    input.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            filterCards();
        }
    });
});
