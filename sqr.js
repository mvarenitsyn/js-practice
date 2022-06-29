function squareDigits(num){
    return +num.toString().split("").map(el => el=+el*+el).join("")
}

console.log(squareDigits(9119))