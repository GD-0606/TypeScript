"use strict";
// basic level questions
// Write a function add that takes two numbers and returns their sum.
// Add appropriate type annotations.
function sum(a, b) {
    return a + b;
}
const res = sum(2, 3);
console.log(`result : ${res}`);
// Write a function greet that takes a string (name) and an optional number (age) and returns a greeting message.
// Use type annotations and default parameters.
function greet(name, age) {
    return age ? `Hello ${name} and your age is ${age} !!` : `Hello ${name} !!`;
}
const message = greet("Rahul");
console.log(message);
const p1 = {
    name: "Loka",
    age: 30,
};
function printPerson(person) {
    console.log(`person name : ${person.name} and his age ${person.age}`);
}
printPerson(p1);
const getUserById = (id) => {
    return { id, name: "Gopi" };
};
const obj = getUserById("3");
console.log(obj);
// 4. classes
// Create a class Rectangle with properties width and height.
// Add a method area that returns the area of the rectangle.
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    area() {
        return this.width * this.height;
    }
}
const rectObj = new Rectangle(10, 20);
const area = rectObj.area();
console.log(area);
// 5. Union Types
// Create a function printId that takes a parameter id which can be either a string or a number.
// The function should print the id to the console.
function printId(id) {
    console.log(`id : ${id}`);
}
printId(true);
// 6. Enums
// Define an enum Color with values Red, Green, and Blue.
// Create a function getColor that takes a Color and returns its string representation.
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
const getColor = function (color) {
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
const color = getColor(Color.Green);
console.log(color);
