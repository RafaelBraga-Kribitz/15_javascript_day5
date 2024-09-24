let carsArr = [];

class Car {
  constructor(name1, brand, year, color, img) {
    this.name = name1; //this.name = 'Buddy'
    this.brand = brand;
    this.year = year;
    this.color = color;
    this.image = img;
    carsArr.push(this);
  }
  printMessage() {
    return `Name: ${this.name}, Brand: ${this.brand}, Year: ${this.year}, Color: ${this.color}`;
  }
}

class Motorcycle extends Car {
  constructor(name1, brand, year, color, img) {
    super(name1, brand, year, color, img);
  }
  makeSound() {
    return "Wof wof";
  }
}

class Truck extends Car {
  constructor(name1, brand, year, color, img, hasClaws) {
    super(name1, brand, year, color, img);
    this.hasClaws = hasClaws;
  }
  makeSound() {
    return "Meow meow";
  }
}

let motorcycle1 = new Motorcycle(
  "Max",
  "Honda",
  2024,
  "Red",
  "https://cdn.pixabay.com/photo/2015/11/17/13/13/puppy-1047521_1280.jpg"
);
let motorcycle2 = new Motorcycle(
  "Buddy",
  "Labrador",
  4,
  "Red",
  "https://cdn.pixabay.com/photo/2015/11/17/13/13/puppy-1047521_1280.jpg"
);
// console.log(motorcycle1);
let truck1 = new Truck(
  "Whiskers",
  "Honda",
  2024,
  "Red",
  "https://media.istockphoto.com/id/946455734/de/foto/3d-darstellung-der-generischen-auto-silber-auf-wei%C3%9F.jpg?s=1024x1024&w=is&k=20&c=oX4eXqIP2qxUPnI0jGsclFsZ7Hk92FoqGuIbAd13yX8=",
  true
);
let truck2 = new Truck(
  "Garfield",
  "Persian",
  5,
  "Red",
  "https://cdn.pixabay.com/photo/2024/03/07/10/38/simba-8618301_1280.jpg",
  false
);

console.log(carsArr);

for (let car of carsArr) {
  document.getElementById("result").innerHTML += `
    <div>
        <div class="card my-3">
            <img src="${car.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${car.name}</h5>
                <p class="card-text">${car.brand}</p>
                <p class="card-text">${car.year}</p>
                <p class="card-text">${car.color}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>
  `;
}

// console.log(truck1.printMessage());

// let motorcycle2 = new Motorcycle("Buddy", "Labrador", 5, ["Ball", "Frisbee"]);
// console.log(motorcycle1.makeSound());
// console.log(motorcycle1.printMessage());
// console.log(motorcycle2);
// console.log(motorcycle2.printMessage());
