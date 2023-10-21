"use strict";
const HEADER_TITLE = "JavaScript & Node.js full course";
const PAGE_TITLE =
  "Demo : dynamic HTML generation & different ways to loop through an array";
const FOOTER_TEXT = "Happy learning : )";

const LIBRARIES = [
  "Anime.js",
  "Three.js",
  "Phaser.io",
  "GSAP",
  "Mo.js",
  "Velocity",
  "...",
];

const onClickHandler = (e) => {
  alert("Clicking here has indeed some effects! " + e.target.innerText);
};
// Get reference to the parent element
let page = document.getElementById("page");

// use of Template literal
let htmlText = `<h6>1. List through a for loop and use of innerHTML</h6>
<ul>`;

// dynamically writing HTML code through a classical loop
for (let i = 0; i < LIBRARIES.length; i++) {
  // template literals
  htmlText += `<li>
                  ${LIBRARIES[i]}
               </li>`;
}

htmlText += "</ul>";
// setting the html content of the p#page element to add the prepared list
page.innerHTML = htmlText;
// example of badly positionned listener : adding an event listener on this 1st list that will be reset by the next rerender of page !
const itemList = document.querySelector("ul");
itemList.addEventListener("click", () =>
  alert("badly positionned listener will never be called")
);

// dynamically writing HTML code through forEach method
htmlText = "<h6>2. List through forEach method and use of innerHTML</h6>";
htmlText += "<ul>";
LIBRARIES.forEach(function (value, index, array) {
  htmlText += "<li>" + value + "</li>";
});
htmlText += "</ul>";
// setting the html content of the p#page element to add the prepared list
page.innerHTML += htmlText;

// dynamically writing HTML code through for of loop
htmlText =
  "<h6>3. List through forEach method and use of innerHTML</h6>";
htmlText += "<ul>";
for (const ELEMENT of LIBRARIES) {
  htmlText += "<li>" + ELEMENT + "</li>";
}
htmlText += "</ul>";

// setting the html content of the div#page element to add the prepared list
page.innerHTML += htmlText;

// setting event listeners on the <ul> can only be done after that the
// ul elements have been rendered (after page.innerHTML)
const uls = document.querySelectorAll("ul");
uls.forEach((ul) => {
  ul.addEventListener("click", () => {
    alert("you click on me !");
  });
});

// Same thing by working directly with DOM elements
let listTitle = document.createElement("h6");
listTitle.innerText = "4. List through classical for loop and createElement()";
page.appendChild(listTitle);
let list = document.createElement("ul");
for (let i = 0; i < LIBRARIES.length; i++) {
  let item = document.createElement("li");
  item.innerText = LIBRARIES[i];
  item.addEventListener("click", onClickHandler);
  list.appendChild(item);
}
page.appendChild(list);
