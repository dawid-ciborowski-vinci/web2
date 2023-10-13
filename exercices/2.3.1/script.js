const form = document.querySelector("#form");
const wish = document.querySelector("#input");
const div = document.querySelector("#div");

const onSubmit = (e) => {
  e.preventDefault();
  form.style.display = "none";
  div.innerHTML = `
    <p>Your wish : ${wish.value}</p>
    <form>
        <button type="submit">Make a new wish</button>
    </form>`;
};

form.addEventListener("submit", onSubmit);
btn.addEventListener("submit");
