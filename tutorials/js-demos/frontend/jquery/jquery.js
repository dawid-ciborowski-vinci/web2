"use strict";
const HEADER_TITLE = "JavaScript & Node.js full course";
const PAGE_TITLE = "Demo : JQuery & dynamic HTML generation";
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
  alert("Clicking here has indeed some effects!");
};

$(document).ready(function () {
  // use of Template literal
  let htmlText = `<h6 class="mt-3">1. List through a for loop and use of JQuery html()</h6>
<ul class='list-group list-group-horizontal-lg'>`;

  // dynamically writing HTML code through a classical loop
  for (let i = 0; i < LIBRARIES.length; i++) {
    // to demonstrate the use of bootstrap and the List group
    htmlText += "<li class='list-group-item'>" + LIBRARIES[i] + "</li>";
  }

  htmlText += "</ul>";

  // dynamically writing HTML code through forEach method
  htmlText +=
    "<h6 class='mt-3'>2. List through forEach method and use of JQuery html()</h6>";
  htmlText += "<ul class='list-group list-group-horizontal-lg'>";
  LIBRARIES.forEach(function (value, index, array) {
    htmlText += "<li class='list-group-item'>" + value + "</li>";
  });
  htmlText += "</ul>";

  // dynamically writing HTML code through for of loop
  htmlText +=
    "<h6 class='mt-3'>3. List through forEach method and use of JQuery html()</h6>";
  htmlText += "<ul class='list-group list-group-horizontal-lg'>";
  for (const ELEMENT of LIBRARIES) {
    htmlText += "<li class='list-group-item'>" + ELEMENT + "</li>";
  }
  htmlText += "</ul>";

  // JQuery : setting the html content of the p#page element to add the two list groups prepared
  $("#page").html(htmlText);

  // Same thing by working directly with DOM elements
  $("#page").append(
    "<h6 class='mt-3'>4. List through classical for loop and JQuery append()</h6>"
  );

  //  "4. List through classical for loop and JQuery append()";
  $("#page").append("<ul>");
  $("ul").addClass("list-group list-group-horizontal-lg");
  //let list = document.createElement("ul");
  //list.className = "list-group list-group-horizontal-lg";
  for (let i = 0; i < LIBRARIES.length; i++) {
    // to demonstrate the use of bootstrap and the List group
    $("ul").append("<li class='list-group-item'>" + LIBRARIES[i] + "</li>");
  }
  // for all list items, add an event handler
  $("li").click(onClickHandler);

  setLayout(HEADER_TITLE, PAGE_TITLE, FOOTER_TEXT);
});

/**
 * setLayout allows to display specific information in an HTML template
 * containing those paramters as id to text elements (h4, h5, title)
 * @param {headerTitle} headerTitle
 * @param {pageTitle} pageTitle
 * @param {footerText} footerText
 */
function setLayout(headerTitle, pageTitle, footerText) {
  $("#headerTitle").text(headerTitle);
  $("#title").text(pageTitle);
  $("#pageTitle").text(pageTitle);
  $("#footerText").text(footerText);
}


