window.addEventListener('load', solve);

function solve() {
    // 1. Select all inputs and add button
    let inputModelElement = document.getElementById('model')
    let inputYearElement = document.getElementById('year')
    let inputDescriptionElement = document.getElementById('description')
    let inputPriceElement = document.getElementById('price')
    let addBtn = document.getElementById('add')

    let furnitureListElement = document.getElementById('furniture-list')

    // 2. Add event listener to the button
    addBtn.addEventListener('click', (e) => {
        e.preventDefault()
        // a) Valdiate the fields
        if (inputModelElement.value == '' ||
            inputYearElement.value == '' ||
            inputDescriptionElement.value == '' ||
            inputPriceElement.value == '' ||
            Number(inputYearElement.value) < 0 ||
            Number(inputPriceElement.value) < 0) {
            return;
        }

        let tr =

    })

}
