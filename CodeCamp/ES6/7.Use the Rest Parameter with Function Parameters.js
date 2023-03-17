const sum = (...args) => {
    //const args = [x, y, z];
    let total = 0;
    for (let i = 0; i < args.length; i++) {
      total += args[i];
    }
    return total;
  }


  //The rest parameter eliminates the need to check the args array and allows us to apply map(), filter() and reduce() on the parameters array.