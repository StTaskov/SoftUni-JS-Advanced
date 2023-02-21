function magicMatrix(matrix) {
    let flag = true;
    let currentRowSum = 0
    for (let row in matrix) {
        matrix[row].forEach(el => currentRowSum += el)
        let currentColSum = 0
        for (let col in matrix) {
            currentColSum += matrix[col][row]
        }
        if (currentColSum != currentRowSum){
            flag = false
            break
        }else{
            currentRowSum = 0
            currentColSum = 0
            continue
        }
    }if (!flag){
        console.log(false)
    }else{
        console.log(true)
    }
}

magicMatrix([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
   
   )
