
//basic looping

for(let i = 0; i<=5 ; i++)
{
    console.log(i);
}

//reverse looping

for(let j = 5; j>=0 ; j--)
{
    console.log(j);
}

//looping arrays

let name = ['Bali','Venice','Coorg']

for(itr = 0;itr<name.length;itr++)
{
    console.log(name[itr]);
}

//nested arrays

let bobsFollowers = ['ajay','jerry','vikaram','Krish']
let tinasFollowers  = ['ajay','jerry','sakshi',]
let mutualFollowers = []

for(let bob = 0; bob<bobsFollowers.length;bob++)
{
  for(let tina = 0;tina<tinasFollowers.length;tina++)
  {
    if(bobsFollowers[bob]===tinasFollowers[tina])
    {
      mutualFollowers.push(tinasFollowers[tina]);
      console.log(mutualFollowers);
    }
  }
}

//while
// A while loop that prints 1, 2, and 3
let counterTwo = 1;
while (counterTwo < 4) {
  console.log(counterTwo);
  counterTwo++;
}

//DO while
let cupsOfSugarNeeded = 1;
let cupsAdded = 0;


do{
  cupsOfSugarNeeded = cupsOfSugarNeeded + cupsAdded;
  cupsAdded++;
}while(cupsAdded < cupsOfSugarNeeded);
console.log("sugar" +cupsAdded )

//break
const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];
for (let i = 0; i < rapperArray.length; i++) {
if(i>2){
  break;
}

 console.log(rapperArray[i]);
}
console.log("And if you don't know, now you know.")