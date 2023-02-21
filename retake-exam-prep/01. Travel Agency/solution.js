window.addEventListener('load', solution)

function solution() {

  const infoDiv = document.querySelector('#form')
  const previewDiv = document.querySelector('#infoPreview')
  const submitBtn = document.querySelector('#submitBTN')
  const editBtn = document.querySelector('#editBTN')
  const countinueBtn = document.querySelector('#continueBTN')
  let neededData = {}

  submitBtn.addEventListener('click', submitData)
  editBtn.addEventListener('click', editData)
  countinueBtn.addEventListener('click', countinue)


  function submitData(e) {
    e.preventDefault()


    const data = {
      fullNames: infoDiv.querySelector('#fname'),
      email: infoDiv.querySelector('#email'),
      phone: infoDiv.querySelector('#phone'),
      address: infoDiv.querySelector('#address'),
      postalCode: infoDiv.querySelector('#code')

    }

    neededData = {
      'Full Names': data.fullNames.value,
      'Email': data.email.value,
      'Phone': data.phone.value,
      'Address': data.address.value,
      'Postal Code': data.postalCode.value
    }

    if (data.fullNames.value == '' || data.email.value == '') {
      return
    }

    submitBtn.disabled = true
    editBtn.disabled = false
    countinueBtn.disabled = false

    for (const key in neededData) {
      passed = `${key}: ${neededData[key]}`
      previewDiv.appendChild(createEl('li', {}, passed))
    }

    for (const key in data) {
      data[key].value = ''
    }
  }

  function editData() {
    while (previewDiv.hasChildNodes()) {
      previewDiv.removeChild(previewDiv.lastChild);
    }

    const mapper = {
      'Full Names': document.querySelector('#fname'),
      'Email': document.querySelector('#email'),
      'Phone': document.querySelector('#phone'),
      'Address': document.querySelector('#address'),
      'Postal Code': document.querySelector('#code'),
    }

    for (const key in neededData) {
      mapper[key].value = neededData[key]
    }

    submitBtn.disabled = false
    editBtn.disabled = true
    countinueBtn.disabled = true


  }

  function countinue() {
    let blockEl = document.getElementById('block');
    blockEl.innerHTML = '';
    blockEl.appendChild(createEl('h3', {}, 'Thank you for your reservation!'))
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
