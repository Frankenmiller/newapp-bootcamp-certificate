const stars = document.querySelectorAll("#star");
const checkbox = document.getElementById('checkbox');

stars.forEach((star) => {
    let duration = Math.random() * (1.2 - 0.6) + 0.6;
    star.style.animation = `star-fall ${duration}s infinite linear`;
});

window.addEventListener("load", () => {
    const preloader = document.querySelector('.preloader');
    preloader.classList.add("preload-finish");
});

if (checkbox) {
    checkbox.addEventListener("change", () => {
        console.log("Button toggled!")
        document.body.classList.toggle('light');
    });
}

