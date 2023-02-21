function sameNumbers(numberString){
    numberString = String(numberString)
    currentCharacter = numberString[0]
    isOK = true
    sum = 0
    for (i = 0; i < numberString.length; i++) {
        if (numberString[i] == currentCharacter){
            sum += Number(numberString[i])
            continue
        }else{
            isOK = false
            sum += Number(numberString[i]) 
        }
    }
    console.log(isOK)
    console.log(sum)
}

sameNumbers(2222222)
sameNumbers(1234)