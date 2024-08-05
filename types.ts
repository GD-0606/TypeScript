let firstName: string = "Gopi";
let id: number = 492;
let isDeveloper: boolean = false;
firstName = "Rakesh";

//array
let jobs: readonly string[] = ["mern", "reactJs"];

// Type Inference
const numbers = [1, 2, "3", false];
numbers.push(false);

// tuples
const ownTuples: [string, number] = ["12", 3];

const [na, roll] = ownTuples;

// object
const car: { type: string; model: string } = 
{
  type: "Toyota",
  model: "TN0021",
};

// object interference
let studentObj = 
{
  name: "Gopi",
};

const Obj: Promise<number> = Promise.resolve(10);
console.log(firstName, id, isDeveloper, jobs, numbers, ownTuples, car, Obj);
