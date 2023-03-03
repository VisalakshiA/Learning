
function testNotEqual(val) {
    if (val != "99") { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  
  function testStrictNotEqual(val) {
    if (val !== 17) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  
  console.group(testNotEqual(99));
  console.log(testStrictNotEqual('17'));