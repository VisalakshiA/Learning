// Only change code below this line

// Only change code above this line

//const carrot = new Vegetable('carrot');
//console.log(carrot.name); // Should display 'carrot'

class Vegetable {
    constructor(name) {
      this.name = name;
    }
  }
  
  const carrot = new Vegetable("carrot");
  console.log(carrot.name); // => should be 'carrot'