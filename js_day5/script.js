// const dog = {
//   dogName: "Max",
//   breed: "Labrador",
//   age: 2,
//   favoriteToys: ["Ball", "Frisbe", "Rope"],
//   makeSound: function () {
//     return "Wof wof";
//   },
//   printMessage: function () {
//     return `Name: ${this.dogName}, Breed: ${this.breed}, Age: ${this.age} years old`;
//   },
// };

// console.log(dog);
// console.log(dog.dogName);
// console.log(dog.favoriteToys[2]);
// console.log(dog.makeSound());
// console.log(dog.printMessage());

// dog.dogName = "Buddy";
// dog.favoriteToys.push("test");
// dog.makeSound = function () {
//   return "something else";
// };
// console.log(dog.dogName);
// console.log(dog.favoriteToys);
// console.log(dog.makeSound());

// let person = new Object();
// person.firstName = "John";
// person.lastName = "Doe";
// person.fullName = function () {
//   return `${this.firstName} ${this.lastName}`;
// };
// console.log(person.fullName());

// console.log(dog["dogName"]);
// console.log(dog["favoriteToys"][2]);
// console.log(dog["makeSound"]());

// let animals = {
//   cat: {
//     name: "Whiskers",
//     age: 5,
//     favoriteHobbies: ["Napping", "Chasing Toys"],
//     owner: {
//       ownerName: "Alice",
//       ownerAge: 30,
//       location: "City",
//     },
//   },
//   dog: {
//     name: "Buddy",
//     age: 3,
//     favoriteHobbies: ["Fetching", "Running"],
//     owner: {
//       ownerName: "Bob",
//       ownerAge: 25,
//       location: "Suburb",
//     },
//   },
//   chicken: {
//     name: "Clucky",
//     age: 2,
//     favoriteHobbies: ["Scratching the Ground", "Eating Grains"],
//     owner: {
//       ownerName: "Carol",
//       ownerAge: 40,
//       location: "Rural Area",
//     },
//   },
//   lion: {
//     name: "Simba",
//     age: 7,
//     favoriteHobbies: ["Hunting", "Resting in the Shade"],
//     owner: {
//       ownerName: "David",
//       ownerAge: 35,
//       location: "Jungle",
//     },
//   },
// };
// console.log(animals.cat.name);
// // Task 1: Find out the cat's owner's name.
// console.log(animals.cat.owner.ownerName);

// // Task 2: Determine the age of the dog.
// console.log(animals.dog.age);

// // Task 3: List the second favorite hobby of the chicken
// console.log(animals.chicken.favoriteHobbies[1]);

// // Task 4: Determine the location of the dog's owner.
// console.log(animals.dog.owner.location);

// for (let key in animals) {
//   console.log(key);
//   document.getElementById("content").innerHTML += `
//     <h1>Hi I am ${key} and my name is ${animals[key].name}</h1>
//     <h3>I am ${animals[key].age} years old and my hobbies are ${animals[key].favoriteHobbies}</h3>
//   <hr>
//   `;
// }

// Classes

let animalsArr = [];

class Animal {
  constructor(name1, breed, age, favoriteToys, img) {
    this.name = name1; //this.name = 'Buddy'
    this.breed = breed;
    this.age = age;
    this.favoriteToys = favoriteToys;
    this.image = img;
    animalsArr.push(this);
  }
  printMessage() {
    return `Name: ${this.name}, Breed: ${this.breed}, Age: ${this.age} years old`;
  }
}

class Dog extends Animal {
  constructor(name1, breed, age, favoriteToys, img) {
    super(name1, breed, age, favoriteToys, img);
  }
  makeSound() {
    return "Wof wof";
  }
}

class Cat extends Animal {
  constructor(name1, breed, age, favoriteToys, img, hasClaws) {
    super(name1, breed, age, favoriteToys, img);
    this.hasClaws = hasClaws;
  }
  makeSound() {
    return "Meow meow";
  }
}

let dog1 = new Dog(
  "Max",
  "Labrador",
  2,
  ["Ball", "Frisbee", "Rope"],
  "https://cdn.pixabay.com/photo/2015/11/17/13/13/puppy-1047521_1280.jpg"
);
let dog2 = new Dog(
  "Buddy",
  "Labrador",
  4,
  ["Ball", "Frisbee", "Rope"],
  "https://cdn.pixabay.com/photo/2015/11/17/13/13/puppy-1047521_1280.jpg"
);
// console.log(dog1);
let cat1 = new Cat(
  "Whiskers",
  "Siamese",
  3,
  ["Feather", "Ball"],
  "https://cdn.pixabay.com/photo/2024/03/07/10/38/simba-8618301_1280.jpg",
  true
);
let cat2 = new Cat(
  "Garfield",
  "Persian",
  5,
  ["Feather", "Ball"],
  "https://cdn.pixabay.com/photo/2024/03/07/10/38/simba-8618301_1280.jpg",
  false
);

console.log(animalsArr);

for (let animal of animalsArr) {
  document.getElementById("result").innerHTML += `
    <div>
        <div class="card my-3">
            <img src="${animal.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${animal.name}</h5>
                <p class="card-text">${animal.breed}</p>
                <p class="card-text">${animal.printMessage()}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>
  `;
}

// console.log(cat1.printMessage());

// let dog2 = new Dog("Buddy", "Labrador", 5, ["Ball", "Frisbee"]);
// console.log(dog1.makeSound());
// console.log(dog1.printMessage());
// console.log(dog2);
// console.log(dog2.printMessage());
