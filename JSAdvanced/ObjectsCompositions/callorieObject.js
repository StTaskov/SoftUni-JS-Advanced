function composeObject(array){
    result = {}
    for (let i=0; i < array.length; i+=2){
        if (array[i] in result){
            result[array[i]] += Number(array[i+1])
        }
        result[array[i]] = Number(array[i+1])
    }

    return result
}

console.log(composeObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']))
