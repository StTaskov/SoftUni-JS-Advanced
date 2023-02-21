function solve(data){
    result = {}
    data.forEach((el) => {
        let [brand, model, quantity] = el.split(' | ')
        quantity = Number(quantity)

        if (!result[brand]){
            result[brand] = []
            result[brand].push([model, quantity])
        }else if (result[brand].forEach((el) => {return [el[0]]}) == model){
            result[brand][el][quantity] += quantity
        }else{
            result[brand].push([model, quantity])
        }
    })
    return result
}

console.log(solve(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']
))