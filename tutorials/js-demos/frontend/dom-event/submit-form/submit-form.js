const HEADER_TITLE = "JavaScript & Node.js full course";
const PAGE_TITLE = "Demo : form validation following a submit event";
const FOOTER_TEXT = "Happy learning : )";

let messageBoard = document.getElementById("messageBoard");
let myForm = document.querySelector("form");

// callback to be called when a form is submitted
const onSubmit = (e) => {
  console.log("onSubmit::");
  // Prevent the default behaviour of a form (data sent to URL specified in action parameter)
  e.preventDefault();
  // Start by clearing the message board and ensuring it is not displayed
  messageBoard.innerHTML = "";
  messageBoard.classList.remove("d-block");

  if (myForm.elements.email.value == "") {
    return showHtmlErrorMessage("No email");
  } else if (
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(
      myForm.elements.email.value
    ) === false
  ) {
    showHtmlErrorMessage("Email format invalid");
  }

  if (/.*[A-Z]+.*/.test(myForm.elements.password.value) === false) {
    showHtmlErrorMessage("Password format invalid");
  }

  // Action in case the form validation succeeded
  if (messageBoard.innerHTML.length === 0) {
    messageBoard.innerHTML = "Data a ready to be sent";
    messageBoard.className = "alert alert-success d-block";
  }
};

function showHtmlErrorMessage(message) {
  if (messageBoard.innerHTML == "") {
    messageBoard.innerHTML = "<p>Error(s):</p>";
    messageBoard.className = "alert alert-danger d-block";
  }
  messageBoard.innerHTML += `<p>- ${message}</p>`;
}

myForm.addEventListener("submit", onSubmit);

setLayout(HEADER_TITLE, PAGE_TITLE, FOOTER_TEXT);


/**
 * setLayout allows to render titles in the main layout
 * @param {string} headerTitle - the header title (content of h3 element)
 * @param {string} pageTitle - the page title (content of h3 element within main container)
 * @param {string} footerText - the footer title (content of h3 element)
 */
function setLayout(headerTitle, pageTitle, footerText) {
  document.querySelector("#headerTitle").innerText = headerTitle;
  document.querySelector("title").innerText = pageTitle;
  document.querySelector("#pageTitle").innerText = pageTitle;
  document.querySelector("#footerText").innerText = footerText;
}
