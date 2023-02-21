function deleteByEmail() {
    let allEmailElements = document.querySelectorAll('#customers tbody tr')
    let inputEmailElement = document.getElementsByName('email')[0]
    let result = document.getElementById('result')



    for (let i = 0; i < allEmailElements.length; i++) {
        currentEmailTxt = allEmailElements[i].outerText
        if (currentEmailTxt.indexOf(inputEmailElement.value) !== -1) {
            allEmailElements[i].remove()
            result.textContent = 'Deleted'}
            break
        }
    
    if(!result.textContent){
        result.textContent = 'Not found.'
    }
        
}  