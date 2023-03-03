//Truthy and Falsy 
let favoritePhrase = '';

if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}

//Truthy assignement
let username = '';
let defaultName = username || 'Stranger';
 
console.log(defaultName); // Prints: Stranger
