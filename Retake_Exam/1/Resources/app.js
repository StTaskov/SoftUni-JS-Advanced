window.addEventListener('load', solve);

function solve() {
    const formData = document.querySelector('form')
    const recieverOrders = document.querySelector('#received-orders')
    const completedORders = document.querySelector('#completed-orders')
    const submitBtn = document.querySelector("button")
    const clearBtn = document.querySelector('.clear-btn')
    let selectedData = {}

    submitBtn.addEventListener('click', submit)
    clearBtn.addEventListener('click', clear)


    function submit(e) {
        e.preventDefault()

        const data = {
            type: formData.querySelector('#type-product'),
            description: formData.querySelector('#description'),
            client: formData.querySelector('#client-name'),
            phone: formData.querySelector('#client-phone')

        }

        selectedData = {
            type: data.type.value,
            description: data.description.value,
            client: data.client.value,
            phone: data.phone.value
        }

        if (data.description.value == '' || data.client.value == '' || data.phone.value == '') {
            return
        }

        recieverOrders.appendChild(
            createEl('div', { 'class': "container" },
                createEl('h2', {}, `Product tpe for repair: ${selectedData.type}`),
                createEl('h3', {}, `Client information: ${selectedData.client}, ${selectedData.phone}`),
                createEl('h4', {}, `Description of problem: ${selectedData.description}`),
                createEl('button', { "className": "start-btn" }, 'Start repair'),
                createEl('button', { "className": "finish-btn", "disabled": true }, 'Finish repair')
            )
        )

        const start = document.querySelector('.start-btn')
        const finish = document.querySelector('.finish-btn')
        start.addEventListener('click', (e) => {
            e.preventDefault()
            e.currentTarget.disabled = true
            finish.disabled = false
        })

        finish.addEventListener('click', (e) => {
            e.preventDefault()
            completedORders.appendChild(createEl('div', { 'class': "container" },
                createEl('h2', {}, `Product tpe for repair: ${selectedData.type}`),
                createEl('h3', {}, `Client information: ${selectedData.client}, ${selectedData.phone}`),
                createEl('h4', {}, `Description of problem: ${selectedData.description}`),
            ))
            e.currentTarget.disabled = false
            start.disabled = true
        })

        for (const key in data) {
            data[key].value = ''
        }


    }

    function clear(e) {
        e.preventDefault()

        const children = Array.from(completedORders.children)
        for (const child of children) {
            if(child.tagName == 'DIV'){
                completedORders.removeChild(completedORders.lastChild)
            }
        }
    }



    function createEl(type, attr, ...content) {
        // Create element from input type
        const element = document.createElement(type)

        // Attr is object we loop it and add prop to the element
        for (let prop in attr) {
            element[prop] = attr[prop]
        }

        for (let item of content) {
            if (typeof item == 'string' || typeof item == 'number') {
                item = document.createTextNode(item)
            }
            element.appendChild(item)
        }

        return element;
    }

}