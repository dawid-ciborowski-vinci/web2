/**
 * setLayout allows to display specific information in an HTML template
 * containing those paramters as id to text elements (header h3, footer h3 title)
 * @param {headerTitle} headerTitle
 * @param {pageTitle} pageTitle
 * @param {footerText} footerText
 */
function setLayout(headerTitle, pageTitle, footerText) {
  if (headerTitle) document.querySelector('#headerTitle').innerText = headerTitle;
  if (pageTitle) {
    document.querySelector('title').innerText = pageTitle;
    document.querySelector('#pageTitle').innerText = pageTitle;
  }
  if (footerText) document.querySelector('#footerText').innerText = footerText;
}

function setHeaderTitle(headerTitle) {
  if (headerTitle) document.querySelector('#headerTitle').innerText = headerTitle;
}

// named export
export { setLayout, setHeaderTitle };
