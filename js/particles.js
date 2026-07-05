const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

const particles = [];

class Particle {
    constructor() {
        this.reset();
    }

    reset() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + Math.random() * 200;

        this.size = Math.random() * 3 + 1;

        this.speedY = Math.random() * 1 + 0.3;
        this.speedX = (Math.random() - 0.5) * 0.4;

        this.alpha = Math.random() * 0.5 + 0.2;
    }

    update() {
        this.y -= this.speedY;
        this.x += this.speedX;

        if (this.y < -20) {
            this.reset();
            this.y = canvas.height + 20;
        }
    }

    draw() {
        ctx.beginPath();

        ctx.fillStyle = `rgba(255,60,80,${this.alpha})`;

        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);

        ctx.fill();
    }
}

for (let i = 0; i < 120; i++) {
    particles.push(new Particle());
}

function animate() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
        p.update();
        p.draw();
    });

    requestAnimationFrame(animate);
}

animate();