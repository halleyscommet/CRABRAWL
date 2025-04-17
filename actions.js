document.addEventListener("DOMContentLoaded", () => {
    const intro = document.querySelector(".intro");
    const about = document.querySelector(".about");

    let hasScrolled = false;

    window.addEventListener("wheel", (event) => {
        if (!hasScrolled && event.deltaY > 0) { // Detect downward scroll
            intro.classList.add("scrolled");
            about.classList.add("scrolled");
            hasScrolled = true;
        }
    });

    window.addEventListener("wheel", (event) => {
        if (hasScrolled && event.deltaY < 0) { // Detect upward scroll
            intro.classList.remove("scrolled");
            about.classList.remove("scrolled");
            hasScrolled = false;
        }
    });
});

function scrollDown() {
    const intro = document.querySelector(".intro");
    const about = document.querySelector(".about");

    intro.classList.add("scrolled");
    about.classList.add("scrolled");
}

function scrollUp() {
    const intro = document.querySelector(".intro");
    const about = document.querySelector(".about");

    intro.classList.remove("scrolled");
    about.classList.remove("scrolled");
}