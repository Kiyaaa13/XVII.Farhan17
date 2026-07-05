setTimeout(()=>{

    document.querySelector(".intro-text").style.opacity="1";

},300);

const cards = document.querySelectorAll(".memory-card");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.3
});

cards.forEach(card=>{

    observer.observe(card);

});

const nextBtn = document.getElementById("nextGallery");

if (nextBtn) {

    nextBtn.addEventListener("click", () => {

        document.body.classList.add("fade-out");

        setTimeout(() => {

            window.location.href = "gallery.html";

        }, 700);

    });

}

const progress = document.getElementById("progress-bar");

window.addEventListener("scroll",()=>{

    const total =
        document.documentElement.scrollHeight
        - window.innerHeight;

    const percent =
        (window.scrollY/total)*100;

    progress.style.width = percent+"%";

});