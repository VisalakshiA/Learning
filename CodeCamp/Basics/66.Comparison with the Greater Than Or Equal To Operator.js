function testGreaterOrEqual(val) {
    if (val>=21) {  // Change this line
      return "20 or Over";
    }
  
    if (val>=10) {  // Change this line
      return "10 or Over";
    }
    if(val>=0)
    {
      return "Less than 10";
    }
  }
  
  testGreaterOrEqual(10);