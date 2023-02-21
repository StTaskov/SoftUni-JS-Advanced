window.addEventListener('load', solve);

function solve() {
    // Take inputs 
    let genreField = document.getElementById('genre')
    let nameField = document.getElementById('name')
    let authorField = document.getElementById('author')
    let dateField = document.getElementById('date')
    let addBtn = document.getElementById('add-btn')

    let collectionOfSongsElement = document.querySelector('.all-hits-container')
    let savedSongsField = document.querySelector('.saved-container')
    let likesField = document.querySelector('.likes')


    addBtn.addEventListener('click', (e) => {
        e.preventDefault()

        if (genreField.value != '' || nameField.value != '' || authorField.value != '' || dateField.value != '') {
            let div = document.createElement('div')
            div.classList.add('hits-info')

            div.innerHTML = `<img src="./static/img/img.png">
            <h2>Genre: ${genreField.value}</h2>
            <h2>Name: ${nameField.value}</h2>
            <h2>Author: ${authorField.value}</h2>
            <h3>Date: ${dateField.value}</h3>
            <button class="save-btn">Save Song</button>
            <button class="like-btn">Like Song</button>
            <button class="delete-btn">Delete</button>`
            collectionOfSongsElement.appendChild(div)
        }

        let saveSongBtn = document.querySelector('.save-btn')
        let likeSongBtn = document.querySelector('.like-btn')
        let deletBtn = document.querySelector('.delete-btn')

        saveSongBtn.addEventListener('click', (e) => {

            let div = document.createElement('div')
            div.classList.add('hits-info')

            div.innerHTML = `<img src="./static/img/img.png">
            <h2>Genre: ${genreField.value}</h2>
            <h2>Name: ${nameField.value}</h2>
            <h2>Author: ${authorField.value}</h2>
            <h3>Date: ${dateField.value}</h3>
            <button class="delete-btn">Delete</button>`

            collectionOfSongsElement.removeChild(e.currentTarget.parentNode)
            savedSongsField.appendChild(div)

            let delBtn = savedSongsField.querySelector('.delete-btn')
            delBtn.addEventListener('click', (e) => {
                savedSongsField.removeChild(div)
                
            })


        })

        likeSongBtn.addEventListener('click', function addLike(e){

            if(!e.target.classList.contains('like-btn')){
                return;
            }
            e.target.disable = true;
            totalLikesField.innerHTML = `Total likes: 1`

        })

        deletBtn.addEventListener('click', () => {
            collectionOfSongsElement.removeChild(deletBtn.parentNode)
        })



    })
}