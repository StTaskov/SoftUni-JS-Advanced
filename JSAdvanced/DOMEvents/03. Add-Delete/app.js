function addItem() {
    let inputTextElement = document.getElementById('newItemText')
    let listElement = document.querySelector('#items')

    //Create new table element
    let newLiElement = document.createElement('li')
    //Create new a element with href = #
    let newAelement = document.createElement('a')
    newAelement.setAttribute('href', '#')
    newAelement.textContent = "[Delete]"
    newAelement.addEventListener('click', () =>{
        listElement.removeChild(newLiElement)
    })

    // Apend new elements
    newLiElement.textContent = inputTextElement.value
    newLiElement.appendChild(newAelement)
    listElement.appendChild(newLiElement)
}