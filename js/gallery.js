const intro = document.getElementById("gallery-intro");
const gallery = document.getElementById("gallery-container");

setTimeout(() => {

    intro.classList.add("hide");

    setTimeout(() => {

        intro.style.display = "none";
        gallery.classList.add("show");

    },1000);

},3000);

const cards = document.querySelectorAll(".polaroid");

cards.forEach(card=>{

    card.addEventListener("click",()=>{

        card.classList.toggle("flip");

    });

});

const nextLittle = document.getElementById("nextLittle");

if(nextLittle){

    nextLittle.addEventListener("click",()=>{

        document.body.classList.add("fade-out");

        setTimeout(()=>{

            window.location.href="little-things.html";

        },700);

    });

}