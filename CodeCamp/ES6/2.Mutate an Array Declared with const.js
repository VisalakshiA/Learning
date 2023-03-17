const s = [5, 7, 2];
function editInPlace() {
  // Only change code below this line

  // Using s = [2, 5, 7] would be invalid
   s[0] = 2;
   s[1] = 5;
   s[2] = 7;
  // Only change code above this line
}
console.log(editInPlace()); //If variable declared with const, it cant be changed by assignment operator, but each element can be changed and in that case const is mutable.