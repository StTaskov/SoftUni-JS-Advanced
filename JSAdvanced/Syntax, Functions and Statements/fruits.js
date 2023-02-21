function calculatePriceForFruits (fruit, grams, price){
    let kg = grams / 1000
    let priceForKG = kg * price
    console.log(`I need $${priceForKG.toFixed(2)} to buy ${kg.toFixed(2)} kilograms ${fruit}.`)
}


calculatePriceForFruits('orange', 2500, 1.80)