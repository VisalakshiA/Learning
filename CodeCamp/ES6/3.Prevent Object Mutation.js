function freezeObj() {
    const MATH_CONSTANTS = {
      PI: 3.14
    };
    // Only change code below this line
  
     Object.freeze(MATH_CONSTANTS);        //this is used so the value will not be changed and it will throw an error.
    // Only change code above this line
    try
    {
      MATH_CONSTANTS.PI = 99;
    } 
    catch(ex) 
    {
      console.log(ex);
    }
    return MATH_CONSTANTS.PI;
  }
  const PI = freezeObj();
  console.log(PI);