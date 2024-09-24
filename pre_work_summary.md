# Detailed Summary of **FE23.0_ Javascript _ Day 5 _ Pre-Work.pdf**

## **JavaScript Overview**
The document focuses on essential concepts in JavaScript, particularly **Objects** and **Object-Oriented Programming (OOP)**.

### **1. JavaScript Objects**
- Most values in JavaScript are objects, excluding primitive types (string, number, boolean, null, and undefined). Objects consist of properties and methods. For example, a dog can be modeled with properties like name and age, and methods for actions like barking. 
  
- Example of a JavaScript object representing a person:
  ```javascript
  var person = {
      firstName: "john",
      lastName: "doe",
      age: 25,
      drivingLicense: true,
      hobbies: ['swim', 'read', 'coding'],
      fullName: function() {
          return this.firstName + ' ' + this.lastName;
      }
  }
  ```
  This object includes five properties and one method, with `this` referring to the object itself. 

### **2. Accessing Object Properties**
- Properties can be accessed using:
  - **Dot notation**: `console.log(person.firstName);`
  - **Square bracket notation**: `console.log(person["firstName"]);`
  
- To call a method, parentheses are required:
  ```javascript
  console.log(person.fullName());
  ``` 

### **3. Object-Oriented Programming (OOP)**
- OOP is a programming paradigm that treats a program as a collection of objects interacting through methods. Understanding OOP is essential for grasping JavaScript classes. 

### **4. Classes in JavaScript**
- Classes provide a modern way to create objects using constructor functions. A class can be defined as follows:
  ```javascript
  class Person {
      constructor(firstName, lastName) {
          this.firstName = firstName;
          this.lastName = lastName;
      }
      fullName() {
          return this.firstName + " " + this.lastName;
      }
  }
  ```
  To create an instance:
  ```javascript
  var person1 = new Person("Jenny", "Doe");
  console.log(person1.fullName());
  ``` 

### **5. Important Rules for Classes**
- The `new` keyword is necessary to create an instance of a class. If no constructor is defined, a default empty constructor is provided. Hoisting does not apply to classes, meaning they cannot be used before declaration. 

### **6. Practical Example**
- A practical example demonstrates using an object in an HTML document:
  ```html
  <html>
  <body>
      <h3>Info about a student</h3>
      <h1 id="personName"></h1>
      <h2 id="age"></h2>
      <h3 id="message"></h3>
      <script>
          var person = {
              firstName: "john",
              lastName: "doe",
              age: 25,
              drivingLicense: true,
              hobbies: ['swim', 'read', 'coding'],
              greetings: function() {
                  return `Hi, My name is ${this.firstName} ${this.lastName}.`;
              }
          }
          document.getElementById("personName").innerHTML = person.firstName;
          document.getElementById("age").innerHTML = person.age;
          document.getElementById("message").innerHTML = person.greetings();
      </script>
  </body>
  </html>
  ``` 

## **Conclusion**
This document provides a comprehensive overview of JavaScript objects and the principles of Object-Oriented Programming, including practical examples and syntax for creating and manipulating objects.