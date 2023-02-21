window.addEventListener('load', solve);

function solve() {
    
    // These are form inputs
    let modelElement = document.getElementById('model');
    let yearElement = document.getElementById('year');
    let descriptionElement = document.getElementById('description');
    let priceElemnt = document.getElementById('price');

    // Add button form
    let addButtonElment = document.getElementById('add')
    addButtonElment.addEventListener('click', (e) => {
        e.preventDefault();
        // These are table fields
        let tableElement = document.getElementById('furniture-list')

        // Create tr with classes 
        let trInfoTag = document.createElement('tr')
        trInfoTag.className = 'info'
        let trHide = document.createElement('tr')
        trHide.classList.add('.hide')

        // Create all td tags for Info
        let currentModelElement = document.createElement('td')
            currentModelElement.textContent = modelElement.value
        let currentPriceElement = document.createElement('td')
            currentPriceElement.textContent = Math.round(priceElemnt.value)
        let currentButtonlElement = document.createElement('td')
            let moreInfoButton = document.createElement('button')
                moreInfoButton.textContent = 'More Info'
                moreInfoButton.classList.add('moreBtn')
                moreInfoButton.addEventListener('click', () => {
                    moreInfoButton.textContent = 'Less Info'
                    trHide.style.display = 'contents'
                })
            let buyButton = document.createElement('button')
                buyButton.textContent = 'Buy it'
                buyButton.classList.add('buyBtn')

        currentButtonlElement.appendChild(moreInfoButton)
        currentButtonlElement.appendChild(buyButton)

        // Apeend all td tags
        trInfoTag.appendChild(currentModelElement)
        trInfoTag.appendChild(currentPriceElement)
        trInfoTag.appendChild(currentButtonlElement)
        
        // Create all td tags for Hide
        let currentYearElemt = document.createElement('td')
            currentYearElemt.textContent = yearElement.value
        let currentDescriptionElemt = document.createElement('td')
            currentDescriptionElemt.textContent = descriptionElement.value
            currentDescriptionElemt.setAttribute('colspan', '3')
        
        // Append all td tags to hide
        trHide.appendChild(currentYearElemt)
        trHide.appendChild(currentDescriptionElemt)
        

        // Append trInfoTag
        tableElement.appendChild(trInfoTag)

        modelElement.value = ''
        yearElement.value = ''
        descriptionElement.value = ''
        priceElemnt.value = ''
    })
    
}
