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

// 2. Create 3 different objects for each class.

const car1 = new Car("Toyota", "Corolla", "Sedan", "Sedan", "Red", "1500 kg");
const animal1 = new Animal("Lion", "Mammal", "Yellow", 5);
const person1 = new Person("John", "Doe", 30, "Software Engineer");

console.log(car1.showDetails());
console.log(animal1.showDetails());
console.log(person1.showDetails());