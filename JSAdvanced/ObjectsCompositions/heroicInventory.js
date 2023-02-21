function heroRegister(arr){
    let result = []
    for (let i=0; i<arr.length; i++){
        let [name, level, items] = arr[i].split(" / ")
        currentObject = { 
            name,
            level: Number(level),
            items: items ? items.split(", ") : [] 
        }
        result.push(currentObject)
    }

    JSON = JSON.stringify(result)
    return JSON
}

console.log(heroRegister(['Isacc / 25',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
))