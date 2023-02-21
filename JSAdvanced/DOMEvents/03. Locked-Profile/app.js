function lockedProfile() {
    let allShomMoreButtonElements = Array.from(document.getElementsByTagName('button'))
    // Take all radio buttons
    function showMore(e){
        let checkedRadioButton = e.currentTarget.parentNode.querySelector('input[type=radio]:checked')
        if (checkedRadioButton.getAttribute('value') === 'unlock'){
            let currentHiddenElement = e.currentTarget.parentNode.querySelector('input[type=email]')
            currentHiddenElement.parentNode.style.display = 'block'
            e.currentTarget.textContent = 'Hide it'
        }
    }


    function hideIt(e){
        let checkedRadioButton = e.currentTarget.parentNode.querySelector('input[type=radio]:checked')
        if (button.textContent = 'Hide it' && checkedRadioButton.getAttribute('value') === 'unlock'){
            let currentHiddenElement = e.currentTarget.parentNode.querySelector('input[type=email]')
            currentHiddenElement.parentNode.style.display = 'none'
            e.currentTarget.textContent = 'Show more'
        }
    }
    
    /* Take all Show more buttons and set 
    event listenersit is not locked display
     hidden info*/
    for (const button of allShomMoreButtonElements) {
        button.addEventListener('click', showMore(event));
        button.addEventListener('click', hideIt(event))
    }


}
