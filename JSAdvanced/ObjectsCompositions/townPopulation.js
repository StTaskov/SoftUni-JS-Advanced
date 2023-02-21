function solve(arr){
    let result = []
    const obj = {}
    for (let town of arr){
        [key, value] = town.split(' <-> ')
        if (key in obj){
            obj[key] += Number(value)
        }else{
        obj[key] = Number(value)
        }
    }
    for (const key in obj){
        result.push(`${key} : ${obj[key]}`)
    }

    result = result.join('\n')
    return result
}  

console.log(solve(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']
))