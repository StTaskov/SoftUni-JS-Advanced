function focused() {
    let allSectionInputElements = document.getElementsByTagName("input")
   for (el of allSectionInputElements) {

        el.addEventListener('focus', (e) => e.target.parentNode.setAttribute('class', 'focused'));
        el.addEventListener('blur', (e) => e.target.parentNode.removeAttribute('class'));
   }
   

}   