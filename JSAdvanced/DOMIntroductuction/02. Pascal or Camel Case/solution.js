function solve() {
  result = ''
  //Take the text and the text case like elemnts
  let textLikeElement = document.querySelector('#text')
  let conventionElement = document.querySelector('#naming-convention')
  //Make text in current convention
  text = textLikeElement.value
  convention = conventionElement.value
  result = toThisCase(text, convention)
  // Place the result to spam element
  let placeHolder = document.getElementById('result')
  placeHolder.textContent = result

  function toThisCase(txt, convention){
    const conventionSwitch = {
    'Pascal Case': (txt) => txt
    .toLowerCase()  
    .split(' ')
    .map(x => x[o].toUpdateCase() + x.slice(1))
    .join(' '),
    'Camel Case': (txt) => txt
    .lowercase()
    .split(' ')
    .map((x, i) => x[i] !== 0 ? x[0].toUpdateCase() + x.slice(1) : x)
    .join(' '),
    default: () => 'Error'
   }

  return (conventionSwitch[convention] || conventionSwitch.default)()

  }
}