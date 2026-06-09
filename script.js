// ======================
// Typing Animation
// ======================

const words = [
  "Full Stack Developer",
  "Video Editor",
  "Creative Problem Solver",
  "MERN Stack Learner"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typingElement =
document.querySelector(".typing");

function typeEffect() {

  const currentWord =
  words[wordIndex];

  if (!deleting) {

    typingElement.textContent =
    currentWord.substring(
      0,
      charIndex + 1
    );

    charIndex++;

    if (charIndex === currentWord.length) {

      deleting = true;

      setTimeout(
        typeEffect,
        1500
      );

      return;
    }

  } else {

    typingElement.textContent =
    currentWord.substring(
      0,
      charIndex - 1
    );

    charIndex--;

    if (charIndex === 0) {

      deleting = false;

      wordIndex++;

      if (
        wordIndex >= words.length
      ) {
        wordIndex = 0;
      }

    }

  }

  setTimeout(
    typeEffect,
    deleting ? 50 : 100
  );

}

typeEffect();


// ======================
// Dark / Light Mode
// ======================

const themeToggle =
document.getElementById(
  "theme-toggle"
);

themeToggle.addEventListener(
  "click",
  () => {

    document.body.classList.toggle(
      "light-mode"
    );

    const icon =
    themeToggle.querySelector("i");

    if (
      document.body.classList.contains(
        "light-mode"
      )
    ) {

      icon.classList.remove(
        "fa-moon"
      );

      icon.classList.add(
        "fa-sun"
      );

    } else {

      icon.classList.remove(
        "fa-sun"
      );

      icon.classList.add(
        "fa-moon"
      );

    }

  }
);


// ======================
// Scroll To Top
// ======================

const topBtn =
document.getElementById(
  "topBtn"
);

topBtn.addEventListener(
  "click",
  () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  }
);


// ======================
// Reveal Animation
// ======================

const observer =
new IntersectionObserver(
(entries) => {

entries.forEach((entry) => {

if (entry.isIntersecting) {

entry.target.style.opacity = "1";

entry.target.style.transform =
"translateY(0)";

}

});

});

const elements =
document.querySelectorAll(
".glass-card,.skill-card,.timeline-item,.project-card,.stat-card"
);

elements.forEach((el) => {

el.style.opacity = "0";

el.style.transform =
"translateY(40px)";

el.style.transition =
"all .7s ease";

observer.observe(el);

});


// ======================
// Achievement Counter
// ======================

const counters =
document.querySelectorAll(
".stat-card h3"
);

const speed = 100;

counters.forEach(counter => {

const animate = () => {

const value =
counter.innerText;

const number =
parseInt(
value.replace(/\D/g, "")
);

let count = 0;

const update = () => {

count += Math.ceil(
number / speed
);

if (count < number) {

counter.innerText =
count +
value.replace(/[0-9]/g, "");

requestAnimationFrame(
update
);

} else {

counter.innerText =
value;

}

};

update();

};

animate();

});


// ======================
// Navbar Background
// ======================

window.addEventListener(
"scroll",
() => {

const navbar =
document.querySelector(
".navbar"
);

if (
window.scrollY > 50
) {

navbar.style.boxShadow =
"0 5px 20px rgba(0,0,0,.2)";

} else {

navbar.style.boxShadow =
"none";

}

});