function solve(arr){
    let result = {}
    for (let data of arr) {
        let [town, productName, productPrice] = data.split(" | ")
        if (!result[productName]){
        result[productName] = {town, price: Number(productPrice)}
        }else{
            if (result[productName].price >= Number(productPrice)){
                result[productName].price = Number(productPrice)
            }
        }
    }

    let toReturn = []
    for (let product in result){
        toReturn.push(`${product} -> ${result[product].price} (${result[product].town})`)
    }
    toReturn = toReturn.join("\n")
    return toReturn
}
console.log(solve(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']
))