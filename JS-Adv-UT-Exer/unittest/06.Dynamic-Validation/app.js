
function validate() {
    //Take input field
    let inputFieldElement = document.getElementById('email');
    let emailRegex = /[a-z]+@[a-z]+.[a-z]+/

    inputFieldElement.addEventListener('change', (e) => {
        if (emailRegex.test(inputFieldElement.value)) {
            inputFieldElement.value = ''
            e.target.removeAttribute('class');
        }

        inputFieldElement.classList.add('error')
    
    });
}