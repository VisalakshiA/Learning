function countdown(n){
    if (n < 1) 
    {
       return [];
    }
    else 
    {
       const arr = countdown(n - 1);
       arr.unshift(n);                          //unshift will add in the beggining
       return arr;
    }
   }

   console.log(countdown(5));