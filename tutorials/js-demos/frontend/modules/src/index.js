import 'bootstrap/dist/css/bootstrap.min.css';
import './stylesheets/main.css';

// import from default export (you could give the name you want)
import Car from './domain/Car';
// import from named export
import { setLayout } from './utils/render';

const HEADER_TITLE = 'JavaScript & Node.js full course';
const PAGE_TITLE = 'Demo : ES6 Modules';
const FOOTER_TEXT = 'Happy learning : )';

setLayout(HEADER_TITLE, PAGE_TITLE, FOOTER_TEXT);

const btn = document.querySelector('#btn');
const page = document.querySelector('#page');

const raphael = {
  firstname: 'Raphael',
  lastname: 'Baroni',
  sayHello: () => 'Hi everyone !',
};

const sandra = {};
sandra.firstname = 'Sandra';
sandra.lastname = 'Parisi';

const dacia = new Car('Dacia', 'Sandero');

btn.addEventListener('click', () => {
  console.log('click::sayHello(): ', raphael.firstname, ' :', raphael.sayHello());

  console.log('click: get object properties: ', sandra.firstname, sandra.lastname, sandra.firstname, sandra.lastname);

  page.innerText = dacia.getDescription();
});
