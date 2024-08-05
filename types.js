var firstName = "Gopi";
var id = 492;
var isDeveloper = false;
firstName = "Rakesh";
//array
var jobs = ["mern", "reactJs"];
// Type Inference
var numbers = [1, 2, "3", false];
numbers.push(false);
// tuples
var ownTuples = ["12", 3];
var na = ownTuples[0], roll = ownTuples[1];
// object
var car = {
    type: "Toyota",
    model: "TN0021",
};
// object interference
var studentObj = {
    name: "Gopi",
};
var Obj = Promise.resolve(10);
console.log(firstName, id, isDeveloper, jobs, numbers, ownTuples, car, Obj);
