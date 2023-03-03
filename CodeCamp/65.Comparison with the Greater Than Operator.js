function testGreaterThan(val) {
    if (val > 100) {  // Change this line
      return "Over 100";
    }
  
    if (val>10) {  // Change this line
      return "Over 10";
    }
    if(val>-1)
    {
    return "10 or Under";
    }
  }
  
  testGreaterThan(10);