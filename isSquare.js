const isSquare = function(n){

    return n===0?true:n<0?false:Math.sqrt(n)%1===0;
}

console.log(isSquare(7))