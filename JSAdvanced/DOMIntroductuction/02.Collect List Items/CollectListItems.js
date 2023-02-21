function extractText() {
    let currentList = document.getElementById('items').getElementsByTagName('li')
    let result = ''
    for (let i = 0; i < currentList.length; i++){
        result += currentList[i].textContent + '\n'
    }
    let placeHolder = document.getElementById('result')
    placeHolder.textContent = result
}