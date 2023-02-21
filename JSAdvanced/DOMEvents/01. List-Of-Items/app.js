function addItem() {
    let inputTextElement = document.getElementById('newItemText')
    let listElement = document.querySelector('#items')

    let newLiElement = document.createElement('li')
    newLiElement.textContent = inputTextElement.value
    listElement.appendChild(newLiElement)
}