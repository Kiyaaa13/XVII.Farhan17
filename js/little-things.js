const slides=document.querySelectorAll(".slide");

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{threshold:0.5});

slides.forEach(slide=>{

observer.observe(slide);

});

const letterBtn = document.getElementById("letterBtn");

letterBtn.addEventListener("click", () => {

    document.body.classList.add("fade-out");

    setTimeout(() => {

        window.location.href = "letter.html";

    }, 700);

});