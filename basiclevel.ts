// basic level questions

// Write a function add that takes two numbers and returns their sum.
// Add appropriate type annotations.
function sum(a: number, b: number): number {
  return a + b;
}
const res: number = sum(2, 3);
console.log(`result : ${res}`);

// Write a function greet that takes a string (name) and an optional number (age) and returns a greeting message.
// Use type annotations and default parameters.

function greet(name: string, age?: number): string {
  return age ? `Hello ${name} and your age is ${age} !!` : `Hello ${name} !!`;
}
const message: string = greet("Rahul");
console.log(message);

// 2.Interfaces

// Define an interface Person with properties name (string) and age (number).
// Create an object that adheres to this interface and write a function printPerson that takes a Person and logs their details.
interface Person {
  name: string;
  age: number;
}
interface ExtraPerson extends Person {
  color: string;
}
const p1: Person = {
  name: "Loka",
  age: 30,
};

function printPerson(person: Person): void {
  console.log(`person name : ${person.name} and his age ${person.age}`);
}
printPerson(p1);

// 3. Type Alias

// Define a type alias ID for a string.
// Write a function getUserById that takes an ID and returns a user object with properties id (ID) and name (string).
type ID = string;

type userObj = {
  id: ID;
  name: string;
};
const getUserById = (id: ID): userObj => {
  return { id, name: "Gopi" };
};
const obj: userObj = getUserById("3");
console.log(obj);

// 4. classes
// Create a class Rectangle with properties width and height.
// Add a method area that returns the area of the rectangle.

class Rectangle {
  width: number;
  height: number;
  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }
  area(): number {
    return this.width * this.height;
  }
}
const rectObj = new Rectangle(10, 20);
const area: number = rectObj.area();
console.log(area);

// 5. Union Types

// Create a function printId that takes a parameter id which can be either a string or a number.
// The function should print the id to the console.
function printId(id: string | number | boolean): void {
  console.log(`id : ${id}`);
}
printId(true);

// 6. Enums

// Define an enum Color with values Red, Green, and Blue.
// Create a function getColor that takes a Color and returns its string representation.

enum Color {
  Red,
  Green,
  Blue,
}
const getColor = function (color: Color): string {
  switch (color) {
    case Color.Red:
      return "red";
    case Color.Green:
      return "green";
    case Color.Blue:
      return "blue";
    default:
      return "Unknown";
  }
};
const color: string = getColor(Color.Green);
console.log(color);
