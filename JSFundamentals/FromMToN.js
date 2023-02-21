function FromMToN(num1, num2){
    num_1 =  Number(num1)
    num_2 =  Number(num2)
    while (num_2 <= num_1){
        console.log(num_1)
        num_1 = num_1 - 1
    }
}
FromMToN(6, 2)