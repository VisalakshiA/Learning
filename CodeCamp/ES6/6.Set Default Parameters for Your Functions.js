// Only change code below this line
const increment = (number, value=1) => number + value;
console.log(increment(5));
// Only change code above this line

const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John"));
console.log(greeting());