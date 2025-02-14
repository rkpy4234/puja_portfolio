document.addEventListener("DOMContentLoaded", function() {
    const heartContainer = document.body;
    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("falling-heart");
        heart.innerHTML = "<i class='fas fa-heart'></i>";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 2 + 3 + "s";
        heartContainer.appendChild(heart);
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
    setInterval(createHeart, 100);
});