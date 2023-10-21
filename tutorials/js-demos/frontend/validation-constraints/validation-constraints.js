const HEADER_TITLE = "JavaScript & Node.js full course";
const PAGE_TITLE = "Demo : form validation with HTML5 validation constraints";
const FOOTER_TEXT = "Happy learning : )";

setLayout(HEADER_TITLE, PAGE_TITLE, FOOTER_TEXT);

// example of custom validation error message
const EMAIL_ERROR = "Wrong email format !";
let emailInput = document.getElementById("email");

let btn = document.querySelector("#btn");

emailInput.addEventListener("input", (e) => {
  emailInput.setCustomValidity("");
  // check the validation status. An invalid event is raised if constraints are not fulfilled
  emailInput.checkValidity();
});

emailInput.addEventListener("invalid", (e) => {
  emailInput.setCustomValidity(EMAIL_ERROR);
});

/**
 * setLayout allows to display specific information in an HTML template
 * containing those paramters as id to text elements (h4, h5, title)
 * @param {headerTitle} headerTitle
 * @param {pageTitle} pageTitle
 * @param {footerText} footerText
 */
function setLayout(headerTitle, pageTitle, footerText) {
  document.querySelector("#headerTitle").innerText = headerTitle;
  document.querySelector("title").innerText = pageTitle;
  document.querySelector("#pageTitle").innerText = pageTitle;
  document.querySelector("#footerText").innerText = footerText;
}
