function search() {
   // Take list of towns
   let townElements = Array.from(document.querySelectorAll('#towns li'))
   //Make logic where we take input like a RegExp
   //bold and underline the mathes plus take their count
   let input = document.getElementById('searchText').value
   townElements.forEach(el => {
      el.style.fontWeight = 'normal'
      el.style.textDecoration = 'normal'
   })
   let targetLis = townElements
   .filter(el => el.textContent.includes(input))
   .map(el => {
      el.style.fontWeight = "bold"
      el.style.textDecoration = "underline"
   })

   //Return conter
   let placeholder = document.getElementById('result')
   placeholder.textContent =  `${targetLis.length} matches found`
}