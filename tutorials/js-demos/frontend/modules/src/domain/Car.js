import { v4 as uuidv4 } from 'uuid';

class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
    this.id = uuidv4();
  }

  getDescription() {
    return `Car's description : ${this.brand}, ${this.model} , ID:${this.id}`;
  }
}

export default Car;
