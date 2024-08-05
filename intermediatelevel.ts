// Generics

// 1. Write a generic function identity that takes an argument of any type
// and returns that same argument.
type car = {
  name: string;
  cost: number;
};
function generic1<T>(val: T): T {
  return val;
}
let o1 = generic1<number>(12);
let o2 = generic1<boolean>(false);
let o3 = generic1<number[]>([1, 2, 3]);
let o4 = generic1<car>({ name: "gopi", cost: 123 });
console.log(o1, o2, o3, o4);

//2. Implement a generic Stack class with methods push, pop, and peek.
//  Ensure that the stack only contains elements of the same type.
class GenericStack<T> {
  stack: T[];
  constructor() {
    this.stack = [];
  }
  push(element: T) {
    this.stack.push(element);
  }
  pop(): T | undefined {
    return this.stack.pop();
  }
  peek(): T | undefined {
    return this.stack[this.stack.length - 1];
  }
}
const numberStack = new GenericStack<number>();
numberStack.push(10);
numberStack.push(20);
console.log(numberStack.peek());
console.log(numberStack.pop());
console.log(numberStack.stack);

// 2.Union Types
// 2.a.Write a function formatValue that takes a value which can be either a string or a number and returns a formatted string. If it’s a number, return it as a string with two decimal places.
function formatValue(value: number | string): string {
  return typeof value === "string" ? `${value}` : `${value.toFixed(2)}`;
}
console.log(formatValue("Hello"));
console.log(formatValue(12));

// 3.Enums
// 3.a.Define an enum Role with values Admin, User, and Guest.
// Write a function describeRole that takes a Role and returns a description based on the role.

enum Role {
  Admin,
  User,
  Guest,
}

function describeRole(role: Role): string {
  switch (role) {
    case Role.Admin:
      return `i am Admin`;
    case Role.User:
      return `i am User`;
    case Role.Guest:
      return `i am Guest`;
    default:
      return "UnKnown";
  }
}
const desc = describeRole(Role.User);
console.log(desc);
