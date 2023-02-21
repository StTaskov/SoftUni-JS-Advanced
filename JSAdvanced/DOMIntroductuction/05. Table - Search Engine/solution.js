function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      //Get selected elements
      let searchedInput = document.getElementById('searchField')
      let allRowsElemennts = Array.from(document.querySelectorAll('tbody tr'))
      //Clear styles from previous search 
      allRowsElemennts.forEach(el => {
         el.className = ''
      })
      //Match row elements text
      let filltered = allRowsElemennts.filter(el => {
         let values = Array.from(el.children)
         if (values.some(x => x.textContent.includes(searchedInput.value))){
            el.className = 'select'
         }   
      })
      //Clear text field 
      searchedInput.value = ''
   }
}