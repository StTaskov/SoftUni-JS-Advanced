function solve() {
   let allAddButtnosElements = Array.from(document.getElementsByClassName('add-product'))
   let textAreElement = document.getElementsByTagName('textarea')[0]
   let submitButtonElement = document.getElementsByClassName('checkout')[0]
   let money = 0
   let products = []


   for (const button of allAddButtnosElements){
      button.addEventListener('click', (e) => {
        let currentProduct = e.target.parentNode.parentNode
        let currentProductName = currentProduct.getElementsByClassName('product-title')[0].textContent
        let currentProductPrice = Number(currentProduct.getElementsByClassName('product-line-price')[0].textContent)
        money += currentProductPrice
        products.push(currentProductName) 
        textAreElement.textContent += `Added ${currentProductName} for ${currentProductPrice.toFixed(2)} to the cart.\n`

      })
   }

   submitButtonElement.addEventListener('click', () =>{
      textAreElement.textContent += `You bought ${products.join(', ')} for ${money.toFixed(2)}.`
      allButtonEllements = Array.from(document.querySelectorAll('button'))
      for (const button of allButtonEllements){
         button.disabled = true
      }
   })


}