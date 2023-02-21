function solve() {
    //Take all inputs and outputs
    let taskInput = document.getElementById('task')
    let descriptionInput = document.getElementById('description')
    let dateInput = document.getElementById('date')
    let openSectionDiv = document.querySelector('.wrapper').children[1].children[1]
    let inProgressSectionDiv = document.getElementById('in-progress')
    let completeSectionDiv = document.querySelector('.wrapper').children[3].children[1]
    let addBtn = document.getElementById('add')
    //Place event listener to the button
    addBtn.addEventListener('click', (e) => {
        e.preventDefault()

        //Validate the fields
        if (taskInput.value == '' || descriptionInput.value == '' || dateInput.value == '') {
            return;
        }

        //Create element place it to open section 
        openSectionDiv.appendChild(create('article', {},
            create('h3', {}, taskInput.value),
            create('p', {}, descriptionInput.value),
            create('p', {}, dateInput.value),
            create('div', { 'class': "flex" },
                create('button', { 'class': "green" }, 'Start'),
                create('button', { 'class': "red" }, 'Delete'))
        ))


    })

    //Create button listeners to new element 
    //When start button is click move the element to next section
    //When finish butoon is click move the element to complete section
    //where u need to remvoe button and stay onlu element


    //Function for creating elements
    function create(type, params, ...others) {
        const listeners = {
            'Start': function () {
                let createdArticle =
                    create('article', {},
                        create('h3', {}, taskInput.value),
                        create('p', {}, descriptionInput.value),
                        create('p', {}, dateInput.value),
                        create('div', { 'class': "flex" },
                            create('button', { 'class': "red" }, 'Delete'),
                            create('button', { 'class': "orange" }, 'Finish'))
                    )
                inProgressSectionDiv.appendChild(createdArticle)
            },
            'Delete': function (e) { 
               e.currentTarget.parentNode.parentNode.remove()
            },
            'Finish': function () {
                let createdArticle =  create('article', {},
                create('h3', {}, taskInput.value),
                create('p', {}, descriptionInput.value),
                create('p', {}, dateInput.value))

                completeSectionDiv.appendChild(createdArticle)
            }
        }
        const element = document.createElement(type)

        for (const param in params) {
            if (param == 'class') {
                element.classList.add(params[param])
            } else {
                element[param] = params[param]
            }
        }

        for (let el of others) {
            if (typeof (el) == 'string' || typeof (el) == 'number') {
                el = document.createTextNode(el)
            }
            if (type == 'button') {
                element.addEventListener('click', listeners[el.textContent])
            }
            element.appendChild(el)
        }

        return element;
    }
}