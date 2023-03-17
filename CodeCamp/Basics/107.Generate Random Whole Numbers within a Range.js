function randomRange(myMin, myMax) {
    // Only change code below this line
    let random = Math.random()
    //console.log(random);
    //console.log((myMax - myMin + 1) + myMin);
    return Math.floor(random* (myMax - myMin + 1)) + myMin;
    // Only change code above this line
  }

  console.log(randomRange(10,100));