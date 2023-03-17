// Only change code below this line

//sample
/*
const person = {
    name: "Taylor",
    sayHello: function() {
      return `Hello! My name is ${this.name}.`;
    }
  };
  */
  //With ES6, you can remove the function keyword and colon altogether when defining functions in objects. Here's an example of this syntax:
  
  const person = {
    name: "Taylor",
    sayHello() {
      return `Hello! My name is ${this.name}.`;
    }
  };


//exercise

const bicycle = {
    gear: 48,
    setGear(newGear){ return `this.gear = ${newGear}`;
    
  }
  }
  // Only change code above this line
  bicycle.setGear(3);
  console.log(bicycle.gear);