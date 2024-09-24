// 1. Create an object `sportsCar` with the following properties:
//   - `modelId`: 7
//   - `brand`: "SpyMotors"
//   - `model`: "Spectre"
//   - `colors`: ["Silver", "Black", "White"]

const sportsCar = {
  modelId: 7,
  brand: "SpyMotors",
  model: "Spectre",
  colors: ["Silver", "Black", "White"],
};

console.log(sportsCar);

// 2. Update the `modelId` property of `sportsCar` to 8.
sportsCar.modelId = 8;
sportsCar.colors.push("Midnight Blue");
console.log(sportsCar);

// 3. Create 3 different objects for 3 different themes: 
//   - **Car** (e.g., name, brand, model, type, color)
//   - **Animal** (e.g., name, type, color, age)
//   - **Person** (e.g., firstName, lastName, age, occupation)

const car = {
  name: "Toyota",
  brand: "Corolla",
  model: "Sedan",
  type: "Sedan",
  color: "Red",
  showDetails: function() {
    return `This is a ${this.color} ${this.brand} ${this.model}.`;
  }
};

const animal = {
  name: "Lion",
  type: "Mammal",
  color: "Yellow",
  age: 5,
  showDetails: function() {
    return `This is a ${this.color} ${this.type} named ${this.name}.`;
  }
};

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  occupation: "Software Engineer",
  showDetails: function() {
    return `This is ${this.firstName} ${this.lastName}, a ${this.age} year old ${this.occupation}.`;
  }
};

// Intermediate Exercises

// 1. Create a class for each theme and extend from the previous exercise:
//   - **Car Class** with properties like name, brand, model, type, color, and weight.
//   - **Animal Class** with properties like name, type, color, and age.
//   - **Person Class** with properties like firstName, lastName, age, and occupation.

class Car 
{
  constructor(name, brand, model, type, color, weight)
  {
    this.name = name;
    this.brand = brand;
    this.model = model;
    this.type = type;
    this.color = color;
    this.weight = weight;
  }

  showDetails()
  {
    return `This is a ${this.color} ${this.brand} ${this.model}.`;
  }
}

class Animal
{
  constructor(name, type, color, age) 
  {
    this.name = name;
    this.type = type;
    this.color = color;
    this.age = age;
  }

  showDetails()
  {
    return `This is a ${this.color} ${this.type} named ${this.name}.`;
  }
}

class Person
{
  constructor(firstName, lastName, age, occupation)
  {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.occupation = occupation;
  }

    showDetails()
    {
        return `This is ${this.firstName} ${this.lastName}, a ${this.age} year old ${this.occupation}.`;
    }
}

class Motorbike extends Car
{
  constructor(name, brand, model, type, color, weight, numberOfWheels)
  {
    super(name, brand, model, type, color, weight);
    this.numberOfWheels = numberOfWheels;
  }
}

class Fish {
  constructor(name, type, color, age, habitat) {
    this.name = name;
    this.type = type;
    this.color = color;
    this.age = age;
    this.habitat = habitat;
  }

  showDetails() {
    return `This is a ${this.color} ${this.type} named ${this.name}, living in ${this.habitat}.`;
  }
}

// 2. Create 3 different objects for each class.

const car1 = new Car("Toyota", "Corolla", "Sedan", "Sedan", "Red", "1500 kg");
const animal1 = new Animal("Lion", "Mammal", "Yellow", 5);
const person1 = new Person("John", "Doe", 30, "Software Engineer");

console.log(car1.showDetails());
console.log(animal1.showDetails());
console.log(person1.showDetails());

const motorbike1 = new Motorbike("Honda", "CBR", "Sedan", "Sedan", "Red", "1500 kg", 2);
console.log(motorbike1.showDetails());

const fish1 = new Fish("Nemo", "Clownfish", "Blue", 2, "Saltwater");
console.log(fish1.showDetails());

const profession1 = new Profession("John", "Doe", 30, "Software Engineer");
console.log(profession1.showDetails());

// 3. Print the results from the methods to the browser or console.

document.getElementById("carDetails").innerHTML = car1.showDetails();
document.getElementById("animalDetails").innerHTML = animal1.showDetails();
document.getElementById("personDetails").innerHTML = person1.showDetails();
document.getElementById("motorbikeDetails").innerHTML = motorbike1.showDetails();
document.getElementById("fishDetails").innerHTML = fish1.showDetails();
document.getElementById("professionDetails").innerHTML = profession1.showDetails();

// Challenge

// 1. Create an array of objects containing data about cars (e.g., car name, production year, image link, price).

// const cars = [
//     { name: "Car A", brand: "Brand A", productionYear: 2020, imageLink: "link_to_image_A", price: "$20,000" },
//     { name: "Car B", brand: "Brand B", productionYear: 2021, imageLink: "link_to_image_B", price: "$25,000" },
//     // ... add more cars as needed
// ];

// // 2. Display the data from the array on the `index.html` page using JavaScript loops.

// const carContainer = document.getElementById("carContainer");

// cars.forEach(car => {
//   const carDiv = document.createElement("div");
//   carDiv.innerHTML = `
//     <h2>${car.name}</h2>
//     <p>Brand: ${car.brand}</p>
//     <p>Production Year: ${car.productionYear}</p>
//     <img src="${car.imageLink}" alt="${car.name}" style="width: 200px; height: auto;">
//     <p>Price: $${car.price}</p>
//   `;
//   carContainer.appendChild(carDiv);
// });

// // 3. When the user clicks on a car name, display a div with the car image and details.

// const carDetailsContainer = document.getElementById("carDetailsContainer");

// carContainer.addEventListener("click", (e) => {
//   if (e.target.tagName === "H2") {
//     const car = cars.find(c => c.name === e.target.textContent);
//     carDetailsContainer.innerHTML = `
//       <h2>${car.name}</h2>
//       <p>Brand: ${car.brand}</p>
//       <p>Production Year: ${car.productionYear}</p>
//       <img src="${car.imageLink}" alt="${car.name}" style="width: 200px; height: auto;">
//       <p>Price: $${car.price}</p>
//     `;
//   }
// });

// // 4. Implement a feature to hide the car details when clicked again.

// carDetailsContainer.addEventListener("click", () => {
//   carDetailsContainer.style.display = "none";
// });

// function displayCars() {
//     const carList = document.getElementById('car-list');
//     cars.forEach(car => {
//         const carCard = document.createElement('div');
//         carCard.className = 'col-md-4 mb-4';
//         carCard.innerHTML = `
//             <div class="card">
//                 <div class="card-body">
//                     <h5 class="card-title">${car.name}</h5>
//                     <button class="btn btn-primary" onclick="toggleDetails('${car.name}')">View Details</button>
//                     <div id="${car.name}-details" class="car-details" style="display:none;">
//                         <img src="${car.imageLink}" class="card-img-top" alt="${car.name}">
//                         <p>Brand: ${car.brand}</p>
//                         <p>Year: ${car.productionYear}</p>
//                         <p>Price: ${car.price}</p>
//                     </div>
//                 </div>
//             </div>
//         `;
//         carList.appendChild(carCard);
//     });
// }

// function toggleDetails(carName) {
//     const detailsDiv = document.getElementById(`${carName}-details`);
//     detailsDiv.style.display = detailsDiv.style.display === 'none' ? 'block' : 'none';
// }

// window.onload = displayCars;

