const lines = document.querySelectorAll(".line");
const loadingScreen = document.getElementById("loading-screen");

let delay = 0;

// Munculkan teks satu-satu
lines.forEach((line) => {

    setTimeout(() => {

        line.style.opacity = "1";
        line.style.transform = "translateY(0)";
        line.style.transition = ".5s";

    }, delay);

    delay += 700;

});

setTimeout(() => {

    loadingScreen.classList.add("hide");

    document.getElementById("landing-page").style.opacity = "1";

    document.body.style.overflow = "hidden";

}, delay + 1000);

