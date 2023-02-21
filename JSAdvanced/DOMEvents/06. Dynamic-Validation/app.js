function validate() {
    // Take input value
    let inputEmailElement = document.getElementById('email')

    inputEmailElement.addEventListener('change', (e) => {
        if (!/^[a-z]+@[a-z]+.[a-z]+/g.test(inputEmailElement.value)) {
            e.target.setAttribute('class', 'error')
        }else{
            inputEmailElement.value = ''
        }
    })
}