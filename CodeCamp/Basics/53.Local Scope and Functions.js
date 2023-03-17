/*
Variables which are declared within a function, as well as the function parameters, have local scope. That means they are only visible within that function.
*/


function myLocalScope() {
    // Only change code below this line
    let myVar;                                 //newly added line if not declared inside it will throw an reference error.
    console.log('inside myLocalScope', myVar);
  }
  myLocalScope();
  
  // Run and check the console
  // myVar is not defined outside of myLocalScope
  console.log('outside myLocalScope', myVar);