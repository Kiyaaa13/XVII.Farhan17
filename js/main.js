const button = document.getElementById("enterBtn");
const landing = document.getElementById("landing-page");

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

let glowX = mouseX;
let glowY = mouseY;

const transitionScreen = document.getElementById("transition-screen");

button.addEventListener("click", () => {

    // Nonaktifkan tombol supaya tidak bisa diklik berkali-kali
    button.disabled = true;

    // Efek tombol ditekan
    button.style.transform="scale(.92)";
    button.style.boxShadow="0 0 50px #ff2e63";

    landing.classList.add("fade-out");

    // Tampilkan transition
    transitionScreen.classList.add("active");

    // Pindah halaman setelah 3 detik
    setTimeout(() => {

        window.location.href = "../pages/memories.html";

    }, 3000);

});