function car(object){
    let result = {}
    let {model, power, color, carriage, wheelsize} = object
    result.model = model
    if (power <= 90){
        result.engine = {power: 90, volume: 1800}
    }else if (power <= 120){
        result.engine = {power: 120, volume:2400}
    }else{
        result.engine = {power:200, volume: 3500}
    }
    if (carriage == "hatchback"){
        result.carriage = {type: 'hatchback', color: color}
    }else{
        result.carriage = {type: 'coupe', color: color}
    }
    if (wheelsize % 2 != 0){
        result.wheels = [wheelsize, wheelsize, wheelsize, wheelsize]
    }else{
        wheelsize -= 1
        result.wheels = [wheelsize, wheelsize, wheelsize, wheelsize]
    }
    
    return result
}

