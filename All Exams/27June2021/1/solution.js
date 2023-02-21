window.addEventListener('load', solution)

function solution() {
  // Take inf from inputs and outputs 
  
  let fields = Array.from(document.querySelectorAll('#form input'))
  let inputs = {
    'Full Name': fields[0].value,
    'Email': fields[1].value,
    'Phone Number': fields[2].value,
    'Address': fields[3].value,
    'Postal Code': fields[4].value,
  }

  let outputField = document.getElementById('infoPreview')

  // Take the buttons
  let submitBtn = fields.pop()
  let editBtn = document.getElementById('editBTN')
  let continueBtn = document.getElementById('continueBTN')

  //Add eventHandler to submit button
  submitBtn.addEventListener('click', submit.bind(null, fields, outputField, submitBtn,  editBtn, continueBtn))
  continueBtn.addEventListener('click', count)

  function submit(fields, output, submitBtn, editBtn, continueBtn) {
    // Here all fields
    const inputs = {
      'Full Name': fields[0].value,
      'Email': fields[1].value,
      'Phone Number': fields[2].value,
      'Address': fields[3].value,
      'Postal Code': fields[4].value,
    }

    if (inputs['Full Name'] == '' || inputs['Email'] == '') {
      return;
    }

    for (const key in inputs) {
      passed = `${key}: ${inputs[key]}`
      output.appendChild(createEl('li', {}, passed))
    }

    fields.forEach(el => el.value = '')
    submitBtn.disabled = true;
    editBtn.disabled = false;
    continueBtn.disabled = false
    
    editBtn.addEventListener('click', edit)
    function edit(){
      //We need to take output values 
      for (const field of fields) {
        
      }
      // Start loop thrue them and place evey value to corresponding field
      submitBtn.disabled = false;
      editBtn.disabled = true;
      continueBtn.disabled = true
    }
  
  }
  function count(){
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



