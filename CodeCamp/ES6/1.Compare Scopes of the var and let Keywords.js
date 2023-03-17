function checkScope() {
    let i = 'function scope';
    if (true) {
      let i = 'block scope';
      console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
  }

  function checkScope1() {
    var i = 'function scope';
    if (true) {
    i = 'block scope';
      console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
  }

  console.log(checkScope()); //as declared inside the if statement, the i value is different inside the loop and outside the loop it takes the globally decalred i.
  console.log(checkScope1()); //once reasssigned it always shows the one that declared inside the if loop.