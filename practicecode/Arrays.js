//Arrays
//Initializing Arrays
let numArray = [1,2,3,4];
let stringArray = ["Visalakshi", "Subha","Jeru"]

//Printing Arrays
console.log(numArray);
console.log(stringArray[0]);
console.log(stringArray);

stringArray[0] = "Aju"          //reassigning arrays
console.log(stringArray)

console.log(stringArray.length)     //lenght of an array (no of items - 1)

stringArray.push("Anita","Mary")          //pushing an element to an array
console.log(stringArray)
stringArray.pop();         //remove last element from the array
console.log(stringArray)

let sampleArray = [11,12,13,14,15,16,17,18,19,20];

sampleArray.shift();                            //Removes and returns the first element of the array. All subsequent elements will shift down one place.
console.log(sampleArray);   

console.log(sampleArray.slice(1,3));           //Returns a shallow copy of part of array, while original array is not modified.
console.log(sampleArray.reverse());

console.log(stringArray.indexOf("Antuvan"))      //Returns the first element that matches the value of the argument passed in.

//nested Array

let numberClusters = [[1,2],[3,4],[5,6]];

console.log(numberClusters[2]);