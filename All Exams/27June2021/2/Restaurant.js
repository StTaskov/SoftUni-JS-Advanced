class Restaurant {
    constructor(budgetMoney) {
        this.budgetMoney = budgetMoney;
        this.menu = {}
        this.stockProducts = {}
        this.history = []
    }

    loadProducts(products) {
        let result = ''
        products.forEach(el => {
            let [productName, productQuantity, productTotalPrice] = el.split(' ')
            productTotalPrice = Number(productTotalPrice)
            productQuantity = Number(productQuantity)

            if (productTotalPrice < this.budgetMoney) {

                if (!this.stockProducts[productName]) {
                    this.stockProducts[productName] = Number(productQuantity)
                    this.budgetMoney -= productTotalPrice
                } else {
                    this.stockProducts[productName] += Number(productQuantity)
                    this.budgetMoney -= productTotalPrice
                }
                this.budgetMoney -= productTotalPrice
                result += `Successfully loaded ${productQuantity} ${productName}\n`
                this.history.push(`Successfully loaded ${productQuantity} ${productName}\n`)
            } else {
                result += `There was not enough money to load ${productQuantity} ${productName}\n`
                this.history.push(`There was not enough money to load ${productQuantity} ${productName}\n`)
            }
        })
        return result
    }

    addToMenu(meal, neededProducts, price) {
        price = Number(price)
        let result = ''
        if (!this.menu[meal]) {
            for (const el of neededProducts) {

                let name, quantity = el
                this.menu[meal] = {
                    productName: name,
                    productQuantity: Number(quantity),
                    price
                }
                let menuSize = Object.keys(this.menu).length
                if (menuSize == 1) {
                    result += `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`
                } else {
                    result += `Great idea! Now with the ${meal} we have ${menuSize} meals in the menu, other ideas?`
                }
            }
        } else {
            result += `The ${meal} is already in the our menu, try something different.`
        }
        return result
    }

    showTheMenu() {
        let result = ''
        let lastMeal = Object.keys(this.menu)[Object.keys(this.menu).length - 1]
        if (Object.keys(this.menu).length == 0) {
            result += "Our menu is not ready yet, please come later..."
        } else {
            for (const key in this.menu) {
                if (key == lastMeal) {
                    result += `${key} - $ ${this.menu[key].price}`
                } else {
                    result += `${key} - $ ${this.menu[key].price}\n`
                }
            }
        }
        return result
    }

    makeTheOrder(meal) {


        if (!this.menu[meal]) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`
        } else {
            let neededProducts = this.menu[meal].productName

            console.log(neededProducts)
            console.log(Object.keys(this.stockProducts))
        }
    }
}

let test = new Restaurant(1000);
console.log(test.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));
console.log(test.budgetMoney);