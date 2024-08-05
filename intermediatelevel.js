// Generics
function generic1(val) {
    return val;
}
var o1 = generic1(12);
var o2 = generic1(false);
var o3 = generic1([1, 2, 3]);
var o4 = generic1({ name: "gopi", cost: 123 });
console.log(o1, o2, o3, o4);
//2. Implement a generic Stack class with methods push, pop, and peek.
//  Ensure that the stack only contains elements of the same type.
var GenericStack = /** @class */ (function () {
    function GenericStack() {
        this.stack = [];
    }
    GenericStack.prototype.push = function (element) {
        this.stack.push(element);
    };
    GenericStack.prototype.pop = function () {
        return this.stack.pop();
    };
    GenericStack.prototype.peek = function () {
        return this.stack[this.stack.length - 1];
    };
    return GenericStack;
}());
var numberStack = new GenericStack();
numberStack.push(10);
numberStack.push(20);
console.log(numberStack.peek());
console.log(numberStack.pop());
console.log(numberStack.stack);
// 2.Union Types
// 2.a.Write a function formatValue that takes a value which can be either a string or a number and returns a formatted string. If it’s a number, return it as a string with two decimal places.
function formatValue(value) {
    return typeof value === "string" ? "".concat(value) : "".concat(value.toFixed(2));
}
console.log(formatValue("Hello"));
console.log(formatValue(12));
// 3.Enums
// 3.a.Define an enum Role with values Admin, User, and Guest.
// Write a function describeRole that takes a Role and returns a description based on the role.
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["User"] = 1] = "User";
    Role[Role["Guest"] = 2] = "Guest";
})(Role || (Role = {}));
function describeRole(role) {
    switch (role) {
        case Role.Admin:
            return "i am Admin";
        case Role.User:
            return "i am User";
        case Role.Guest:
            return "i am Guest";
        default:
            return "UnKnown";
    }
}
var desc = describeRole(Role.User);
console.log(desc);
