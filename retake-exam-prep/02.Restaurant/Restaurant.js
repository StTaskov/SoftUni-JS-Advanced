class Restaurant {
    constructor(budgetMoney) {
        this.budgetMoney = budgetMoney
        this.menu = {}
        this.stockProducts = {}
        this.history = []
    }

    loadProducts(products /* Array of strings*/) {

        for (let el of products) {
            let [productName, productQuantity, productTotalPrice] = el.split(' ')

            if (productTotalPrice <= this.budgetMoney) {
                if (this.stockProducts[productName]) {
                    this.stockProducts[producName] = productQuantity
                } else {
                    this.stockProducts[producName] += productQuantity

                }
                this.budgetMoney -= productTotalPrice
                this.history.push(`Successfully loaded ${productQuantity} ${productName}`)
            } else {
                this.history.push(`There was not enough money to load ${productQuantity} ${productName}`)
            }
        }

        return this.history.join('\n')
    }

}



let kitchen = new Restaurant(1000);
console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));
