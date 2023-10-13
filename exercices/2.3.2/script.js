const divs = document.querySelectorAll("div");

divs.forEach(div => {
    const style = getComputedStyle(div);
    const width = div.style.width;
    const height = div.style.height;
    div.addEventListener("mousedown", (e) => {
        e.target.textContent = style.backgroundColor;        ;
        e.target.style.width = "100px";
        e.target.style.height = "100px";
    });
    div.addEventListener("mouseenter", (e) => {
        e.target.textContent = "";
        e.target.style.width = width;
        e.target.style.height = height;
    });
});

