class VegetableStore {
    constructor(owner, location) {
        this.owner = owner
        this.location = location
        this.availableProducts = []
    }

    loadingVegetables(vegetables) {
        let result = []

        vegetables.forEach(vegetable => {
            let [type, quantity, price] = vegetable.split(' ')
            quantity = Number(quantity)
            price = Number(price)

            const currentProduct = {
                type,
                quantity,
                price
            }

            for (const product of this.availableProducts) {
                if (product.type == currentProduct.type) {
                    product.quantity += currentProduct.quantity
                    if (product.price < currentProduct.price) {
                        product.price = currentProduct.price
                    }
                }
                else {
                    this.availableProducts.push(currentProduct)
                }

            }


            if (this.availableProducts.length == 0) {
                this.availableProducts.push(currentProduct)
            }

            if (result.indexOf(currentProduct.type) === -1) {
                result.push(currentProduct.type)
            }

        });

        return `Successfully added ${result.join(', ')}`
    }

    buyingVegetables(selectedProducts) {
        selectedProducts.forEach(product => {
            let [type, quantity] = product.split(' ')

            const currentProduct = {
                type,
                quantity
            }

            const product = this.availableProducts.find(product => product.type == currentProduct.type)

            if(product){
                const price = 0.00
                throw new Error(`${product.type} is not available in the store, your current bill is ${totalPrice}.`)
            }else{

            }
        })
    }



}


let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));