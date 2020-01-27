// ==== Callbacks ====  

/* Step 1: Create a higher-order function
  * Create a higher-order function named consume with 3 parameters: a, b and cb
  * The first two parameters can take any argument (we can pass any value as argument)
  * The last parameter accepts a callback
  * The consume function should return the invocation of cb, passing a and b into cb as arguments
*/
function consume(a, b, cb) {
  return cb(a, b)
}


/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/
function add(numOne, numTwo) {
  return numOne + numTwo
}
​
function multiply(numOne, numTwo) {
  return numOne * numTwo
}
​
function greeting(firstName, lastName) {
  return `Hello ${firstName} ${lastName}, nice to meet you!`
}


/* Step 3: Check your work by un-commenting the following calls to consume(): */
// console.log(consume(2, 2, add)); // 4
// console.log(consume(10, 16, multiply)); // 160
// console.log(consume("Mary", "Poppins", greeting)); // Hello Mary Poppins, nice to meet you!
console.log(consume(2, 2, add)); // 4
console.log(consume(10, 16, multiply)); // 160
console.log(consume("Mary", "Poppins", greeting)); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why nestedfunction can access the variable internal.

// Explanation: 

const external = "I'm outside the function";
​
function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";
​
  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Describe the biggest difference between .forEach & .map.?
// Answer: The biggest difference is that forEach() allows the mutation of the original array, while map() returns a new array of the same size. map() is also faster. But it is entirely up to you to decide which one works better for you. It also depends on your use-case and codebase.

// What is the difference between a function and a method?
// Answer: A function is a piece of code that is called by name. It can be passed data to operate on  and can optionally return data the return value. All data that is passed to a function is explicitly passed. A method is a piece of code that is called by a name that is associated with an object.

// What is closure?
// Answer: A closure is a function that has access to its outer function scope even after the outer function has returned. 

// Describe the four rules of the 'this' keyword?
// Answer: Whenever a function is contained in the global scope, the value of this inside of that function will be the window object.
// Whenever a function is called by a preceding dot, the object before that dot is this.
// Whenever a constructor function is used, this refers to the specific instance of the object that is created and returned by the constructor function.
// Whenever JavaScript’s call or apply method is used, this is explicitly defined.

// Why do we need super() in an extended class?
// Answer: he super keyword in JavaScript is used in order to call the methods of the parent class. By itself, super() is used within a constructor function to call the parent constructor function