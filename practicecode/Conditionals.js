console.log("Conditionals");    //header

//if statement

let num = 20;
if(num)
{
    console.log(`The number is ${num}`)
}

//if elseif else

if(num===20)
{
    console.log(`The number is ${num} and it is greater than 10`)
}
else if(num=!20)
{
    console.log(`The number is ${num} and and not equal to 20`)
}
else{
    console.log(`The number is ${num} and it is lesser than 10`)
}

//logical operator
let mood = 'sleepy';
let tirednessLevel = 6;

if(mood != 'sleepy' || tirednessLevel > 8 )
{
console.log('time to sleep')
}
else{
console.log('not bed time yet')
}

//Ternary Operator

let favoritePhrase1 = 'Love That!';

favoritePhrase === 'Love That!' ?console.log('I love that!'):console.log("I don't love that!");
favoritePhrase1 === 'Love That!' ?console.log('I love that!'):console.log("I don't love that!");

//switch
let groceryItem = 'papaya';
 
switch (groceryItem) {
  case 'tomato':
    console.log('Tomatoes are $0.49');
    break;
  case 'lime':
    console.log('Limes are $1.49');
    break;
  case 'papaya':
    console.log('Papayas are $1.29');
    break;
  default:
    console.log('Invalid item');
    break;
}
