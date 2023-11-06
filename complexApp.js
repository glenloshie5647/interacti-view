/*
  Filename: complexApp.js
  Description: A sophisticated and complex JavaScript application demonstrating various concepts and features.
*/

// Utility function to generate random numbers within a range
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Class representing a Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}

// Class representing a complex application
class ComplexApp {
  constructor() {
    this.people = [];
    this.MAX_PEOPLE = 10;
  }

  // Create and add random people to the application
  createRandomPeople() {
    for (let i = 0; i < this.MAX_PEOPLE; i++) {
      const name = `Person ${i}`;
      const age = getRandomNumber(20, 50);
      const person = new Person(name, age);
      this.people.push(person);
    }
  }

  // Execute the complex operation
  executeComplexOperation() {
    const randomNumber = getRandomNumber(1, 10);
    let sum = 0;
    for (let i = 0; i < randomNumber * 100000; i++) {
      sum += i;
    }
    console.log(`Sum: ${sum}`);
  }

  // Print details of all the people in the application
  printPeopleDetails() {
    this.people.forEach(person => person.greet());
  }
}

// Main function to run the application
function main() {
  const app = new ComplexApp();
  app.createRandomPeople();
  app.executeComplexOperation();
  app.printPeopleDetails();
}

// Run the main function
main();