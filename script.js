function animateEmoji() {
    const emoji = document.querySelector('.trick');
    emoji.style.fontSize = '30vw';
    setTimeout(() => {
        emoji.style.fontSize = '0';
    }, 500);
}