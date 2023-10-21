// Import Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Custom styles
import "./stylesheets/main.css";

// This is the entry point to your app : add all relevant import and custom code

let btn = document.querySelector("#btn");
let page = document.querySelector("#page");

let raphael = {
  firstname: "Raphael",
  lastname: "Baroni",
  sayHello: () => "Hi everyone !",
};

let sandra = {};
sandra.firstname = "Sandra";
sandra.lastname = "Parisi";

class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
    this._id = Math.random();
  }
  get id() {
    return this._id;
  }
  getDescription() {
    return (
      "Car's description : " +
      this.brand +
      ", " +
      this.model +
      " , ID:" +
      this.id
    );
  }
}

let dacia = new Car("Dacia", "Sandero");

btn.addEventListener("click", function () {
  console.log(
    "click::sayHello(): ",
    raphael.firstname,
    " :",
    raphael.sayHello()
  );

  console.log(
    "click: get object properties: ",
    sandra.firstname,
    sandra.lastname,
    sandra["firstname"],
    sandra["lastname"]
  );

  page.innerText = dacia.getDescription();
});

function Auto(brand, model) {
  this.brand = brand;
  this.model = model;
  this.id = Math.random();
}

Auto.prototype.getDescription = function () {
  return (
    "Car's description : " + this.brand + ", " + this.model + " , ID:" + this.id
  );
};

let audi = new Auto("Audi", "A4");
console.log(audi.getDescription());

function AutoNotRecommended(brand, model) {
  let obj = {};
  obj.brand = brand;
  obj.model = model;
  obj.id = Math.random();
  obj.getDescription = function () {
    return (
      "Car's description : " +
      this.brand +
      ", " +
      this.model +
      " , ID:" +
      this.id
    );
  };
  return obj;
}
let lada = AutoNotRecommended("Lada", "XRAY");
// let lada = new AutoNotRecommended("Lada", "XRAY"); // also works

console.log(lada.getDescription());
