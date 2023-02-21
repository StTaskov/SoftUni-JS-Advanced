function sumNumbers (number1, number2){
    N = Number(number1)
    M = Number(number2)
    let result = 0
    for (i = N; i < M + 1; i++){
        result += i
    }
    console.log(result)
}

sumNumbers('-8', '20')