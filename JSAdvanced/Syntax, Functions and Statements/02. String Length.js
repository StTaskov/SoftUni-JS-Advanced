function solveProblem (word1, word2, word3){
    const allLenght = word1.length + word2.length + word3.length
    console.log(allLenght)
    console.log(Math.floor(allLenght / 3))
}

solveProblem('chocolate', 'ice cream', 'cake')
solveProblem('pasta', '5', '22.3')