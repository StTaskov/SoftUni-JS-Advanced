function checker (x1, y1 , x2, y2){
    result = ""
    let firstCoordinates = [x1, y1]
    let secondCoordinates = [x2, y2]
    let coordinates = [0, 0]

    let first = Math.sqrt((coordinates[0] - firstCoordinates[0])**2 - (coordinates[1] - firstCoordinates[1] **2))
    let second = Math.sqrt((coordinates[0] - secondCoordinates[0])**2 - (coordinates[1] - secondCoordinates[1] **2))
    let third = Math.sqrt((secondCoordinates[0] - firstCoordinates[0])**2 + (secondCoordinates[1] - firstCoordinates[1])**2)


    if (Number.isInteger(first)){
        console.log(`{${firstCoordinates.join(', ')}} to {${coordinates.join(', ')}} is valid`)
    }else{
        console.log(`{${firstCoordinates.join(', ')}} to {${coordinates.join(', ')}} is invalid`)
    }
    if (Number.isInteger(second)){
        console.log(`{${secondCoordinates.join(', ')}} to {${coordinates.join(', ')}} is valid`)
    }else{
        console.log(`{${secondCoordinates.join(', ')}} to {${coordinates.join(', ')}} is invalid`)
    }
    if (Number.isInteger(third)){
        console.log(`{${firstCoordinates.join(', ')}} to {${secondCoordinates.join(', ')}} is valid`)
    }else{
        console.log(`{${firstCoordinates.join(', ')}} to {${secondCoordinates.join(', ')}} is invalid`)
    }

}   

checker(3, 0, 0, 4)