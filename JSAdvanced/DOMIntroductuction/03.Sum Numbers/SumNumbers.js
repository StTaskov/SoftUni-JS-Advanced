function calc() {
    // Take first and second number from HTML element
    let firstNumberLikeElement = document.getElementById('num1')
    let secondNumberLikeElement = document.getElementById('num2')
    //Calculate the sum from first and second numbers, place them at numbers
    let firstNumber = Number(firstNumberLikeElement.value)
    let secondNumber = Number(secondNumberLikeElement.value)
    let sum = firstNumber + secondNumber
    //Return them by replacing
    let placeHolder = document.getElementById('sum')
    placeHolder.textContent = sum
}
