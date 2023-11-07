let changeButton = document.querySelector(".change-button");
let bodyPage = document.getElementsByTagName("body");
let cards = document.querySelectorAll(".card");

changeButton.addEventListener('click', function() {
    for (let card of cards) {
        card.classList.toggle("dark-mode");
    }}
);
