function mathOperations (number1, number2, operant){
    number1 = Number(number1)
    number2 = Number(number2)
    if (operant == "+"){
        console.log(number1 + number2)
    }else if (operant == "-"){
        console.log(number1 - number2)
    }else if (operant == "*"){
        console.log(number1 * number2)
    }else if (operant == "/"){
        console.log(number1 / number2)
    }else if (operant == "%"){
        console.log(number1  % number2)
    }else{
        console.log(number1 ** number2)
    }
}

mathOperations(3, 5.5, '*')