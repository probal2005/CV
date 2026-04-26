document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("mousemove", e => {
        let x = e.offsetX;
        let y = e.offsetY;
        card.style.transform = `rotateX(${y / 10}deg) rotateY(${x / 10}deg)`;
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "rotateX(0) rotateY(0)";
    });
});