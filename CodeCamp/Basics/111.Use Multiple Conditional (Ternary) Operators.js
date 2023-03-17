function checkSign(num) {

    return (num == 0) ? "zero" : (num>=10) ? "positive" : "negative";
    
    }
    
   console.log(checkSign(10));