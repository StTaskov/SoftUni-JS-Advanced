function create(words) {
   let contentElement = document.getElementById('content')
   for (const word of words) {
      //Create Div element
      let currentDivElement = document.createElement('div');
      //Create paragraph element and add it to div element
      let currentPara = document.createElement('p')
      currentPara.style.display = 'none';
      currentPara.textContent = word;  
      currentDivElement.appendChild(currentPara)
      //Create event 
      currentDivElement.addEventListener('click', () => {
         currentPara.style.display = 'block'
      })
      // Append Div to output div element
      contentElement.appendChild(currentDivElement)
   }
}