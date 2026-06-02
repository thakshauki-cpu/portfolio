// Typing Animation

const words = [
    "Aspiring Full Stack Developer",
    "MERN Stack Learner",
    "Frontend Developer",
    "Backend Developer"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingElement =
document.querySelector(".typing");

function typeEffect(){

    const currentWord =
    words[wordIndex];

    if(!isDeleting){

        typingElement.textContent =
        currentWord.substring(0,charIndex+1);

        charIndex++;

        if(charIndex === currentWord.length){

            isDeleting = true;

            setTimeout(typeEffect,1500);

            return;
        }

    }else{

        typingElement.textContent =
        currentWord.substring(0,charIndex-1);

        charIndex--;

        if(charIndex === 0){

            isDeleting = false;

            wordIndex++;

            if(wordIndex >= words.length){

                wordIndex = 0;
            }
        }
    }

    setTimeout(
        typeEffect,
        isDeleting ? 50 : 100
    );
}

typeEffect();


// Dark Mode Toggle

const themeBtn =
document.getElementById("theme-toggle");

themeBtn.addEventListener("click",()=>{

    document.body.classList.toggle(
        "light-mode"
    );

    const icon =
    themeBtn.querySelector("i");

    if(
        document.body.classList.contains(
            "light-mode"
        )
    ){

        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

    }else{

        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }
});


// Scroll To Top

const topBtn =
document.getElementById("topBtn");

topBtn.addEventListener("click",()=>{

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});


// Reveal Animation

const observer =
new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform =
            "translateY(0)";
        }

    });

});

const cards =
document.querySelectorAll(
".card,.skill-card,.project-card,.timeline-item"
);

cards.forEach(card=>{

    card.style.opacity = "0";
    card.style.transform =
    "translateY(30px)";
    card.style.transition =
    "all 0.6s ease";

    observer.observe(card);

});