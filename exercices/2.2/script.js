const body = document.querySelector("body");
const p = document.querySelector("#text");
const h2 = document.querySelector("h2");
let count = 0;

function counter() {
    count++;
    h2.innerText = `Nombre de clics: ${count}`
    if (count == 5) p.textContent = "Bravo, bel échauffement !";
    else if (count == 10) p.textContent = "Vous êtes passé maître en l'art du clic !";
    else if (count == 69) window.open("https://youtu.be/dQw4w9WgXcQ?si=UqIvtPtb4kOYi1IL");
};

body.addEventListener('click', counter);
