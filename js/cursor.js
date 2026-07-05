const cursor = document.getElementById("cursor");
const glow = document.getElementById("cursor-glow");

// Kalau halaman belum punya elemen cursor, hentikan
if (cursor && glow) {

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    document.addEventListener("mousemove", (e) => {

        mouseX = e.clientX;
        mouseY = e.clientY;

        cursor.style.left = mouseX + "px";
        cursor.style.top = mouseY + "px";

    });

    function animateGlow(){

        const currentX = parseFloat(glow.style.left) || mouseX;
        const currentY = parseFloat(glow.style.top) || mouseY;

        glow.style.left = currentX + (mouseX-currentX)*0.15 + "px";
        glow.style.top = currentY + (mouseY-currentY)*0.15 + "px";

        requestAnimationFrame(animateGlow);

    }

    animateGlow();

    const button = document.getElementById("enterBtn");

    if(button){

        button.addEventListener("mouseenter",()=>{

            glow.style.width="80px";
            glow.style.height="80px";

        });

        button.addEventListener("mouseleave",()=>{

            glow.style.width="40px";
            glow.style.height="40px";

        });

    }

}