function extract(content) {
    result = ''
    // Get text
    let textLikeElement = document.getElementById('content')
    let text = textLikeElement.textContent
    // Find text between parenthesis with RegExp
    var reBrackets = /\((.+?)\)/g;
    let match = reBrackets.exec(text)
    while (match != null){
        result += (match[1])
        result += "; "
        match = reBrackets.exec(text)
    }
    // Move it to result array and return it
    return result
}       
