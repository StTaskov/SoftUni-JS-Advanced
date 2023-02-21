function greatestCommonDivisor(number1, number2){
    while (number2){
        let t = number2
        number2 = number1 % number2
        number1 = t
    }
    console.log(number1)
}

greatestCommonDivisor(15, 5)