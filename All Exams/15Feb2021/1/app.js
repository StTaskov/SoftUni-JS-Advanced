function solution() {
 
    let input = document.querySelector('.card input');
    let button = document.querySelector('.card button');
    let ulElement = document.querySelector('.card ul');
    // let arr = [];
 
    button.addEventListener('click', e => {
        e.preventDefault();
 
        let liElement = document.createElement('li');
        liElement.setAttribute('class', 'gift');
        liElement.textContent = input.value;
        // arr.push(input.value);
 
        let btnSendElement = document.createElement('button');
        btnSendElement.setAttribute('id', 'sendButton');
        btnSendElement.textContent = 'Send';
        let btnDiscardElement = document.createElement('button');
        btnDiscardElement.setAttribute('id', 'discardButton');
        btnDiscardElement.textContent = 'Discard';
 
        // arr.sort();
        // liElement.textContent = arr.forEach(x => console.log(x));
        liElement.appendChild(btnSendElement);
        liElement.appendChild(btnDiscardElement);
        ulElement.appendChild(liElement);
 
        input.value = "";
 
        btnSendElement.addEventListener('click', e => {
            e.preventDefault;
 
            let ulSentElement = document.querySelector('.container > section:nth-of-type(3) > ul');
            e.target.remove();
            btnDiscardElement.remove();
            ulSentElement.appendChild(liElement);
 
        })
 
        btnDiscardElement.addEventListener('click', e => {
            e.preventDefault;
 
            let ulDiscardElement = document.querySelector('.container > section:nth-of-type(4) > ul');
            e.target.remove();
            btnSendElement.remove();
            ulDiscardElement.appendChild(liElement);
        })
 
    })
 

}