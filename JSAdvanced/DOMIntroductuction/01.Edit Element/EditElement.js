function editElement(element, oldValue, newValue) {
    let matcher = new RegExp(oldValue, 'g')
    let newString = element.textContent.replace(matcher, newValue);   
    element.textContent = newString
}