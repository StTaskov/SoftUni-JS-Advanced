function solve(num, place){
    const motorway = 130
    const interstate = 90
    const city = 50
    const residential = 20

    let diffrence = 0
    let overLimit = ""
    let where = ''

    if (place == 'motorway'){
        diffrence = num - motorway
        where = motorway 
        } else if (place == 'interstate'){
            diffrence = num - interstate
            where = interstate
        }else if (place == 'city'){
            diffrence = num - city
            where = city 
        }else{
            diffrence = num - residential
            where = residential
        }

    if (diffrence <= 20){
        overLimit = "speeding"
    }else if (diffrence <= 40){
        overLimit = "excessive speeding"
    }else{
        overLimit = "reckless driving"
    }

    if (diffrence > 0){
        console.log(`The speed is ${diffrence} km/h faster than the allowed speed of ${where} - ${overLimit}`)
    }else{
        console.log(`Driving ${num} km/h in a ${where} zone`)
    }
}

solve(200, 'motorway')   