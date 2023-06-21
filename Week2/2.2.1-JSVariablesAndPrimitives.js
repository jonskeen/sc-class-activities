// create a constant variable (const)
const myVeryFirstVariable = "dope";

// create a variable that can be reassigned (let)
let mySecondVariable = "real nice";

// create three variables and assign them values of different data types (=)
const a = 1;
const b = "1";
const c = true;

// print the types of two variables that reference two different data types (typeof)
// TIP: console.log() prints a value in the console/terminal
console.log("typeof a", typeof a);
console.log("typeof b", typeof b);
console.log("typeof c", typeof c);

// change the value referenced by a variable (dynamic typing)
mySecondVariable = 123;

// print the type of the variable you just changed (typeof)
console.log("new typeof mySecondVariable", typeof mySecondVariable);

// create variables and give them values to complete the sentences that will print  below.
// Which variables need to be created?
// What type of data needs to go in each variable?
const name = "Jimmy Bo Bobert the Fifth";
const lang = "English";
const durationWk = 3;
const isMaster = true;

console.log(
  "Hello, my name is " +
    name +
    ", and I am learning " +
    lang +
    ". I have been practicing for only " +
    durationWk +
    " weeks, so my status as a master is: " +
    isMaster +
    "."
);
